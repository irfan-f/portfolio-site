import type { LatestPost, ProjectTag } from '../data/latestPosts';

export type LatestProjectFilter = ProjectTag | 'all';

export type LatestPostsFilterState = {
  project: LatestProjectFilter;
  searchQuery: string;
};

export const LATEST_FILTER_ALL: LatestProjectFilter = 'all';

export function getProjectTagsFromPosts(posts: LatestPost[]): ProjectTag[] {
  const seen = new Set<ProjectTag>();
  for (const post of posts) {
    seen.add(post.projectTag);
  }
  return [...seen].sort((a, b) => a.localeCompare(b));
}

export function filterLatestPosts(
  posts: LatestPost[],
  { project, searchQuery }: LatestPostsFilterState,
): LatestPost[] {
  const query = searchQuery.trim().toLowerCase();

  return posts.filter((post) => {
    if (project !== LATEST_FILTER_ALL && post.projectTag !== project) {
      return false;
    }
    if (!query) {
      return true;
    }
    const haystack = `${post.title} ${post.excerpt}`.toLowerCase();
    return haystack.includes(query);
  });
}
