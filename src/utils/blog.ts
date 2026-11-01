import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

export function getPublishedPosts(
  posts: BlogPost[],
  asOf: Date = new Date(),
): BlogPost[] {
  return posts
    .filter((post) => !post.data.draft && post.data.pubDate <= asOf)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatBlogDate(date: Date): string {
  return date.toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function getReadingTime(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function getBlogPostPath(id: string): string {
  return `/blog/${id}/`;
}
