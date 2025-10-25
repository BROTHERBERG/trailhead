import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPost, getAllPosts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogTableOfContents from "@/components/BlogTableOfContents";
import BlogProgressBar from "@/components/BlogProgressBar";
import NewsletterSignup from "@/components/NewsletterSignup";
import "../blog-prose.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | Trailhead",
    };
  }

  return {
    title: `${post.meta.title} | Trailhead Blog`,
    description: post.meta.excerpt,
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      type: "article",
      publishedTime: post.meta.date,
      images: post.meta.heroImage ? [post.meta.heroImage] : [],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { meta, content } = post;

  // Structured data for blog article
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": meta.title,
    "description": meta.excerpt,
    "image": meta.heroImage ? `https://trailheadmade.com${meta.heroImage}` : undefined,
    "datePublished": meta.date,
    "dateModified": meta.date,
    "author": {
      "@type": "Organization",
      "name": "Trailhead",
      "url": "https://trailheadmade.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Trailhead",
      "url": "https://trailheadmade.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://trailheadmade.com/blog/${slug}`
    },
    "keywords": meta.tags?.join(", "),
    "wordCount": meta.readingTime ? meta.readingTime * 200 : undefined,
    "timeRequired": meta.readingTime ? `PT${meta.readingTime}M` : undefined
  };

  // Get all posts for sidebar "related posts"
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <BlogProgressBar />
      <Navbar variant="static" alwaysSolid />

      <div className="min-h-screen bg-[#f5f0e9]">
        {/* Compact Header */}
        <div className="bg-[#073742] py-6 md:py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-riposte text-sm text-cream/70 hover:text-accent transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Blog
              </Link>
              <span className="text-cream/30">•</span>
              <time className="font-jetbrains text-xs uppercase text-accent tracking-wider">
                {new Date(meta.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              {meta.readingTime && (
                <>
                  <span className="text-cream/30">•</span>
                  <span className="font-jetbrains text-xs uppercase text-cream/70 tracking-wider">
                    {meta.readingTime} min read
                  </span>
                </>
              )}
              {meta.tags && meta.tags.length > 0 && (
                <>
                  <span className="text-cream/30">•</span>
                  <div className="flex flex-wrap gap-2">
                    {meta.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-jetbrains text-xs uppercase bg-cream/10 text-cream px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            <h1 className="font-axel font-bold text-3xl md:text-5xl lg:text-6xl text-cream uppercase leading-tight max-w-4xl">
              {meta.title}
            </h1>
          </div>
        </div>

        {/* Main Content Area with Sidebar */}
        <div className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

              {/* Main Content - Left Aligned */}
              <article className="lg:col-span-8">
                <div className="bg-[#fefdf9] border-2 border-[#073742]/10 rounded-2xl p-6 md:p-8 lg:p-10">
                  {/* Hero Image */}
                  {meta.heroImage && (
                    <div className="relative w-full aspect-video mb-8">
                      <Image
                        src={meta.heroImage}
                        alt={meta.title}
                        fill
                        className="rounded-xl object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 800px"
                        priority
                      />
                    </div>
                  )}

                  {/* Blog Content */}
                  <div className="blog-prose font-riposte text-[#073742]">
                    {content}
                  </div>

                  {/* Author/Share Section */}
                  <div className="mt-12 pt-8 border-t-2 border-[#073742]/10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div>
                        <p className="font-jetbrains text-xs uppercase text-[#073742]/60 mb-2">Written by</p>
                        <p className="font-riposte text-[#073742] font-medium">Trailhead Team</p>
                      </div>
                      <div>
                        <p className="font-jetbrains text-xs uppercase text-[#073742]/60 mb-2">Share this post</p>
                        <div className="flex gap-3">
                          <a
                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(meta.title)}&url=${encodeURIComponent(`https://trailheadmade.com/blog/${slug}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-[#073742]/5 hover:bg-[#073742] hover:text-cream flex items-center justify-center transition-colors"
                            aria-label="Share on Twitter"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                          </a>
                          <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://trailheadmade.com/blog/${slug}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-[#073742]/5 hover:bg-[#073742] hover:text-cream flex items-center justify-center transition-colors"
                            aria-label="Share on LinkedIn"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-4 space-y-6">

                {/* Table of Contents */}
                <BlogTableOfContents />

                {/* CTA Card */}
                <div className="bg-[#073742] rounded-2xl p-6">
                  <h3 className="font-axel text-2xl font-bold text-cream uppercase mb-3">
                    Ready To Launch?
                  </h3>
                  <p className="font-riposte text-cream/80 text-sm mb-6">
                    Get your professional website live in 6 days. No endless revisions, no surprises.
                  </p>
                  <a
                    href="/#contact"
                    className="block text-center bg-accent text-[#073742] font-riposte font-bold px-6 py-3 rounded-full text-sm tracking-wide transition-all duration-200 uppercase hover:bg-accent/90"
                  >
                    Start Your Build
                  </a>
                  <div className="mt-4 pt-4 border-t border-cream/20">
                    <p className="font-jetbrains text-xs text-cream/60 uppercase mb-2">Pricing</p>
                    <p className="font-riposte text-cream text-sm">
                      <span className="font-bold text-lg">$750</span> one-time<br />
                      + <span className="font-bold">$18/mo</span> hosting
                    </p>
                  </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-white border-2 border-[#073742]/10 rounded-2xl p-6">
                    <h3 className="font-jetbrains text-sm uppercase text-[#073742] tracking-wider mb-4">
                      More Articles
                    </h3>
                    <ul className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <li key={relatedPost.slug}>
                          <Link
                            href={`/blog/${relatedPost.slug}`}
                            className="group block"
                          >
                            <h4 className="font-riposte text-[#073742] font-medium mb-1 group-hover:text-accent transition-colors">
                              {relatedPost.title}
                            </h4>
                            <time className="font-jetbrains text-xs text-[#073742]/60">
                              {new Date(relatedPost.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </time>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Newsletter Signup */}
                <NewsletterSignup variant="sidebar" />

              </aside>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
