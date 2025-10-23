import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

const contentRoot = path.join(process.cwd(), "content/blog");

/**
 * Calculate reading time in minutes (average 200 words per minute)
 */
function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  heroImage?: string;
  draft?: boolean;
  readingTime?: number;
};

export type Post = {
  meta: PostMeta;
  content: React.ReactElement;
};

/**
 * Get all blog posts sorted by date (newest first)
 * Filters out drafts in production
 */
export async function getAllPosts(): Promise<PostMeta[]> {
  try {
    // Ensure directory exists
    await fs.mkdir(contentRoot, { recursive: true });

    const files = await fs.readdir(contentRoot);
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

    const posts = await Promise.all(
      mdxFiles.map(async (file) => {
        const filePath = path.join(contentRoot, file);
        const source = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(source);

        const slug = file.replace(/\.mdx$/, "");
        const readingTime = calculateReadingTime(content);

        return {
          slug,
          title: data.title || "Untitled",
          date: data.date || new Date().toISOString(),
          excerpt: data.excerpt || "",
          tags: data.tags || [],
          heroImage: data.heroImage,
          draft: data.draft || false,
          readingTime,
        } as PostMeta;
      })
    );

    // Filter drafts in production
    const published = process.env.NODE_ENV === "production"
      ? posts.filter((post) => !post.draft)
      : posts;

    // Sort by date descending
    return published.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

/**
 * Get a single blog post by slug
 */
export async function getPost(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(contentRoot, `${slug}.mdx`);
    const source = await fs.readFile(filePath, "utf8");

    const { data, content: mdxContent } = matter(source);

    // Compile MDX to React component
    const { content } = await compileMDX({
      source: mdxContent,
      options: {
        parseFrontmatter: false, // Already parsed with gray-matter
      },
    });

    const readingTime = calculateReadingTime(mdxContent);

    const meta: PostMeta = {
      slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || "",
      tags: data.tags || [],
      heroImage: data.heroImage,
      draft: data.draft || false,
      readingTime,
    };

    return { meta, content };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all unique tags from all posts
 */
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tagSet = new Set<string>();

  posts.forEach((post) => {
    post.tags?.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tag: string): Promise<PostMeta[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.tags?.includes(tag));
}
