/**
 * Fieldomni Blog Service
 * Connects directly to the PHP REST API backend
 */

export const PHP_API_BASE =
  process.env.NEXT_PUBLIC_PHP_API_URL || "http://127.0.0.1:8000";

// Fetch list of blogs with optional search, category, status, pagination
export async function getBlogs(params = {}) {
  try {
    const query = new URLSearchParams();
    if (params.search) query.append("search", params.search);
    if (params.category && params.category !== "All") query.append("category", params.category);
    if (params.status) query.append("status", params.status);
    if (params.page) query.append("page", params.page);
    if (params.limit) query.append("limit", params.limit);

    const res = await fetch(`${PHP_API_BASE}/api/blogs.php?${query.toString()}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    console.error("Failed to fetch blogs from PHP API:", err.message);
    return {
      success: false,
      blogs: [],
      total: 0,
      categories: [],
      stats: { total: 0, published: 0, drafts: 0, total_views: 0 },
    };
  }
}

// Fetch single blog by slug with related posts
export async function getBlogBySlug(slug, isPreview = false) {
  try {
    const query = new URLSearchParams({ slug });
    if (isPreview) query.append("preview", "1");

    const res = await fetch(`${PHP_API_BASE}/api/blogs.php?${query.toString()}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data.success && data.blog ? data : null;
  } catch (err) {
    console.error(`Failed to fetch blog [${slug}] from PHP API:`, err.message);
    return null;
  }
}

// Fetch all slugs for static pre-rendering
export async function getAllBlogSlugs() {
  try {
    const data = await getBlogs({ status: "all", limit: 100 });
    if (data.success && data.blogs) {
      return data.blogs.map((b) => ({ slug: b.slug }));
    }
    return [];
  } catch (err) {
    return [];
  }
}

// Create new blog (Admin)
export async function createBlog(payload, token) {
  const res = await fetch(`${PHP_API_BASE}/api/blogs.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  return await res.json();
}

// Update existing blog (Admin)
export async function updateBlog(payload, token) {
  const res = await fetch(`${PHP_API_BASE}/api/blogs.php`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  return await res.json();
}

// Delete blog (Admin)
export async function deleteBlog(id, token) {
  const res = await fetch(`${PHP_API_BASE}/api/blogs.php?id=${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
}

// Upload blog image (Admin)
export async function uploadImage(file, token) {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`${PHP_API_BASE}/api/upload.php`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  return await res.json();
}

// Admin Login
export async function loginAdmin(email, password) {
  const res = await fetch(`${PHP_API_BASE}/api/auth.php?action=login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return await res.json();
}
