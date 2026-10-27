"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  uploadImage,
} from "@/lib/blogService";

export default function AdminDashboardPage() {
  const router = useRouter();

  // State
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [stats, setStats] = useState({ total: 0, published: 0, drafts: 0, total_views: 0 });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // Modal / Editor State
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [editorTab, setEditorTab] = useState("write"); // 'write' | 'preview' | 'seo'
  const [autoSlug, setAutoSlug] = useState(true);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "Field Operations",
    cover_image: "/assets/img/home-4/news/news-01.jpg",
    author_name: "Fieldomni Intelligence",
    author_role: "Pharma Research Team",
    author_avatar: "/assets/img/home-4/news/info.png",
    read_time: "5 min read",
    tags: "Pharma, MR Tracking, Healthcare",
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
    canonical_url: "",
    status: "published",
  });

  // Notification Toast
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Auth Guard
  useEffect(() => {
    const token = localStorage.getItem("fieldomni_admin_token");
    const storedUser = localStorage.getItem("fieldomni_admin_user");

    if (!token) {
      router.push("/admin/login");
      return;
    }

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        setUser({ email: "admin@fieldomni.com" });
      }
    }

    fetchBlogs();
  }, [router]);

  const getAuthToken = () => {
    return localStorage.getItem("fieldomni_admin_token") || "";
  };

  const handleLogout = () => {
    localStorage.removeItem("fieldomni_admin_token");
    localStorage.removeItem("fieldomni_admin_user");
    document.cookie = "admin_token=; path=/; max-age=0";
    router.push("/admin/login");
  };

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const data = await getBlogs({ status: "all" });
      if (data.success && data.blogs) {
        setBlogs(data.blogs);
        if (data.stats) setStats(data.stats);
        if (data.categories) setCategories(data.categories);
      }
    } catch (err) {
      showToast("Error loading blogs from database", "error");
    } finally {
      setLoading(false);
    }
  };

  // Slugifier helper
  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-");
  };

  // Handle Title Change with Auto-Slug
  const handleTitleChange = (val) => {
    const updated = { ...formData, title: val };
    if (autoSlug) {
      updated.slug = slugify(val);
    }
    // Auto populate SEO title if blank
    if (!formData.meta_title || formData.meta_title === `${formData.title} | Fieldomni Blog`) {
      updated.meta_title = `${val} | Fieldomni Blog`;
    }
    setFormData(updated);
  };

  // Image Upload handler
  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const token = getAuthToken();
      const data = await uploadImage(file, token);

      if (data.success && data.url) {
        setFormData((prev) => ({ ...prev, cover_image: data.url }));
        showToast("Image uploaded successfully!");
      } else {
        showToast(data.message || "Failed to upload image", "error");
      }
    } catch (err) {
      showToast("Upload failed", "error");
    } finally {
      setUploadingImage(false);
    }
  };

  // Insert Rich Tag in Editor
  const insertFormatting = (tagType) => {
    let snippet = "";
    switch (tagType) {
      case "h2":
        snippet = "\n<h2>Key Strategic Section</h2>\n<p>Enter detailed analysis here...</p>\n";
        break;
      case "h3":
        snippet = "\n<h3>Sub-heading Title</h3>\n";
        break;
      case "p":
        snippet = "\n<p>Paragraph content goes here.</p>\n";
        break;
      case "callout":
        snippet =
          '\n<div class="blog-callout">\n  <h4>💡 Pro Tip</h4>\n  <p>Highlight important pharma insight or statistic here.</p>\n</div>\n';
        break;
      case "ul":
        snippet =
          "\n<ul>\n  <li><strong>Verified GPS:</strong> Point 1</li>\n  <li><strong>Automated DCR:</strong> Point 2</li>\n</ul>\n";
        break;
      case "quote":
        snippet = "\n<blockquote>Important leadership quotation or statistic</blockquote>\n";
        break;
      default:
        break;
    }
    setFormData((prev) => ({ ...prev, content: prev.content + snippet }));
  };

  // Open Editor for New Blog
  const handleOpenCreateModal = () => {
    setEditingBlogId(null);
    setAutoSlug(true);
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content:
        "<h2>Executive Overview</h2>\n<p>Introduce the challenge facing pharmaceutical sales leaders and medical representatives.</p>\n\n<div class=\"blog-callout\">\n  <h4>💡 Key Fact</h4>\n  <p>Highlight your primary data-driven takeaway here.</p>\n</div>\n\n<h2>Detailed Actionable Strategy</h2>\n<p>Explain how Fieldomni or best-practice methodology solves this problem with verified results.</p>",
      category: "Field Operations",
      cover_image: "/assets/img/home-4/news/news-01.jpg",
      author_name: "Fieldomni Intelligence",
      author_role: "Pharma Research Team",
      author_avatar: "/assets/img/home-4/news/info.png",
      read_time: "5 min read",
      tags: "Pharma, MR Tracking, Healthcare",
      meta_title: "",
      meta_description: "",
      meta_keywords: "pharma field tracking, medical reps, DCR automation",
      canonical_url: "",
      status: "published",
    });
    setEditorTab("write");
    setIsEditorOpen(true);
  };

  // Open Editor for Existing Blog
  const handleEditBlog = (blog) => {
    setEditingBlogId(blog.id);
    setAutoSlug(false);
    setFormData({
      title: blog.title || "",
      slug: blog.slug || "",
      excerpt: blog.excerpt || "",
      content: blog.content || "",
      category: blog.category || "Field Operations",
      cover_image: blog.cover_image || "/assets/img/home-4/news/news-01.jpg",
      author_name: blog.author_name || "Fieldomni Intelligence",
      author_role: blog.author_role || "Pharma Research Team",
      author_avatar: blog.author_avatar || "/assets/img/home-4/news/info.png",
      read_time: blog.read_time || "5 min read",
      tags: blog.tags || "Pharma, MR Tracking",
      meta_title: blog.meta_title || "",
      meta_description: blog.meta_description || "",
      meta_keywords: blog.meta_keywords || "",
      canonical_url: blog.canonical_url || "",
      status: blog.status || "published",
    });
    setEditorTab("write");
    setIsEditorOpen(true);
  };

  // Save or Update Blog
  const handleSaveBlog = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      showToast("Please enter a blog title", "error");
      return;
    }
    if (!formData.content.trim()) {
      showToast("Please enter blog content", "error");
      return;
    }

    const token = getAuthToken();

    try {
      const isUpdating = Boolean(editingBlogId);
      const payload = {
        ...formData,
        ...(isUpdating ? { id: editingBlogId } : {}),
      };

      const data = isUpdating
        ? await updateBlog(payload, token)
        : await createBlog(payload, token);

      if (data.success) {
        showToast(
          isUpdating
            ? "Blog post updated successfully!"
            : "New blog post published and SEO page created!"
        );
        setIsEditorOpen(false);
        fetchBlogs();
      } else {
        showToast(data.message || "Failed to save blog post", "error");
      }
    } catch (err) {
      showToast("Error saving blog: " + err.message, "error");
    }
  };

  // One-click toggle Status (Published <-> Draft)
  const handleToggleStatus = async (blog) => {
    const token = getAuthToken();
    const newStatus = blog.status === "published" ? "draft" : "published";

    try {
      const data = await updateBlog(
        {
          id: blog.id,
          status: newStatus,
        },
        token
      );

      if (data.success) {
        showToast(`Post status updated to ${newStatus}`);
        fetchBlogs();
      }
    } catch (err) {
      showToast("Failed to update status", "error");
    }
  };

  // Delete Blog
  const handleDeleteBlog = async (id, title) => {
    if (!confirm(`Are you sure you want to permanently delete "${title}"?`)) {
      return;
    }

    const token = getAuthToken();

    try {
      const data = await deleteBlog(id, token);
      if (data.success) {
        showToast("Blog post deleted successfully.");
        fetchBlogs();
      } else {
        showToast(data.message || "Failed to delete blog", "error");
      }
    } catch (err) {
      showToast("Failed to delete blog", "error");
    }
  };

  // Filtered List
  const filteredBlogs = blogs.filter((b) => {
    const matchSearch =
      !search.trim() ||
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.slug.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      categoryFilter === "all" || b.category.toLowerCase() === categoryFilter.toLowerCase();

    const matchStatus = statusFilter === "all" || b.status === statusFilter;

    return matchSearch && matchCategory && matchStatus;
  });

  const pharmaCategories = [
    "Field Operations",
    "Payroll & Finance",
    "Secondary Sales",
    "Doctor Detailing",
    "Pharma Intelligence",
    "Compliance & GPS",
    "Product Releases",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#001a24",
        color: "#e2e8f0",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Toast Notification */}
      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            backgroundColor: toast.type === "error" ? "#ef4444" : "#1ec4b6",
            color: toast.type === "error" ? "#ffffff" : "#002b3d",
            padding: "14px 22px",
            borderRadius: "10px",
            fontWeight: 600,
            boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
            zIndex: 999999,
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <i
            className={
              toast.type === "error" ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-check"
            }
          />
          <span>{toast.message}</span>
        </div>
      )}

      {/* TOP NAVBAR */}
      <header
        style={{
          backgroundColor: "#002433",
          borderBottom: "1px solid rgba(30, 196, 182, 0.2)",
          padding: "16px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img
              src="/logo.jpg"
              alt="Fieldomni"
              style={{ height: "36px", width: "auto", objectFit: "contain" }}
            />
          </Link>
          <span
            style={{
              padding: "4px 10px",
              borderRadius: "999px",
              backgroundColor: "rgba(30, 196, 182, 0.15)",
              color: "#1ec4b6",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            BLOG ADMIN CMS
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            href="/blog"
            target="_blank"
            style={{
              color: "#1ec4b6",
              textDecoration: "none",
              fontSize: "13.5px",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 14px",
              borderRadius: "8px",
              backgroundColor: "rgba(30, 196, 182, 0.1)",
              border: "1px solid rgba(30, 196, 182, 0.3)",
            }}
          >
            <span>View Public Blog</span>
            <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "11px" }}></i>
          </Link>

          {/* User Profile info */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                backgroundColor: "#1ec4b6",
                color: "#002b3d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              A
            </div>
            <div style={{ fontSize: "13px" }}>
              <div style={{ fontWeight: 600, color: "#ffffff" }}>Admin</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "11.5px" }}>
                {user?.email || "admin@fieldomni.com"}
              </div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "transparent",
              border: "1px solid rgba(239, 68, 68, 0.4)",
              color: "#fca5a5",
              padding: "7px 12px",
              borderRadius: "8px",
              fontSize: "12.5px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* DASHBOARD BODY */}
      <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "32px 20px" }}>
        {/* STATS OVERVIEW CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          {/* Total Blogs */}
          <div
            style={{
              backgroundColor: "#002433",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", fontWeight: 500 }}>
                Total Articles
              </div>
              <div style={{ fontSize: "28px", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>
                {stats.total}
              </div>
              <div style={{ fontSize: "11.5px", color: "#1ec4b6", marginTop: "4px" }}>
                Dynamically routed
              </div>
            </div>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "rgba(30, 196, 182, 0.15)",
                color: "#1ec4b6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              <i className="fa-solid fa-newspaper"></i>
            </div>
          </div>

          {/* Published */}
          <div
            style={{
              backgroundColor: "#002433",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", fontWeight: 500 }}>
                Live on Website
              </div>
              <div style={{ fontSize: "28px", fontWeight: 700, color: "#10b981", marginTop: "4px" }}>
                {stats.published}
              </div>
              <div style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>
                Active in Google Sitemap
              </div>
            </div>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                color: "#10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              <i className="fa-solid fa-circle-check"></i>
            </div>
          </div>

          {/* Drafts */}
          <div
            style={{
              backgroundColor: "#002433",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", fontWeight: 500 }}>
                Drafts
              </div>
              <div style={{ fontSize: "28px", fontWeight: 700, color: "#f59e0b", marginTop: "4px" }}>
                {stats.drafts}
              </div>
              <div style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>
                Work in progress
              </div>
            </div>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "rgba(245, 158, 11, 0.15)",
                color: "#f59e0b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              <i className="fa-solid fa-pen-ruler"></i>
            </div>
          </div>

          {/* Total Views */}
          <div
            style={{
              backgroundColor: "#002433",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", fontWeight: 500 }}>
                Total Blog Reads
              </div>
              <div style={{ fontSize: "28px", fontWeight: 700, color: "#38bdf8", marginTop: "4px" }}>
                {stats.total_views}
              </div>
              <div style={{ fontSize: "11.5px", color: "#38bdf8", marginTop: "4px" }}>
                Organic SEO Traffic
              </div>
            </div>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "rgba(56, 189, 248, 0.15)",
                color: "#38bdf8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              <i className="fa-solid fa-chart-line"></i>
            </div>
          </div>
        </div>

        {/* CONTROLS BAR: SEARCH, FILTERS & NEW POST BUTTON */}
        <div
          style={{
            backgroundColor: "#002433",
            borderRadius: "16px",
            padding: "20px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {/* Left: Filters */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", flexGrow: 1 }}>
            {/* Search */}
            <div style={{ position: "relative", minWidth: "260px" }}>
              <i
                className="fa-solid fa-magnifying-glass"
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#94a3b8",
                  fontSize: "13px",
                }}
              />
              <input
                type="text"
                placeholder="Search blogs by title or slug..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  backgroundColor: "rgba(0, 19, 28, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "10px",
                  padding: "10px 14px 10px 38px",
                  color: "#ffffff",
                  fontSize: "13.5px",
                  outline: "none",
                  width: "100%",
                }}
              />
            </div>

            {/* Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              style={{
                backgroundColor: "rgba(0, 19, 28, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "10px",
                padding: "10px 14px",
                color: "#ffffff",
                fontSize: "13.5px",
                outline: "none",
              }}
            >
              <option value="all">All Categories</option>
              {pharmaCategories.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{
                backgroundColor: "rgba(0, 19, 28, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "10px",
                padding: "10px 14px",
                color: "#ffffff",
                fontSize: "13.5px",
                outline: "none",
              }}
            >
              <option value="all">All Statuses</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          {/* Right: New Blog Action */}
          <button
            onClick={handleOpenCreateModal}
            style={{
              backgroundColor: "#1ec4b6",
              color: "#002b3d",
              border: "none",
              borderRadius: "10px",
              padding: "11px 22px",
              fontWeight: 700,
              fontSize: "14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 4px 12px rgba(30, 196, 182, 0.3)",
            }}
          >
            <i className="fa-solid fa-plus"></i>
            <span>Create New Blog Post</span>
          </button>
        </div>

        {/* BLOGS LIST TABLE */}
        <div
          style={{
            backgroundColor: "#002433",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            overflow: "hidden",
          }}
        >
          {loading ? (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <div
                className="spinner-border"
                style={{ color: "#1ec4b6", width: "32px", height: "32px" }}
                role="status"
              />
              <p style={{ color: "rgba(255,255,255,0.6)", marginTop: "12px", fontSize: "14px" }}>
                Connecting to PHP database...
              </p>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <i
                className="fa-regular fa-folder-open"
                style={{ fontSize: "40px", color: "rgba(255,255,255,0.3)", marginBottom: "16px" }}
              />
              <h4 style={{ color: "#ffffff", margin: "0 0 8px" }}>No Articles Found</h4>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", margin: 0 }}>
                No posts matched your search filters. Click &quot;Create New Blog Post&quot; to publish one.
              </p>
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "14px" }}>
                <thead>
                  <tr
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "12.5px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    <th style={{ padding: "16px 20px" }}>Article</th>
                    <th style={{ padding: "16px 20px" }}>Category</th>
                    <th style={{ padding: "16px 20px" }}>Author</th>
                    <th style={{ padding: "16px 20px" }}>Status</th>
                    <th style={{ padding: "16px 20px" }}>Reads</th>
                    <th style={{ padding: "16px 20px" }}>Published</th>
                    <th style={{ padding: "16px 20px", textAlign: "right" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBlogs.map((b) => (
                    <tr
                      key={b.id}
                      style={{
                        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                        transition: "background-color 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                      {/* Title & Cover */}
                      <td style={{ padding: "16px 20px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                          <img
                            src={b.cover_image || "/assets/img/home-4/news/news-01.jpg"}
                            alt={b.title}
                            style={{
                              width: "54px",
                              height: "54px",
                              borderRadius: "8px",
                              objectFit: "cover",
                              flexShrink: 0,
                            }}
                          />
                          <div>
                            <div style={{ fontWeight: 600, color: "#ffffff", marginBottom: "4px" }}>
                              {b.title}
                            </div>
                            <div
                              style={{
                                color: "#1ec4b6",
                                fontSize: "12px",
                                fontFamily: "monospace",
                              }}
                            >
                              /blog/{b.slug}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td style={{ padding: "16px 20px" }}>
                        <span
                          style={{
                            padding: "4px 10px",
                            borderRadius: "999px",
                            backgroundColor: "rgba(30, 196, 182, 0.12)",
                            color: "#1ec4b6",
                            fontSize: "12px",
                            fontWeight: 600,
                          }}
                        >
                          {b.category}
                        </span>
                      </td>

                      {/* Author */}
                      <td style={{ padding: "16px 20px", color: "rgba(255,255,255,0.8)" }}>
                        {b.author_name}
                      </td>

                      {/* Status */}
                      <td style={{ padding: "16px 20px" }}>
                        <button
                          onClick={() => handleToggleStatus(b)}
                          title="Click to toggle publish/draft"
                          style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                          }}
                        >
                          <span
                            style={{
                              padding: "4px 10px",
                              borderRadius: "999px",
                              backgroundColor:
                                b.status === "published"
                                  ? "rgba(16, 185, 129, 0.15)"
                                  : "rgba(245, 158, 11, 0.15)",
                              color: b.status === "published" ? "#10b981" : "#f59e0b",
                              fontSize: "12px",
                              fontWeight: 700,
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "6px",
                            }}
                          >
                            <span
                              style={{
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                backgroundColor: b.status === "published" ? "#10b981" : "#f59e0b",
                              }}
                            />
                            {b.status === "published" ? "Published" : "Draft"}
                          </span>
                        </button>
                      </td>

                      {/* Views */}
                      <td style={{ padding: "16px 20px", color: "rgba(255,255,255,0.7)" }}>
                        <i className="fa-regular fa-eye me-1" style={{ color: "#1ec4b6" }}></i>
                        {b.views || 0}
                      </td>

                      {/* Date */}
                      <td style={{ padding: "16px 20px", color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>
                        {new Date(b.created_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </td>

                      {/* Actions */}
                      <td style={{ padding: "16px 20px", textAlign: "right" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                          {/* Live Link */}
                          <Link
                            href={`/blog/${b.slug}`}
                            target="_blank"
                            title="View Live Article"
                            style={{
                              padding: "6px 10px",
                              borderRadius: "6px",
                              backgroundColor: "rgba(255,255,255,0.06)",
                              color: "#1ec4b6",
                              textDecoration: "none",
                              fontSize: "12.5px",
                            }}
                          >
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                          </Link>

                          {/* Edit */}
                          <button
                            onClick={() => handleEditBlog(b)}
                            title="Edit Article & SEO"
                            style={{
                              padding: "6px 10px",
                              borderRadius: "6px",
                              backgroundColor: "rgba(255,255,255,0.06)",
                              color: "#ffffff",
                              border: "none",
                              cursor: "pointer",
                              fontSize: "12.5px",
                            }}
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </button>

                          {/* Delete */}
                          <button
                            onClick={() => handleDeleteBlog(b.id, b.title)}
                            title="Delete Article"
                            style={{
                              padding: "6px 10px",
                              borderRadius: "6px",
                              backgroundColor: "rgba(239, 68, 68, 0.1)",
                              color: "#fca5a5",
                              border: "none",
                              cursor: "pointer",
                              fontSize: "12.5px",
                            }}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* MODAL: CREATE / EDIT BLOG POST */}
      {isEditorOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "#002433",
              borderRadius: "20px",
              border: "1px solid rgba(30, 196, 182, 0.3)",
              width: "100%",
              maxWidth: "1000px",
              maxHeight: "92vh",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 25px 60px rgba(0,0,0,0.7)",
              overflow: "hidden",
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: "20px 28px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#001d29",
              }}
            >
              <div>
                <h3 style={{ margin: 0, color: "#ffffff", fontSize: "20px", fontWeight: 700 }}>
                  {editingBlogId ? "Edit Blog Article" : "Create New Dynamic Blog Post"}
                </h3>
                <p style={{ margin: "4px 0 0", color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>
                  Uploads directly to PHP backend and creates dedicated SEO page at{" "}
                  <code style={{ color: "#1ec4b6" }}>/blog/{formData.slug || "your-slug"}</code>
                </p>
              </div>

              {/* Tabs */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <button
                  type="button"
                  onClick={() => setEditorTab("write")}
                  style={{
                    backgroundColor: editorTab === "write" ? "#1ec4b6" : "rgba(255,255,255,0.08)",
                    color: editorTab === "write" ? "#002b3d" : "#ffffff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "8px 14px",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <i className="fa-solid fa-pen-nib me-1"></i> Content Editor
                </button>
                <button
                  type="button"
                  onClick={() => setEditorTab("preview")}
                  style={{
                    backgroundColor: editorTab === "preview" ? "#1ec4b6" : "rgba(255,255,255,0.08)",
                    color: editorTab === "preview" ? "#002b3d" : "#ffffff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "8px 14px",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <i className="fa-solid fa-eye me-1"></i> Live Preview
                </button>
                <button
                  type="button"
                  onClick={() => setEditorTab("seo")}
                  style={{
                    backgroundColor: editorTab === "seo" ? "#1ec4b6" : "rgba(255,255,255,0.08)",
                    color: editorTab === "seo" ? "#002b3d" : "#ffffff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "8px 14px",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <i className="fa-solid fa-magnifying-glass-chart me-1"></i> SEO &amp; SERP
                </button>

                <button
                  type="button"
                  onClick={() => setIsEditorOpen(false)}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "18px",
                    cursor: "pointer",
                    marginLeft: "12px",
                  }}
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <form onSubmit={handleSaveBlog} style={{ display: "flex", flexDirection: "column", flexGrow: 1, overflow: "hidden" }}>
              <div style={{ padding: "28px", overflowY: "auto", flexGrow: 1 }}>
                {/* TAB 1: CONTENT EDITOR */}
                {editorTab === "write" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {/* Title */}
                    <div>
                      <label style={{ display: "block", color: "#e2e8f0", fontSize: "13.5px", fontWeight: 600, marginBottom: "6px" }}>
                        Article Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        placeholder="e.g., How Smart Geofencing Prevents Proxy MR Attendance"
                        style={{
                          width: "100%",
                          backgroundColor: "#001824",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          borderRadius: "10px",
                          padding: "12px 16px",
                          color: "#ffffff",
                          fontSize: "16px",
                          fontWeight: 600,
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    {/* Slug & Category Row */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      {/* Slug */}
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                          <label style={{ color: "#e2e8f0", fontSize: "13.5px", fontWeight: 600 }}>
                            URL Slug (/blog/[slug]) *
                          </label>
                          <label style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", cursor: "pointer" }}>
                            <input
                              type="checkbox"
                              checked={autoSlug}
                              onChange={(e) => setAutoSlug(e.target.checked)}
                              style={{ marginRight: "4px", accentColor: "#1ec4b6" }}
                            />
                            Auto from title
                          </label>
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.slug}
                          onChange={(e) => {
                            setAutoSlug(false);
                            setFormData({ ...formData, slug: slugify(e.target.value) });
                          }}
                          placeholder="how-smart-geofencing-works"
                          style={{
                            width: "100%",
                            backgroundColor: "#001824",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            borderRadius: "10px",
                            padding: "10px 14px",
                            color: "#1ec4b6",
                            fontFamily: "monospace",
                            fontSize: "14px",
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>

                      {/* Category */}
                      <div>
                        <label style={{ display: "block", color: "#e2e8f0", fontSize: "13.5px", fontWeight: 600, marginBottom: "6px" }}>
                          Pharma Category *
                        </label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          style={{
                            width: "100%",
                            backgroundColor: "#001824",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            borderRadius: "10px",
                            padding: "10px 14px",
                            color: "#ffffff",
                            fontSize: "14px",
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        >
                          {pharmaCategories.map((c, i) => (
                            <option key={i} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Excerpt */}
                    <div>
                      <label style={{ display: "block", color: "#e2e8f0", fontSize: "13.5px", fontWeight: 600, marginBottom: "6px" }}>
                        Short Excerpt / Summary (Used for cards and default search preview)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.excerpt}
                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                        placeholder="Brief 1-2 sentence overview explaining the core takeaway..."
                        style={{
                          width: "100%",
                          backgroundColor: "#001824",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          borderRadius: "10px",
                          padding: "10px 14px",
                          color: "#ffffff",
                          fontSize: "14px",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    {/* Cover Image & Upload */}
                    <div>
                      <label style={{ display: "block", color: "#e2e8f0", fontSize: "13.5px", fontWeight: 600, marginBottom: "6px" }}>
                        Cover Image (URL or Instant File Upload)
                      </label>
                      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                        <input
                          type="text"
                          value={formData.cover_image}
                          onChange={(e) => setFormData({ ...formData, cover_image: e.target.value })}
                          placeholder="/assets/img/home-4/news/news-01.jpg"
                          style={{
                            flexGrow: 1,
                            backgroundColor: "#001824",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            borderRadius: "10px",
                            padding: "10px 14px",
                            color: "#ffffff",
                            fontSize: "13.5px",
                            outline: "none",
                          }}
                        />

                        {/* File Upload Button */}
                        <label
                          style={{
                            backgroundColor: "rgba(30, 196, 182, 0.15)",
                            color: "#1ec4b6",
                            border: "1px solid rgba(30, 196, 182, 0.3)",
                            borderRadius: "10px",
                            padding: "10px 16px",
                            fontSize: "13px",
                            fontWeight: 600,
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <i className="fa-solid fa-cloud-arrow-up"></i>
                          <span>{uploadingImage ? "Uploading..." : "Upload Image"}</span>
                          <input
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={handleImageUpload}
                            disabled={uploadingImage}
                          />
                        </label>

                        {/* Thumbnail preview */}
                        {formData.cover_image && (
                          <img
                            src={formData.cover_image}
                            alt="Preview"
                            style={{
                              width: "44px",
                              height: "44px",
                              borderRadius: "8px",
                              objectFit: "cover",
                              border: "1px solid #1ec4b6",
                            }}
                          />
                        )}
                      </div>
                    </div>

                    {/* Rich HTML Content Toolbar */}
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                        <label style={{ color: "#e2e8f0", fontSize: "13.5px", fontWeight: 600 }}>
                          Article Content (HTML / Rich Format) *
                        </label>
                        {/* Formatting Quick Buttons */}
                        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                          <button
                            type="button"
                            onClick={() => insertFormatting("h2")}
                            style={{
                              padding: "4px 8px",
                              fontSize: "12px",
                              borderRadius: "4px",
                              backgroundColor: "rgba(255,255,255,0.08)",
                              color: "#ffffff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            + H2 Heading
                          </button>
                          <button
                            type="button"
                            onClick={() => insertFormatting("h3")}
                            style={{
                              padding: "4px 8px",
                              fontSize: "12px",
                              borderRadius: "4px",
                              backgroundColor: "rgba(255,255,255,0.08)",
                              color: "#ffffff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            + H3 Subheading
                          </button>
                          <button
                            type="button"
                            onClick={() => insertFormatting("callout")}
                            style={{
                              padding: "4px 8px",
                              fontSize: "12px",
                              borderRadius: "4px",
                              backgroundColor: "rgba(30,196,182,0.15)",
                              color: "#1ec4b6",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            💡 Callout Box
                          </button>
                          <button
                            type="button"
                            onClick={() => insertFormatting("ul")}
                            style={{
                              padding: "4px 8px",
                              fontSize: "12px",
                              borderRadius: "4px",
                              backgroundColor: "rgba(255,255,255,0.08)",
                              color: "#ffffff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            • Bullet List
                          </button>
                          <button
                            type="button"
                            onClick={() => insertFormatting("quote")}
                            style={{
                              padding: "4px 8px",
                              fontSize: "12px",
                              borderRadius: "4px",
                              backgroundColor: "rgba(255,255,255,0.08)",
                              color: "#ffffff",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            “ Quote
                          </button>
                        </div>
                      </div>

                      <textarea
                        required
                        rows={10}
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        style={{
                          width: "100%",
                          backgroundColor: "#001824",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          borderRadius: "10px",
                          padding: "14px",
                          color: "#ffffff",
                          fontSize: "14px",
                          fontFamily: "monospace",
                          lineHeight: "1.6",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    {/* Author & Status Row */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                      <div>
                        <label style={{ display: "block", color: "#e2e8f0", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                          Author Name
                        </label>
                        <input
                          type="text"
                          value={formData.author_name}
                          onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                          style={{
                            width: "100%",
                            backgroundColor: "#001824",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            borderRadius: "10px",
                            padding: "9px 12px",
                            color: "#ffffff",
                            fontSize: "13.5px",
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", color: "#e2e8f0", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                          Read Time
                        </label>
                        <input
                          type="text"
                          value={formData.read_time}
                          onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
                          placeholder="5 min read"
                          style={{
                            width: "100%",
                            backgroundColor: "#001824",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            borderRadius: "10px",
                            padding: "9px 12px",
                            color: "#ffffff",
                            fontSize: "13.5px",
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", color: "#e2e8f0", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                          Publication Status
                        </label>
                        <select
                          value={formData.status}
                          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                          style={{
                            width: "100%",
                            backgroundColor: "#001824",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            borderRadius: "10px",
                            padding: "9px 12px",
                            color: formData.status === "published" ? "#10b981" : "#f59e0b",
                            fontWeight: 600,
                            fontSize: "13.5px",
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        >
                          <option value="published">Published (Live)</option>
                          <option value="draft">Draft (Hidden)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: LIVE HTML PREVIEW */}
                {editorTab === "preview" && (
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#1e293b",
                      borderRadius: "12px",
                      padding: "36px",
                      lineHeight: "1.8",
                    }}
                  >
                    <div style={{ marginBottom: "20px" }}>
                      <span
                        style={{
                          backgroundColor: "#00384f",
                          color: "#1ec4b6",
                          padding: "4px 12px",
                          borderRadius: "999px",
                          fontSize: "12px",
                          fontWeight: 700,
                        }}
                      >
                        {formData.category}
                      </span>
                    </div>
                    <h1 style={{ color: "#00384f", fontSize: "28px", fontWeight: 800, marginBottom: "12px" }}>
                      {formData.title || "Untitled Blog Post"}
                    </h1>
                    <p style={{ color: "#64748b", fontSize: "16px", fontStyle: "italic", marginBottom: "24px" }}>
                      {formData.excerpt}
                    </p>
                    {formData.cover_image && (
                      <img
                        src={formData.cover_image}
                        alt="Preview"
                        style={{ width: "100%", maxHeight: "360px", objectFit: "cover", borderRadius: "10px", marginBottom: "28px" }}
                      />
                    )}
                    <div dangerouslySetInnerHTML={{ __html: formData.content }} />
                  </div>
                )}

                {/* TAB 3: SEO SUITE & GOOGLE SERP PREVIEW */}
                {editorTab === "seo" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    {/* Google SERP Preview Box */}
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        padding: "24px",
                        borderRadius: "12px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                      }}
                    >
                      <div style={{ fontSize: "12px", fontWeight: 700, color: "#64748b", textTransform: "uppercase", marginBottom: "12px" }}>
                        <i className="fa-brands fa-google me-1" style={{ color: "#4285F4" }}></i> Google Search Snippet Preview
                      </div>
                      <div style={{ fontFamily: "arial, sans-serif" }}>
                        <div style={{ fontSize: "14px", color: "#202124", display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ color: "#202124", fontWeight: 400 }}>https://fieldomni.com</span>
                          <span style={{ color: "#5f6368" }}>› blog › {formData.slug || "slug"}</span>
                        </div>
                        <h3
                          style={{
                            color: "#1a0dab",
                            fontSize: "20px",
                            fontWeight: 400,
                            margin: "4px 0 6px",
                            lineHeight: "1.3",
                            cursor: "pointer",
                          }}
                        >
                          {formData.meta_title || `${formData.title || "Your Blog Title"} | Fieldomni`}
                        </h3>
                        <p style={{ color: "#4d5156", fontSize: "14px", margin: 0, lineHeight: "1.5" }}>
                          {formData.meta_description ||
                            formData.excerpt ||
                            "Discover cutting-edge pharma field force automation insights, MR doctor GPS tracking, and automated payroll strategies."}
                        </p>
                      </div>
                    </div>

                    {/* Meta Title */}
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                        <label style={{ color: "#e2e8f0", fontSize: "13.5px", fontWeight: 600 }}>
                          SEO Meta Title (Recommended: 50-60 characters)
                        </label>
                        <span
                          style={{
                            fontSize: "12px",
                            color:
                              (formData.meta_title || "").length >= 50 && (formData.meta_title || "").length <= 65
                                ? "#10b981"
                                : "#f59e0b",
                          }}
                        >
                          {(formData.meta_title || "").length} / 60 chars
                        </span>
                      </div>
                      <input
                        type="text"
                        value={formData.meta_title}
                        onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                        placeholder="e.g., How Smart Geofencing Prevents Proxy MR Attendance | Fieldomni"
                        style={{
                          width: "100%",
                          backgroundColor: "#001824",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          borderRadius: "10px",
                          padding: "10px 14px",
                          color: "#ffffff",
                          fontSize: "14px",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    {/* Meta Description */}
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                        <label style={{ color: "#e2e8f0", fontSize: "13.5px", fontWeight: 600 }}>
                          SEO Meta Description (Recommended: 140-160 characters)
                        </label>
                        <span
                          style={{
                            fontSize: "12px",
                            color:
                              (formData.meta_description || "").length >= 130 &&
                              (formData.meta_description || "").length <= 165
                                ? "#10b981"
                                : "#f59e0b",
                          }}
                        >
                          {(formData.meta_description || "").length} / 160 chars
                        </span>
                      </div>
                      <textarea
                        rows={3}
                        value={formData.meta_description}
                        onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                        placeholder="Compelling 150-character summary that increases search click-through rate (CTR)..."
                        style={{
                          width: "100%",
                          backgroundColor: "#001824",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          borderRadius: "10px",
                          padding: "10px 14px",
                          color: "#ffffff",
                          fontSize: "14px",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    {/* Keywords & Canonical */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label style={{ display: "block", color: "#e2e8f0", fontSize: "13.5px", fontWeight: 600, marginBottom: "6px" }}>
                          Target Meta Keywords (Comma separated)
                        </label>
                        <input
                          type="text"
                          value={formData.meta_keywords}
                          onChange={(e) => setFormData({ ...formData, meta_keywords: e.target.value })}
                          placeholder="pharma MR tracking, geofenced attendance, DCR app"
                          style={{
                            width: "100%",
                            backgroundColor: "#001824",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            borderRadius: "10px",
                            padding: "10px 14px",
                            color: "#ffffff",
                            fontSize: "14px",
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", color: "#e2e8f0", fontSize: "13.5px", fontWeight: 600, marginBottom: "6px" }}>
                          Canonical URL (Leave blank for default)
                        </label>
                        <input
                          type="text"
                          value={formData.canonical_url}
                          onChange={(e) => setFormData({ ...formData, canonical_url: e.target.value })}
                          placeholder="https://fieldomni.com/blog/..."
                          style={{
                            width: "100%",
                            backgroundColor: "#001824",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            borderRadius: "10px",
                            padding: "10px 14px",
                            color: "#ffffff",
                            fontSize: "14px",
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div
                style={{
                  padding: "16px 28px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#001d29",
                }}
              >
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>
                  Status:{" "}
                  <strong style={{ color: formData.status === "published" ? "#10b981" : "#f59e0b" }}>
                    {formData.status === "published" ? "Will be Public Immediately" : "Saved as Draft"}
                  </strong>
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    type="button"
                    onClick={() => setIsEditorOpen(false)}
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#ffffff",
                      borderRadius: "10px",
                      padding: "10px 20px",
                      fontSize: "13.5px",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#1ec4b6",
                      color: "#002b3d",
                      border: "none",
                      borderRadius: "10px",
                      padding: "10px 24px",
                      fontSize: "14px",
                      fontWeight: 700,
                      cursor: "pointer",
                      boxShadow: "0 4px 12px rgba(30,196,182,0.3)",
                    }}
                  >
                    <i className="fa-solid fa-floppy-disk me-2"></i>
                    {editingBlogId ? "Save Changes" : "Publish Blog Post"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
