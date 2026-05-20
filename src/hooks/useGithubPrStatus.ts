import { useEffect, useState } from 'react';

export type GithubPrStatus = 'open' | 'merged' | 'closed' | 'draft';

type PrApiResponse = {
  state: string;
  merged_at: string | null;
  draft?: boolean;
};

const cache = new Map<string, GithubPrStatus | null>();

function resolvePrStatus(data: PrApiResponse): GithubPrStatus {
  if (data.draft) return 'draft';
  if (data.merged_at) return 'merged';
  if (data.state === 'open') return 'open';
  return 'closed';
}

function cacheKey(owner: string, repo: string, number: number): string {
  return `${owner}/${repo}#${number}`;
}

/** Live pull request state from the public GitHub API (unauthenticated, rate-limited). */
export function useGithubPrStatus(
  owner: string | undefined,
  repo: string | undefined,
  number: number | undefined,
): GithubPrStatus | null {
  const [status, setStatus] = useState<GithubPrStatus | null>(() => {
    if (owner == null || repo == null || number == null) return null;
    return cache.get(cacheKey(owner, repo, number)) ?? null;
  });

  useEffect(() => {
    if (owner == null || repo == null || number == null) {
      setStatus(null);
      return;
    }

    const key = cacheKey(owner, repo, number);
    const cached = cache.get(key);
    if (cached !== undefined) {
      setStatus(cached);
      return;
    }

    let cancelled = false;

    void fetch(
      `https://api.github.com/repos/${owner}/${repo}/pulls/${number}`,
      { headers: { Accept: 'application/vnd.github+json' } },
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('PR fetch failed'))))
      .then((data: PrApiResponse) => {
        if (cancelled) return;
        const next = resolvePrStatus(data);
        cache.set(key, next);
        setStatus(next);
      })
      .catch(() => {
        if (cancelled) return;
        cache.set(key, null);
        setStatus(null);
      });

    return () => {
      cancelled = true;
    };
  }, [owner, repo, number]);

  return status;
}

export function githubPrStatusLabel(status: GithubPrStatus): string {
  switch (status) {
    case 'merged':
      return 'Merged';
    case 'open':
      return 'Open';
    case 'closed':
      return 'Closed';
    case 'draft':
      return 'Draft';
  }
}
