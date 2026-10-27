"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import { getBlogs } from "@/lib/blogService";

export default function BlogListingPage() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("latest"); // "latest" | "popular"

  useEffect(() => {
    fetchBlogs();
  }, [activeCategory, sortBy]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const data = await getBlogs({
        category: activeCategory,
        search: searchQuery.trim(),
        status: "published",
      });

      if (data.success && data.blogs) {
        let list = data.blogs;
        if (sortBy === "popular") {
          list = [...list].sort((a, b) => (b.views || 0) - (a.views || 0));
        }
        setBlogs(list);
        if (data.categories) {
          setCategories(data.categories);
        }
      }
    } catch (err) {
      console.error("Failed to load blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchBlogs();
  };

  // Filter in-memory for instant feedback if typing
  const filteredBlogs = blogs.filter((blog) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      blog.title.toLowerCase().includes(q) ||
      (blog.excerpt && blog.excerpt.toLowerCase().includes(q)) ||
      (blog.tags && blog.tags.toLowerCase().includes(q))
    );
  });

  const featuredBlog = blogs.length > 0 ? blogs[0] : null;
  const regularBlogs = blogs.length > 1 ? filteredBlogs.slice(1) : filteredBlogs;

  // Popular articles for sidebar
  const popularArticles = [...blogs]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 3);

  const allTags = [
    "Geofencing",
    "MR Tracking",
    "TA/DA Leakage",
    "Chemist CRM",
    "E-Detailing",
    "Doctor Network",
    "Pharma SFA",
    "DCR Automation",
    "Compliance",
  ];

  return (
    <div className="page-wrapper">
      <Header />

      <main style={{ backgroundColor: "#F8FCFB", minHeight: "100vh", paddingBottom: "100px" }}>
        {/* HERO SECTION */}
        <section
          className="blog-hero position-relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #002b3d 0%, #001924 100%)",
            color: "#ffffff",
            padding: "80px 0 60px",
            borderBottom: "1px solid rgba(30, 196, 182, 0.2)",
          }}
        >
          {/* Subtle background glow effect */}
          <div
            style={{
              position: "absolute",
              top: "-20%",
              right: "10%",
              width: "450px",
              height: "450px",
              background: "radial-gradient(circle, rgba(30,196,182,0.18) 0%, rgba(0,0,0,0) 70%)",
              pointerEvents: "none",
              borderRadius: "50%",
            }}
          />

          <div className="container" style={{ maxWidth: "1200px" }}>
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="breadcrumb mb-0" style={{ fontSize: "14px" }}>
                <li className="breadcrumb-item">
                  <Link href="/" className="text-decoration-none text-white-50">
                    <i className="fa-solid fa-house me-1"></i> Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-white" aria-current="page" style={{ color: "#1ec4b6" }}>
                  Blog &amp; Knowledge Hub
                </li>
              </ol>
            </nav>

            <div className="row align-items-center">
              <div className="col-lg-8">
                <span
                  className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3 fw-semibold"
                  style={{
                    backgroundColor: "rgba(30, 196, 182, 0.15)",
                    color: "#1ec4b6",
                    fontSize: "13px",
                    letterSpacing: "0.8px",
                    border: "1px solid rgba(30, 196, 182, 0.3)",
                    textTransform: "uppercase",
                  }}
                >
                  <i className="fa-solid fa-newspaper"></i> Fieldomni Pharma Intelligence
                </span>
                <h1
                  className="fw-bold mb-3"
                  style={{
                    fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.5px",
                  }}
                >
                  Pharma Sales, MR Tracking &amp;{" "}
                  <span style={{ color: "#1ec4b6" }}>Field Intelligence</span>
                </h1>
                <p className="text-white-50 mb-4" style={{ fontSize: "17px", maxWidth: "680px", lineHeight: 1.6 }}>
                  Actionable insights, best practices, and enterprise strategies for pharmaceutical brands, sales directors, and medical representative fleets.
                </p>

                {/* Search Bar */}
                <form onSubmit={handleSearchSubmit} className="d-flex align-items-center gap-2" style={{ maxWidth: "580px" }}>
                  <div className="position-relative flex-grow-1">
                    <i
                      className="fa-solid fa-magnifying-glass position-absolute"
                      style={{
                        top: "50%",
                        left: "18px",
                        transform: "translateY(-50%)",
                        color: "#94a3b8",
                      }}
                    ></i>
                    <input
                      type="text"
                      placeholder="Search articles on geofencing, TA/DA, DCR..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="form-control rounded-pill ps-5 py-3 border-0 shadow-sm"
                      style={{
                        backgroundColor: "#ffffff",
                        fontSize: "15px",
                        color: "#00384f",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="theme-btn-main style-2 rounded-pill px-4 py-3 border-0 fw-semibold"
                    style={{ backgroundColor: "#1ec4b6", color: "#00384f", cursor: "pointer" }}
                  >
                    Search
                  </button>
                </form>
              </div>

              {/* Right Side Stat Badges */}
              <div className="col-lg-4 mt-4 mt-lg-0 text-lg-end">
                <div
                  className="p-4 rounded-4 d-inline-block text-start w-100"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom border-secondary border-opacity-25">
                    <div>
                      <div className="small text-white-50">Verified Articles</div>
                      <div className="h4 mb-0 fw-bold" style={{ color: "#1ec4b6" }}>
                        {blogs.length} Guides
                      </div>
                    </div>
                    <i className="fa-solid fa-book-open fs-2 text-white-50"></i>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <div className="small text-white-50">Target Focus</div>
                      <div className="fw-semibold text-white">Pharma SFA &amp; Payroll</div>
                    </div>
                    <i className="fa-solid fa-shield-halved fs-3" style={{ color: "#1ec4b6" }}></i>
                  </div>
                </div>
              </div>
            </div>

            {/* CATEGORY FILTER TABS */}
            <div className="d-flex align-items-center gap-2 flex-wrap mt-5 pt-3 border-top border-secondary border-opacity-25">
              <span className="text-white-50 small me-2 fw-medium">Categories:</span>
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className={`btn btn-sm rounded-pill px-3 py-2 fw-semibold transition-all ${
                  activeCategory === "All" ? "btn-light text-dark shadow-sm" : "text-white"
                }`}
                style={{
                  backgroundColor: activeCategory === "All" ? "#1ec4b6" : "rgba(255, 255, 255, 0.08)",
                  color: activeCategory === "All" ? "#00384f" : "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  fontSize: "13px",
                }}
              >
                All Articles
              </button>
              {categories.map((cat, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveCategory(cat.category)}
                  className="btn btn-sm rounded-pill px-3 py-2 fw-semibold transition-all"
                  style={{
                    backgroundColor: activeCategory === cat.category ? "#1ec4b6" : "rgba(255, 255, 255, 0.08)",
                    color: activeCategory === cat.category ? "#00384f" : "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    fontSize: "13px",
                  }}
                >
                  {cat.category} ({cat.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* MAIN CONTENT AREA */}
        <div className="container py-5" style={{ maxWidth: "1200px" }}>
          {/* FEATURED STORY SPOTLIGHT (When viewing All and no search) */}
          {featuredBlog && activeCategory === "All" && !searchQuery && (
            <div className="mb-5">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span
                  className="badge px-3 py-2 rounded-pill fw-bold"
                  style={{ backgroundColor: "#00384f", color: "#1ec4b6", fontSize: "12px", letterSpacing: "1px" }}
                >
                  <i className="fa-solid fa-star me-1 text-warning"></i> FEATURED EDITORIAL
                </span>
              </div>

              <div
                className="card border-0 rounded-4 shadow-sm overflow-hidden"
                style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0" }}
              >
                <div className="row g-0 align-items-stretch">
                  <div className="col-lg-6 position-relative" style={{ minHeight: "340px" }}>
                    <img
                      src={featuredBlog.cover_image || "/assets/img/home-4/news/news-01.jpg"}
                      alt={featuredBlog.title}
                      className="w-100 h-100 object-fit-cover"
                      style={{ transition: "transform 0.5s ease" }}
                    />
                    <span
                      className="position-absolute top-0 start-0 m-3 badge px-3 py-2 rounded-pill"
                      style={{
                        backgroundColor: "#00384f",
                        color: "#1ec4b6",
                        fontWeight: 600,
                        fontSize: "12px",
                      }}
                    >
                      {featuredBlog.category}
                    </span>
                  </div>

                  <div className="col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex align-items-center gap-3 text-muted mb-2" style={{ fontSize: "13px" }}>
                        <span>
                          <i className="fa-regular fa-calendar me-1" style={{ color: "#1ec4b6" }}></i>
                          {new Date(featuredBlog.created_at).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span>•</span>
                        <span>
                          <i className="fa-regular fa-clock me-1" style={{ color: "#1ec4b6" }}></i>
                          {featuredBlog.read_time}
                        </span>
                        <span>•</span>
                        <span>
                          <i className="fa-regular fa-eye me-1" style={{ color: "#1ec4b6" }}></i>
                          {featuredBlog.views} reads
                        </span>
                      </div>

                      <h2
                        className="fw-bold mb-3"
                        style={{
                          fontSize: "clamp(1.5rem, 2.3vw, 2rem)",
                          color: "#00384f",
                          lineHeight: 1.3,
                        }}
                      >
                        <Link
                          href={`/blog/${featuredBlog.slug}`}
                          className="text-decoration-none text-dark"
                          style={{ transition: "color 0.2s" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#1ec4b6")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "#00384f")}
                        >
                          {featuredBlog.title}
                        </Link>
                      </h2>

                      <p className="text-muted mb-4" style={{ fontSize: "15.5px", lineHeight: 1.6 }}>
                        {featuredBlog.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-top d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={featuredBlog.author_avatar || "/assets/img/home-4/news/info.png"}
                          alt={featuredBlog.author_name}
                          className="rounded-circle"
                          style={{ width: "36px", height: "36px", objectFit: "cover" }}
                        />
                        <div>
                          <div className="fw-semibold small" style={{ color: "#00384f" }}>
                            {featuredBlog.author_name}
                          </div>
                          <div className="text-muted" style={{ fontSize: "11.5px" }}>
                            {featuredBlog.author_role || "Pharma Intelligence"}
                          </div>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${featuredBlog.slug}`}
                        className="theme-btn-main style-2 text-decoration-none"
                      >
                        <span className="theme-btn-arrow-left">
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <span className="theme-btn">Read Full Story</span>
                        <span className="theme-btn-arrow-right">
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MAIN ARTICLES GRID + SIDEBAR */}
          <div className="row g-4">
            {/* Left Column: Blog Articles */}
            <div className="col-lg-8">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h3 className="fw-bold mb-0" style={{ color: "#00384f", fontSize: "22px" }}>
                  {activeCategory === "All" ? "Latest Articles" : `${activeCategory} Insights`}
                  <span className="text-muted fs-6 fw-normal ms-2">({filteredBlogs.length} articles)</span>
                </h3>

                {/* Sort Toggle */}
                <div className="d-flex align-items-center gap-2">
                  <span className="text-muted small">Sort:</span>
                  <select
                    className="form-select form-select-sm rounded-pill"
                    style={{ width: "auto", fontSize: "13px", color: "#00384f" }}
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="latest">Newest First</option>
                    <option value="popular">Most Popular</option>
                  </select>
                </div>
              </div>

              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-teal" style={{ color: "#1ec4b6" }} role="status"></div>
                  <p className="text-muted mt-2">Loading articles...</p>
                </div>
              ) : filteredBlogs.length === 0 ? (
                <div className="text-center py-5 bg-white rounded-4 border p-5">
                  <i className="fa-solid fa-folder-open fs-1 text-muted mb-3"></i>
                  <h4 style={{ color: "#00384f" }}>No Articles Found</h4>
                  <p className="text-muted">
                    No posts matched your search criteria for &quot;{searchQuery}&quot;. Try clearing filters.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("All");
                    }}
                    className="btn btn-outline-secondary rounded-pill px-4"
                  >
                    Reset Search &amp; Filters
                  </button>
                </div>
              ) : (
                <div className="row g-4">
                  {filteredBlogs.map((item) => (
                    <div key={item.id} className="col-md-6">
                      <div
                        className="card h-100 rounded-4 overflow-hidden border shadow-sm transition-all"
                        style={{
                          backgroundColor: "#ffffff",
                          borderColor: "#e2e8f0",
                          transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-4px)";
                          e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 56, 79, 0.08)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.04)";
                        }}
                      >
                        <div className="position-relative overflow-hidden" style={{ height: "210px" }}>
                          <img
                            src={item.cover_image || "/assets/img/home-4/news/news-01.jpg"}
                            alt={item.title}
                            className="w-100 h-100 object-fit-cover"
                            style={{ transition: "transform 0.4s ease" }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                          />
                          <span
                            className="position-absolute top-0 start-0 m-3 badge px-3 py-1 rounded-pill"
                            style={{ fontSize: "11px", fontWeight: 600, backgroundColor: "#00384f", color: "#1ec4b6" }}
                          >
                            {item.category}
                          </span>
                        </div>

                        <div className="card-body p-4 d-flex flex-column justify-content-between">
                          <div>
                            <div className="d-flex align-items-center gap-2 text-muted mb-2" style={{ fontSize: "12.5px" }}>
                              <span>
                                <i className="fa-regular fa-calendar me-1"></i>
                                {new Date(item.created_at).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </span>
                              <span>•</span>
                              <span>
                                <i className="fa-regular fa-clock me-1"></i>
                                {item.read_time}
                              </span>
                            </div>

                            <h4
                              className="fw-bold mb-3"
                              style={{
                                fontSize: "17px",
                                lineHeight: "1.4",
                                color: "#00384f",
                              }}
                            >
                              <Link
                                href={`/blog/${item.slug}`}
                                className="text-decoration-none"
                                style={{ color: "#00384f", transition: "color 0.2s ease" }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#1ec4b6")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "#00384f")}
                              >
                                {item.title}
                              </Link>
                            </h4>

                            <p className="text-muted small mb-3" style={{ lineHeight: 1.5 }}>
                              {item.excerpt && item.excerpt.length > 110
                                ? item.excerpt.substring(0, 110) + "..."
                                : item.excerpt}
                            </p>
                          </div>

                          <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                            <span className="text-muted d-flex align-items-center gap-2" style={{ fontSize: "12px" }}>
                              <img
                                src={item.author_avatar || "/assets/img/home-4/news/info.png"}
                                alt="Author"
                                className="rounded-circle"
                                style={{ width: "22px", height: "22px", objectFit: "cover" }}
                              />
                              <span className="text-truncate" style={{ maxWidth: "120px" }}>
                                {item.author_name}
                              </span>
                            </span>
                            <Link
                              href={`/blog/${item.slug}`}
                              className="text-decoration-none fw-semibold d-inline-flex align-items-center gap-1"
                              style={{ fontSize: "13px", color: "#1ec4b6" }}
                            >
                              Read More <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: SEO Sidebar */}
            <div className="col-lg-4">
              <aside className="d-flex flex-column gap-4">
                {/* Widget 1: Categories Breakdown */}
                <div className="card border-0 rounded-4 shadow-sm p-4" style={{ backgroundColor: "#ffffff" }}>
                  <h4 className="fw-bold mb-3 pb-2 border-bottom" style={{ color: "#00384f", fontSize: "18px" }}>
                    <i className="fa-solid fa-layer-group me-2" style={{ color: "#1ec4b6" }}></i>
                    Pharma Categories
                  </h4>
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                    <li
                      onClick={() => setActiveCategory("All")}
                      className="d-flex align-items-center justify-content-between p-2 rounded-3 cursor-pointer"
                      style={{
                        backgroundColor: activeCategory === "All" ? "#d5f7f1" : "transparent",
                        cursor: "pointer",
                      }}
                    >
                      <span className="fw-medium" style={{ color: "#00384f", fontSize: "14px" }}>
                        All Topics
                      </span>
                      <span className="badge rounded-pill bg-light text-dark">{blogs.length}</span>
                    </li>
                    {categories.map((cat, i) => (
                      <li
                        key={i}
                        onClick={() => setActiveCategory(cat.category)}
                        className="d-flex align-items-center justify-content-between p-2 rounded-3"
                        style={{
                          backgroundColor: activeCategory === cat.category ? "#d5f7f1" : "transparent",
                          cursor: "pointer",
                        }}
                      >
                        <span className="fw-medium" style={{ color: "#00384f", fontSize: "14px" }}>
                          {cat.category}
                        </span>
                        <span className="badge rounded-pill" style={{ backgroundColor: "#00384f", color: "#ffffff" }}>
                          {cat.count}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Widget 2: Most Popular Articles */}
                <div className="card border-0 rounded-4 shadow-sm p-4" style={{ backgroundColor: "#ffffff" }}>
                  <h4 className="fw-bold mb-3 pb-2 border-bottom" style={{ color: "#00384f", fontSize: "18px" }}>
                    <i className="fa-solid fa-fire me-2 text-danger"></i>
                    Trending Insights
                  </h4>
                  <div className="d-flex flex-column gap-3">
                    {popularArticles.map((p, idx) => (
                      <div key={idx} className="d-flex align-items-center gap-3">
                        <img
                          src={p.cover_image || "/assets/img/home-4/news/news-01.jpg"}
                          alt={p.title}
                          className="rounded-3 object-fit-cover flex-shrink-0"
                          style={{ width: "65px", height: "65px" }}
                        />
                        <div>
                          <h6 className="mb-1" style={{ fontSize: "13.5px", lineHeight: "1.3" }}>
                            <Link
                              href={`/blog/${p.slug}`}
                              className="text-decoration-none text-dark fw-bold"
                              style={{ transition: "color 0.2s" }}
                              onMouseEnter={(e) => (e.currentTarget.style.color = "#1ec4b6")}
                              onMouseLeave={(e) => (e.currentTarget.style.color = "#00384f")}
                            >
                              {p.title}
                            </Link>
                          </h6>
                          <div className="text-muted" style={{ fontSize: "11px" }}>
                            <i className="fa-regular fa-eye me-1"></i> {p.views} reads • {p.read_time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Widget 3: Popular SEO Keywords & Tags */}
                <div className="card border-0 rounded-4 shadow-sm p-4" style={{ backgroundColor: "#ffffff" }}>
                  <h4 className="fw-bold mb-3 pb-2 border-bottom" style={{ color: "#00384f", fontSize: "18px" }}>
                    <i className="fa-solid fa-tags me-2" style={{ color: "#1ec4b6" }}></i>
                    Industry Keywords
                  </h4>
                  <div className="d-flex flex-wrap gap-2">
                    {allTags.map((tag, i) => (
                      <span
                        key={i}
                        onClick={() => setSearchQuery(tag)}
                        className="badge px-3 py-2 rounded-pill fw-medium cursor-pointer"
                        style={{
                          backgroundColor: "#f1f5f9",
                          color: "#00384f",
                          fontSize: "12px",
                          border: "1px solid #e2e8f0",
                          cursor: "pointer",
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Widget 4: Lead Magnet / Whitepaper Promo */}
                <div
                  className="rounded-4 p-4 text-white text-center position-relative overflow-hidden shadow-sm"
                  style={{
                    background: "linear-gradient(135deg, #00384f 0%, #001f2c 100%)",
                    border: "1px solid rgba(30,196,182,0.3)",
                  }}
                >
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "56px", height: "56px", backgroundColor: "rgba(30,196,182,0.2)", color: "#1ec4b6" }}
                  >
                    <i className="fa-solid fa-file-pdf fs-3"></i>
                  </div>
                  <h4 className="fw-bold mb-2" style={{ color: "#ffffff", fontSize: "20px" }}>
                    Pharma SFA Buyer&apos;s Playbook
                  </h4>
                  <p className="text-white-50 small mb-4" style={{ lineHeight: 1.5 }}>
                    Download our 2026 checklist on eliminating fake MR check-ins and TA/DA allowance leakages.
                  </p>
                  <Link
                    href="/contact-us"
                    className="theme-btn-main style-2 w-100 text-decoration-none d-inline-block text-center"
                  >
                    <span className="theme-btn">Download Free Guide</span>
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* NEWSLETTER SUBSCRIPTION BANNER */}
        <section className="container mt-4" style={{ maxWidth: "1200px" }}>
          <div
            className="p-5 rounded-4 shadow-sm"
            style={{
              background: "linear-gradient(135deg, #d5f7f1 0%, #e6faf7 100%)",
              border: "1px solid #b8ebe3",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-7">
                <span
                  className="d-inline-block px-3 py-1 rounded-pill mb-2 fw-semibold"
                  style={{ backgroundColor: "#1ec4b6", color: "#00384f", fontSize: "12px" }}
                >
                  Stay Ahead of Field Trends
                </span>
                <h3 className="fw-bold mb-2" style={{ color: "#00384f", fontSize: "26px" }}>
                  Get Bi-Weekly Pharma Field Insights
                </h3>
                <p className="text-muted mb-0" style={{ fontSize: "15px" }}>
                  Join 1,200+ pharma sales directors receiving our curated case studies and regulatory updates.
                </p>
              </div>
              <div className="col-lg-5 mt-4 mt-lg-0">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you for subscribing to Fieldomni Research!");
                  }}
                  className="d-flex gap-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your corporate email"
                    className="form-control rounded-pill px-4 py-3 border-0 shadow-sm"
                    style={{ fontSize: "14.5px" }}
                  />
                  <button
                    type="submit"
                    className="theme-btn-main style-2 rounded-pill px-4 py-3 border-0 fw-semibold text-nowrap"
                    style={{ backgroundColor: "#00384f", color: "#1ec4b6" }}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
