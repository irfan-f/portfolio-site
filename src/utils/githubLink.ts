export type GithubLinkMeta =
  | { kind: 'pr'; owner: string; repo: string; number: number }
  | { kind: 'repo'; owner: string; repo: string };

/** Parse github.com repo and pull request URLs for richer link UI. */
export function parseGithubLink(href: string): GithubLinkMeta | null {
  try {
    const url = new URL(href);
    if (url.hostname !== 'github.com') return null;

    const parts = url.pathname.split('/').filter(Boolean);
    if (parts.length >= 4 && parts[2] === 'pull') {
      const number = Number(parts[3]);
      if (!Number.isFinite(number)) return null;
      return { kind: 'pr', owner: parts[0]!, repo: parts[1]!, number };
    }

    if (parts.length === 2) {
      return { kind: 'repo', owner: parts[0]!, repo: parts[1]! };
    }

    return null;
  } catch {
    return null;
  }
}

export function githubLinkAriaLabel(
  meta: GithubLinkMeta,
  caption?: string,
  prStatus?: string | null,
): string {
  if (meta.kind === 'pr') {
    const statusPart = prStatus ? `, ${prStatus}` : '';
    const base = `${meta.repo} pull request #${meta.number}${statusPart}`;
    return caption ? `${caption} (${base}, opens in a new tab)` : `${base} (opens in a new tab)`;
  }
  const base = `${meta.repo} repository`;
  return caption ? `${caption} (${base}, opens in a new tab)` : `${base} (opens in a new tab)`;
}
