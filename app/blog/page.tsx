import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | Trailhead",
  description: "Guides on fast website launches, design, SEO, and running a cross-border digital business.",
};

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <>
      <Navbar variant="static" alwaysSolid />

      <div className="min-h-screen bg-[#f5f0e9]">
        {/* Compact Header */}
        <div className="bg-[#073742] py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="flex items-center gap-4 mb-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-riposte text-sm text-cream/70 hover:text-accent transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Home
              </Link>
              <span className="text-cream/30">•</span>
              <p className="font-jetbrains text-xs md:text-sm text-accent uppercase tracking-wider">
                Trailhead Insights
              </p>
            </div>
            <h1 className="font-axel font-bold text-3xl md:text-5xl lg:text-6xl text-cream uppercase mb-4 leading-tight">
              Blog
            </h1>
            <p className="font-riposte text-lg text-cream/80 max-w-2xl">
              Guides on design, fast launches, SEO, and cross-border operations. Built for founders who ship.
            </p>
          </div>
        </div>

      {/* Posts List */}
      <div className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-riposte text-lg text-[#073742]/60">
                No posts yet. Check back soon for insights on building and shipping fast.
              </p>
            </div>
          ) : (
            <ul className="space-y-8">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>
                    <article className="bg-white border-2 border-[#073742]/10 rounded-2xl p-6 md:p-8 hover:border-[#073742] hover:shadow-lg transition-all duration-300 group">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        {/* Hero Image */}
                        {post.heroImage && (
                          <div className="md:w-48 md:shrink-0">
                            <img
                              src={post.heroImage}
                              alt={post.title}
                              className="w-full h-48 md:h-32 object-cover rounded-xl border border-[#073742]/10"
                            />
                          </div>
                        )}

                        {/* Content */}
                        <div className="flex-1">
                          <time className="font-jetbrains text-xs uppercase text-[#073742]/60 tracking-wider">
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>

                          <h2 className="font-axel text-2xl md:text-3xl text-[#073742] uppercase mt-2 mb-3 group-hover:text-accent transition-colors">
                            {post.title}
                          </h2>

                          <p className="font-riposte text-[#073742]/70 text-base md:text-lg leading-relaxed mb-4">
                            {post.excerpt}
                          </p>

                          {/* Tags */}
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="font-jetbrains text-xs uppercase bg-[#073742]/5 text-[#073742]/70 px-3 py-1 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="font-jetbrains text-sm uppercase text-accent flex items-center gap-2 group-hover:gap-3 transition-all">
                            Read Post
                            <span className="transition-transform">→</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      </div>

      <Footer />
    </>
  );
}
