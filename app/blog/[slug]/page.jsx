import React from "react";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import { getBlogBySlug, getAllBlogSlugs } from "@/lib/blogService";
import BlogPostClient from "./BlogPostClient";

// Generate static params for Next.js output export
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  if (slugs && slugs.length > 0) {
    return slugs;
  }
  // Fallback default slugs to ensure build always passes
  return [
    { slug: "how-smart-geofencing-increases-mr-doctor-call-coverage" },
    { slug: "guide-to-eliminating-tada-travel-allowance-leakage" },
    { slug: "why-pharma-brands-move-to-real-time-chemist-secondary-booking" },
    { slug: "interactive-e-detailing-boosting-doctor-attention-and-recall" },
  ];
}

// Dynamic SEO Metadata for Google & Social Media
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const result = await getBlogBySlug(slug);

  if (!result || !result.blog) {
    return {
      title: "Pharma Sales & MR Intelligence | Fieldomni Blog",
      description: "Read the latest pharmaceutical sales force and MR tracking insights on Fieldomni.",
    };
  }

  const { blog } = result;
  const title = blog.meta_title || `${blog.title} | Fieldomni Blog`;
  const description =
    blog.meta_description ||
    blog.excerpt ||
    "Read the latest pharmaceutical sales force and MR tracking insights on Fieldomni.";

  return {
    title,
    description,
    keywords: blog.meta_keywords || blog.tags,
    alternates: {
      canonical: blog.canonical_url || `https://fieldomni.com/blog/${blog.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: blog.created_at,
      modifiedTime: blog.updated_at,
      authors: [blog.author_name],
      images: [
        {
          url: blog.cover_image || "/assets/img/home-4/news/news-01.jpg",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [blog.cover_image || "/assets/img/home-4/news/news-01.jpg"],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const result = await getBlogBySlug(slug);

  const blog = result?.blog || null;
  const related = result?.related || [];

  // JSON-LD Schema for Google Search Rich Results (Article / BlogPosting)
  const jsonLd = blog
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blog.title,
        description: blog.meta_description || blog.excerpt,
        image: [blog.cover_image || "https://fieldomni.com/assets/img/home-4/news/news-01.jpg"],
        datePublished: blog.created_at,
        dateModified: blog.updated_at || blog.created_at,
        author: [
          {
            "@type": "Person",
            name: blog.author_name,
            jobTitle: blog.author_role,
          },
        ],
        publisher: {
          "@type": "Organization",
          name: "Fieldomni",
          logo: {
            "@type": "ImageObject",
            url: "https://fieldomni.com/logo.jpg",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://fieldomni.com/blog/${blog.slug}`,
        },
      }
    : null;

  return (
    <div className="page-wrapper">
      {/* Inject Google SEO Structured Data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <Header />

      <main style={{ backgroundColor: "#F8FCFB", minHeight: "100vh" }}>
        <BlogPostClient initialBlog={blog} initialRelated={related} slug={slug} />
      </main>

      <Footer />
    </div>
  );
}
