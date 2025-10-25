import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPreview() {
  const allPosts = await getAllPosts();
  const latestPosts = allPosts.slice(0, 3);

  if (latestPosts.length === 0) return null;

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12 bg-[#f5f0e9]">
      <div>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
          <div>
            <p className="font-jetbrains text-xs md:text-sm uppercase tracking-wider text-accent mb-4">
              From the Blog
            </p>
            <h2 className="font-axel font-bold text-4xl md:text-5xl lg:text-6xl text-[#073742] uppercase leading-[0.9] md:leading-tight">
              LATEST INSIGHTS
            </h2>
          </div>
          <Link
            href="/blog"
            className="border-2 border-[#073742] text-[#073742] font-riposte px-6 py-3 rounded-full text-sm uppercase tracking-wide transition-all duration-200 hover:bg-[#073742] hover:text-cream w-fit"
          >
            View All Posts
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border-2 border-[#073742]/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-xl"
            >
              {/* Hero Image */}
              {post.heroImage && (
                <div className="relative aspect-video overflow-hidden bg-[#073742]">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}

              {/* Card Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-3 mb-3 text-xs">
                  <time className="font-jetbrains uppercase text-[#073742]/60 tracking-wider">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </time>
                  {post.readingTime && (
                    <>
                      <span className="text-[#073742]/30">•</span>
                      <span className="font-jetbrains uppercase text-[#073742]/60 tracking-wider">
                        {post.readingTime} min read
                      </span>
                    </>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-axel font-bold text-xl md:text-2xl text-[#073742] uppercase leading-tight mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="font-riposte text-[#073742]/80 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-jetbrains text-xs uppercase bg-[#073742]/5 text-[#073742]/70 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-accent font-riposte text-sm uppercase tracking-wide group-hover:gap-3 transition-all">
                  Read Post
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
