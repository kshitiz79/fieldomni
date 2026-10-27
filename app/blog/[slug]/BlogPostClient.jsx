"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getBlogBySlug } from "@/lib/blogService";

export default function BlogPostClient({ initialBlog, initialRelated = [], slug }) {
  const [blog, setBlog] = useState(initialBlog);
  const [related, setRelated] = useState(initialRelated);
  const [loading, setLoading] = useState(!initialBlog);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [headings, setHeadings] = useState([]);

  // Fetch dynamically on client if not available from static generation
  useEffect(() => {
    if (!blog && slug) {
      getBlogBySlug(slug).then((res) => {
        if (res && res.blog) {
          setBlog(res.blog);
          setRelated(res.related || []);
        }
        setLoading(false);
      });
    }
  }, [slug]);

  // Calculate scroll progress for top reading bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parse H2 headings from content for Table of Contents
  useEffect(() => {
    if (typeof window !== "undefined" && blog?.content) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(blog.content, "text/html");
      const h2Elements = doc.querySelectorAll("h2");
      const extracted = Array.from(h2Elements).map((el, index) => {
        const text = el.textContent || `Section ${index + 1}`;
        const id = "section-" + index;
        return { text, id };
      });
      setHeadings(extracted);

      // Add ids to headings in actual article DOM
      const articleEl = document.getElementById("article-content-body");
      if (articleEl) {
        const liveH2s = articleEl.querySelectorAll("h2");
        liveH2s.forEach((el, index) => {
          el.id = "section-" + index;
          el.style.scrollMarginTop = "100px";
        });
      }
    }
  }, [blog?.content]);

  if (loading) {
    return (
      <div className="text-center py-5" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <div className="spinner-border" style={{ color: "#1ec4b6", width: "40px", height: "40px" }} role="status"></div>
        <p className="text-muted mt-3">Loading article from database...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container py-5 text-center" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <div className="p-5 bg-white rounded-4 border shadow-sm" style={{ maxWidth: "540px" }}>
          <i className="fa-solid fa-file-circle-question fs-1 text-muted mb-3"></i>
          <h3 style={{ color: "#00384f" }}>Article Not Found</h3>
          <p className="text-muted mb-4">The requested article could not be retrieved from the server or may have been un-published.</p>
          <Link href="/blog" className="btn text-white rounded-pill px-4 py-2" style={{ backgroundColor: "#00384f" }}>
            Return to All Articles
          </Link>
        </div>
      </div>
    );
  }

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = encodeURIComponent(blog.title);

  const tagsList = blog.tags
    ? blog.tags.split(",").map((t) => t.trim()).filter(Boolean)
    : ["Pharma", "MR Tracking", "Field Operations"];

  return (
    <>
      {/* Scroll Reading Progress Indicator */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: "4px",
          backgroundColor: "#1ec4b6",
          zIndex: 99999,
          transition: "width 0.1s ease-out",
        }}
      />

      {/* ARTICLE HEADER & BREADCRUMBS */}
      <header
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #002b3d 0%, #001924 100%)",
          color: "#ffffff",
          borderBottom: "1px solid rgba(30, 196, 182, 0.2)",
        }}
      >
        <div className="container" style={{ maxWidth: "1140px" }}>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb mb-0" style={{ fontSize: "13.5px" }}>
              <li className="breadcrumb-item">
                <Link href="/" className="text-decoration-none text-white-50">
                  <i className="fa-solid fa-house me-1"></i> Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/blog" className="text-decoration-none text-white-50">
                  Blog
                </Link>
              </li>
              <li className="breadcrumb-item">
                <span className="text-white-50">{blog.category}</span>
              </li>
              <li className="breadcrumb-item active text-truncate" style={{ color: "#1ec4b6", maxWidth: "320px" }}>
                {blog.title}
              </li>
            </ol>
          </nav>

          <div className="row">
            <div className="col-lg-10">
              <span
                className="d-inline-block px-3 py-1 rounded-pill mb-3 fw-semibold"
                style={{
                  backgroundColor: "rgba(30, 196, 182, 0.15)",
                  color: "#1ec4b6",
                  fontSize: "12px",
                  letterSpacing: "0.5px",
                  border: "1px solid rgba(30, 196, 182, 0.3)",
                }}
              >
                {blog.category}
              </span>

              <h1
                className="fw-bold mb-3"
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 3rem)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.5px",
                }}
              >
                {blog.title}
              </h1>

              {blog.excerpt && (
                <p className="text-white-50 mb-4" style={{ fontSize: "18px", lineHeight: 1.6, maxWidth: "860px" }}>
                  {blog.excerpt}
                </p>
              )}

              {/* Author & Meta Row */}
              <div className="d-flex align-items-center flex-wrap gap-4 pt-3 border-top border-secondary border-opacity-25">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={blog.author_avatar || "/assets/img/home-4/news/info.png"}
                    alt={blog.author_name}
                    className="rounded-circle border border-2 border-teal"
                    style={{ width: "46px", height: "46px", objectFit: "cover" }}
                  />
                  <div>
                    <div className="fw-bold text-white" style={{ fontSize: "15px" }}>
                      {blog.author_name}
                    </div>
                    <div className="text-white-50 small" style={{ fontSize: "12px" }}>
                      {blog.author_role || "Pharma Field Strategist"}
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3 text-white-50" style={{ fontSize: "13.5px" }}>
                  <span>
                    <i className="fa-regular fa-calendar me-1" style={{ color: "#1ec4b6" }}></i>
                    {new Date(blog.created_at).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>•</span>
                  <span>
                    <i className="fa-regular fa-clock me-1" style={{ color: "#1ec4b6" }}></i>
                    {blog.read_time}
                  </span>
                  <span>•</span>
                  <span>
                    <i className="fa-regular fa-eye me-1" style={{ color: "#1ec4b6" }}></i>
                    {blog.views} Reads
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ARTICLE CONTENT + SIDEBAR */}
      <div className="container py-5" style={{ maxWidth: "1140px" }}>
        {/* Featured Cover Image */}
        {blog.cover_image && (
          <div className="mb-5 rounded-4 overflow-hidden shadow-sm" style={{ maxHeight: "500px" }}>
            <img
              src={blog.cover_image}
              alt={blog.title}
              className="w-100 h-100 object-fit-cover"
              style={{ maxHeight: "500px" }}
            />
          </div>
        )}

        <div className="row g-5">
          {/* Main Article Body */}
          <div className="col-lg-8">
            <article
              id="article-content-body"
              className="bg-white p-4 p-md-5 rounded-4 border shadow-sm"
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
                color: "#1e293b",
                fontFamily: "inherit",
              }}
            >
              {/* Custom CSS overrides for article typography */}
              <style jsx global>{`
                #article-content-body h2 {
                  color: #00384f;
                  font-weight: 700;
                  font-size: 24px;
                  margin-top: 36px;
                  margin-bottom: 16px;
                  padding-bottom: 8px;
                  border-bottom: 2px solid #e2e8f0;
                }
                #article-content-body h3 {
                  color: #00384f;
                  font-weight: 600;
                  font-size: 20px;
                  margin-top: 28px;
                  margin-bottom: 14px;
                }
                #article-content-body p {
                  margin-bottom: 20px;
                  color: #334155;
                }
                #article-content-body ul,
                #article-content-body ol {
                  margin-bottom: 24px;
                  padding-left: 24px;
                }
                #article-content-body li {
                  margin-bottom: 10px;
                  color: #334155;
                }
                #article-content-body .blog-callout {
                  background: #f0fdf9;
                  border-left: 4px solid #1ec4b6;
                  padding: 20px 24px;
                  border-radius: 8px;
                  margin: 28px 0;
                }
                #article-content-body .blog-callout h4 {
                  color: #00384f;
                  font-weight: 700;
                  font-size: 17px;
                  margin-bottom: 8px;
                }
                #article-content-body .blog-callout p {
                  margin-bottom: 0;
                  color: #0f766e;
                  font-size: 15.5px;
                }
                #article-content-body blockquote {
                  border-left: 4px solid #00384f;
                  padding-left: 18px;
                  margin: 24px 0;
                  font-style: italic;
                  color: #475569;
                }
                #article-content-body img {
                  max-width: 100%;
                  border-radius: 12px;
                  margin: 24px 0;
                }
              `}</style>

              <div dangerouslySetInnerHTML={{ __html: blog.content }} />

              {/* Tags Section */}
              <div className="pt-4 mt-5 border-top d-flex align-items-center flex-wrap gap-2">
                <span className="fw-semibold small text-muted me-2">
                  <i className="fa-solid fa-tags me-1"></i> Tags:
                </span>
                {tagsList.map((tag, i) => (
                  <Link
                    key={i}
                    href={`/blog?search=${encodeURIComponent(tag)}`}
                    className="badge text-decoration-none px-3 py-2 rounded-pill fw-medium"
                    style={{
                      backgroundColor: "#f1f5f9",
                      color: "#00384f",
                      border: "1px solid #e2e8f0",
                      fontSize: "12px",
                    }}
                  >
                    #{tag}
                  </Link>
                ))}
              </div>

              {/* Social Share Bar */}
              <div className="p-4 mt-4 rounded-3 d-flex align-items-center justify-content-between flex-wrap gap-3" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}>
                <span className="fw-bold" style={{ color: "#00384f", fontSize: "15px" }}>
                  Share this insight with your team:
                </span>
                <div className="d-flex align-items-center gap-2">
                  <a
                    href={`https://api.whatsapp.com/send?text=${shareTitle}%20${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm text-white rounded-pill px-3 py-2 d-inline-flex align-items-center gap-1"
                    style={{ backgroundColor: "#25D366", fontSize: "13px" }}
                  >
                    <i className="fa-brands fa-whatsapp"></i> WhatsApp
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm text-white rounded-pill px-3 py-2 d-inline-flex align-items-center gap-1"
                    style={{ backgroundColor: "#0A66C2", fontSize: "13px" }}
                  >
                    <i className="fa-brands fa-linkedin"></i> LinkedIn
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm text-white rounded-pill px-3 py-2 d-inline-flex align-items-center gap-1"
                    style={{ backgroundColor: "#000000", fontSize: "13px" }}
                  >
                    <i className="fa-brands fa-x-twitter"></i> Post
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="btn btn-sm btn-outline-secondary rounded-pill px-3 py-2 d-inline-flex align-items-center gap-1"
                    style={{ fontSize: "13px" }}
                  >
                    <i className="fa-regular fa-copy"></i> {copied ? "Copied!" : "Copy Link"}
                  </button>
                </div>
              </div>

              {/* Author Bio Card */}
              <div className="p-4 mt-4 rounded-4 d-flex align-items-center gap-4" style={{ backgroundColor: "#f0fdf9", border: "1px solid #cceee7" }}>
                <img
                  src={blog.author_avatar || "/assets/img/home-4/news/info.png"}
                  alt={blog.author_name}
                  className="rounded-circle flex-shrink-0"
                  style={{ width: "70px", height: "70px", objectFit: "cover" }}
                />
                <div>
                  <h5 className="fw-bold mb-1" style={{ color: "#00384f" }}>
                    Written by {blog.author_name}
                  </h5>
                  <div className="text-teal fw-semibold small mb-2" style={{ color: "#0d9488" }}>
                    {blog.author_role || "Senior Pharma Field Consultant"}
                  </div>
                  <p className="text-muted small mb-0" style={{ lineHeight: 1.5 }}>
                    Specializing in pharmaceutical field force automation, fake location mitigation, doctor coverage optimization, and compliant TA/DA payroll workflows across India.
                  </p>
                </div>
              </div>
            </article>

            {/* Bottom Conversion CTA Banner */}
            <div
              className="mt-5 p-5 rounded-4 text-white text-center position-relative overflow-hidden shadow-sm"
              style={{
                background: "linear-gradient(135deg, #00384f 0%, #001e2b 100%)",
                border: "1px solid rgba(30,196,182,0.3)",
              }}
            >
              <h3 className="fw-bold mb-2" style={{ fontSize: "28px" }}>
                Stop Proxy Attendance &amp; Inflated TA/DA in Your Fleet
              </h3>
              <p className="text-white-50 mx-auto mb-4" style={{ maxWidth: "600px", fontSize: "16px" }}>
                Join 1,200+ top pharma enterprises that trust Fieldomni for zero-tamper MR GPS tracking, real-time DCR, and chemist booking.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link href="/contact-us" className="theme-btn-main style-2 text-decoration-none">
                  <span className="theme-btn">Schedule Free 1-on-1 Demo</span>
                </Link>
                <Link
                  href="/pricing"
                  className="btn btn-outline-light rounded-pill px-4 py-2 d-inline-flex align-items-center"
                  style={{ fontSize: "14px" }}
                >
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: "100px" }}>
              {/* Table of Contents */}
              {headings.length > 0 && (
                <div className="card border-0 rounded-4 shadow-sm p-4 mb-4" style={{ backgroundColor: "#ffffff" }}>
                  <h5 className="fw-bold mb-3 pb-2 border-bottom" style={{ color: "#00384f", fontSize: "17px" }}>
                    <i className="fa-solid fa-list-ul me-2" style={{ color: "#1ec4b6" }}></i>
                    Table of Contents
                  </h5>
                  <nav className="d-flex flex-column gap-2">
                    {headings.map((h, i) => (
                      <a
                        key={i}
                        href={`#${h.id}`}
                        className="text-decoration-none small py-1 px-2 rounded-2 transition-all"
                        style={{
                          color: "#334155",
                          borderLeft: "2px solid #e2e8f0",
                          lineHeight: 1.4,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#1ec4b6";
                          e.currentTarget.style.borderLeftColor = "#1ec4b6";
                          e.currentTarget.style.backgroundColor = "#f0fdf9";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#334155";
                          e.currentTarget.style.borderLeftColor = "#e2e8f0";
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        {h.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Related Articles Widget */}
              {related.length > 0 && (
                <div className="card border-0 rounded-4 shadow-sm p-4 mb-4" style={{ backgroundColor: "#ffffff" }}>
                  <h5 className="fw-bold mb-3 pb-2 border-bottom" style={{ color: "#00384f", fontSize: "17px" }}>
                    <i className="fa-solid fa-book-open-reader me-2" style={{ color: "#1ec4b6" }}></i>
                    Related Insights
                  </h5>
                  <div className="d-flex flex-column gap-3">
                    {related.map((rel) => (
                      <div key={rel.id} className="d-flex align-items-center gap-3">
                        <img
                          src={rel.cover_image || "/assets/img/home-4/news/news-01.jpg"}
                          alt={rel.title}
                          className="rounded-3 object-fit-cover flex-shrink-0"
                          style={{ width: "65px", height: "65px" }}
                        />
                        <div>
                          <h6 className="mb-1" style={{ fontSize: "13.5px", lineHeight: "1.3" }}>
                            <Link
                              href={`/blog/${rel.slug}`}
                              className="text-decoration-none fw-bold"
                              style={{ color: "#00384f" }}
                              onMouseEnter={(e) => (e.currentTarget.style.color = "#1ec4b6")}
                              onMouseLeave={(e) => (e.currentTarget.style.color = "#00384f")}
                            >
                              {rel.title}
                            </Link>
                          </h6>
                          <div className="text-muted" style={{ fontSize: "11px" }}>
                            {rel.read_time} • {rel.category}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Contact Box */}
              <div
                className="p-4 rounded-4 shadow-sm text-center"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                }}
              >
                <i className="fa-solid fa-headset fs-1 mb-2" style={{ color: "#1ec4b6" }}></i>
                <h6 className="fw-bold mb-1" style={{ color: "#00384f" }}>
                  Talk to a Pharma Solution Architect
                </h6>
                <p className="text-muted small mb-3">
                  Have specific territory rules, TA/DA slabs, or ERP integration questions?
                </p>
                <Link
                  href="/contact-us"
                  className="btn btn-sm rounded-pill px-4 py-2 w-100 fw-semibold"
                  style={{ backgroundColor: "#00384f", color: "#1ec4b6" }}
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
