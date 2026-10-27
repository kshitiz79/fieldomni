<?php
require_once __DIR__ . '/../config.php';

handleCors();

$pdo = getDbConnection();
$method = $_SERVER['REQUEST_METHOD'];

// Helper to compute reading time
function calculateReadingTime($content) {
    $wordCount = str_word_count(strip_tags($content));
    $minutes = ceil($wordCount / 200);
    return max(1, $minutes) . ' min read';
}

// -----------------------------------------------------------------------------
// GET: Fetch List or Single Blog
// -----------------------------------------------------------------------------
if ($method === 'GET') {
    // 1. Single Blog by Slug or ID
    $slug = $_GET['slug'] ?? '';
    $id = $_GET['id'] ?? '';

    if (!empty($slug) || !empty($id)) {
        if (!empty($slug)) {
            $stmt = $pdo->prepare("SELECT * FROM blogs WHERE slug = :slug LIMIT 1");
            $stmt->execute([':slug' => $slug]);
        } else {
            $stmt = $pdo->prepare("SELECT * FROM blogs WHERE id = :id LIMIT 1");
            $stmt->execute([':id' => $id]);
        }

        $blog = $stmt->fetch();
        if (!$blog) {
            sendJsonResponse(['success' => false, 'message' => 'Blog not found'], 404);
        }

        // Increment view count if this is a public view
        if (empty($_GET['preview'])) {
            $updateViews = $pdo->prepare("UPDATE blogs SET views = views + 1 WHERE id = :id");
            $updateViews->execute([':id' => $blog['id']]);
            $blog['views'] = (int)$blog['views'] + 1;
        }

        // Fetch related blogs in same category (for SEO internal linking)
        $relatedStmt = $pdo->prepare("SELECT id, title, slug, excerpt, cover_image, category, read_time, created_at 
            FROM blogs 
            WHERE category = :cat AND id != :id AND status = 'published' 
            ORDER BY created_at DESC 
            LIMIT 3");
        $relatedStmt->execute([':cat' => $blog['category'], ':id' => $blog['id']]);
        $related = $relatedStmt->fetchAll();

        sendJsonResponse([
            'success' => true,
            'blog' => $blog,
            'related' => $related
        ]);
    }

    // 2. List Blogs
    $search = trim($_GET['search'] ?? '');
    $category = trim($_GET['category'] ?? '');
    $status = trim($_GET['status'] ?? 'published'); // 'published', 'draft', or 'all'
    $page = max(1, (int)($_GET['page'] ?? 1));
    $limit = max(1, min(50, (int)($_GET['limit'] ?? 12)));
    $offset = ($page - 1) * $limit;

    $whereClauses = [];
    $params = [];

    // Filter by status (unless 'all' requested by admin)
    if ($status !== 'all') {
        $whereClauses[] = "status = :status";
        $params[':status'] = $status;
    }

    // Filter by category
    if (!empty($category) && strtolower($category) !== 'all') {
        $whereClauses[] = "category = :category";
        $params[':category'] = $category;
    }

    // Search query
    if (!empty($search)) {
        $whereClauses[] = "(title LIKE :search OR excerpt LIKE :search OR content LIKE :search OR tags LIKE :search)";
        $params[':search'] = '%' . $search . '%';
    }

    $whereSql = count($whereClauses) > 0 ? "WHERE " . implode(' AND ', $whereClauses) : "";

    // Total Count
    $countStmt = $pdo->prepare("SELECT COUNT(*) as total FROM blogs $whereSql");
    $countStmt->execute($params);
    $totalCount = (int)$countStmt->fetch()['total'];

    // Get Blogs List
    $sql = "SELECT id, title, slug, excerpt, cover_image, category, author_name, author_role, author_avatar, read_time, tags, meta_title, meta_description, status, views, created_at, updated_at 
            FROM blogs 
            $whereSql 
            ORDER BY created_at DESC 
            LIMIT :limit OFFSET :offset";

    $stmt = $pdo->prepare($sql);
    foreach ($params as $key => $val) {
        $stmt->bindValue($key, $val);
    }
    $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
    $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
    $stmt->execute();
    $blogs = $stmt->fetchAll();

    // Get distinct categories with counts for filter tabs
    $catStmt = $pdo->query("SELECT category, COUNT(*) as count FROM blogs WHERE status = 'published' GROUP BY category ORDER BY count DESC");
    $categories = $catStmt->fetchAll();

    // Get overall stats for admin dashboard
    $stats = [
        'total' => (int)$pdo->query("SELECT COUNT(*) FROM blogs")->fetchColumn(),
        'published' => (int)$pdo->query("SELECT COUNT(*) FROM blogs WHERE status = 'published'")->fetchColumn(),
        'drafts' => (int)$pdo->query("SELECT COUNT(*) FROM blogs WHERE status = 'draft'")->fetchColumn(),
        'total_views' => (int)$pdo->query("SELECT SUM(views) FROM blogs")->fetchColumn()
    ];

    sendJsonResponse([
        'success' => true,
        'blogs' => $blogs,
        'total' => $totalCount,
        'page' => $page,
        'limit' => $limit,
        'totalPages' => ceil($totalCount / $limit),
        'categories' => $categories,
        'stats' => $stats
    ]);
}

// -----------------------------------------------------------------------------
// POST: Create New Blog (Admin Only)
// -----------------------------------------------------------------------------
if ($method === 'POST') {
    requireAuth();

    $input = json_decode(file_get_contents('php://input'), true);
    if (!$input) {
        $input = $_POST;
    }

    $title = trim($input['title'] ?? '');
    if (empty($title)) {
        sendJsonResponse(['success' => false, 'message' => 'Blog title is required.'], 400);
    }

    $content = trim($input['content'] ?? '');
    if (empty($content)) {
        sendJsonResponse(['success' => false, 'message' => 'Blog content is required.'], 400);
    }

    // Auto-generate or sanitize slug
    $rawSlug = !empty($input['slug']) ? $input['slug'] : $title;
    $slug = slugify($rawSlug);

    // Ensure unique slug
    $checkStmt = $pdo->prepare("SELECT COUNT(*) FROM blogs WHERE slug = :slug");
    $checkStmt->execute([':slug' => $slug]);
    if ($checkStmt->fetchColumn() > 0) {
        $slug = $slug . '-' . time();
    }

    $excerpt = trim($input['excerpt'] ?? '');
    if (empty($excerpt)) {
        $cleanText = strip_tags($content);
        $excerpt = mb_substr($cleanText, 0, 160) . '...';
    }

    $coverImage = trim($input['cover_image'] ?? '/assets/img/home-4/news/news-01.jpg');
    $category = trim($input['category'] ?? 'Field Operations');
    $authorName = trim($input['author_name'] ?? 'Fieldomni Intelligence');
    $authorRole = trim($input['author_role'] ?? 'Pharma Industry Research');
    $authorAvatar = trim($input['author_avatar'] ?? '/assets/img/home-4/news/info.png');
    $readTime = !empty($input['read_time']) ? trim($input['read_time']) : calculateReadingTime($content);
    $tags = trim($input['tags'] ?? 'Pharma, Medical Reps, Sales Automation');

    // SEO Fields
    $metaTitle = !empty($input['meta_title']) ? trim($input['meta_title']) : $title . " | Fieldomni Pharma Blog";
    $metaDesc = !empty($input['meta_description']) ? trim($input['meta_description']) : $excerpt;
    $metaKeywords = trim($input['meta_keywords'] ?? 'pharma tracking, field force automation, MR DCR software');
    $canonicalUrl = trim($input['canonical_url'] ?? '');
    $status = in_array(strtolower($input['status'] ?? ''), ['draft', 'published']) ? strtolower($input['status']) : 'published';

    $insertStmt = $pdo->prepare("INSERT INTO blogs 
        (title, slug, excerpt, content, cover_image, category, author_name, author_role, author_avatar, read_time, tags, meta_title, meta_description, meta_keywords, canonical_url, status, created_at, updated_at) 
        VALUES 
        (:title, :slug, :excerpt, :content, :cover_image, :category, :author_name, :author_role, :author_avatar, :read_time, :tags, :meta_title, :meta_description, :meta_keywords, :canonical_url, :status, datetime('now'), datetime('now'))");

    $insertStmt->execute([
        ':title' => $title,
        ':slug' => $slug,
        ':excerpt' => $excerpt,
        ':content' => $content,
        ':cover_image' => $coverImage,
        ':category' => $category,
        ':author_name' => $authorName,
        ':author_role' => $authorRole,
        ':author_avatar' => $authorAvatar,
        ':read_time' => $readTime,
        ':tags' => $tags,
        ':meta_title' => $metaTitle,
        ':meta_description' => $metaDesc,
        ':meta_keywords' => $metaKeywords,
        ':canonical_url' => $canonicalUrl,
        ':status' => $status
    ]);

    $newId = $pdo->lastInsertId();

    sendJsonResponse([
        'success' => true,
        'message' => 'Blog post created successfully!',
        'id' => $newId,
        'slug' => $slug
    ], 201);
}

// -----------------------------------------------------------------------------
// PUT: Update Existing Blog (Admin Only)
// -----------------------------------------------------------------------------
if ($method === 'PUT') {
    requireAuth();

    $input = json_decode(file_get_contents('php://input'), true);
    $id = (int)($input['id'] ?? $_GET['id'] ?? 0);

    if (!$id) {
        sendJsonResponse(['success' => false, 'message' => 'Blog ID is required.'], 400);
    }

    // Verify blog exists
    $existingStmt = $pdo->prepare("SELECT * FROM blogs WHERE id = :id LIMIT 1");
    $existingStmt->execute([':id' => $id]);
    $existing = $existingStmt->fetch();
    if (!$existing) {
        sendJsonResponse(['success' => false, 'message' => 'Blog post not found.'], 404);
    }

    $title = trim($input['title'] ?? $existing['title']);
    $content = trim($input['content'] ?? $existing['content']);
    $excerpt = trim($input['excerpt'] ?? $existing['excerpt']);
    $coverImage = trim($input['cover_image'] ?? $existing['cover_image']);
    $category = trim($input['category'] ?? $existing['category']);
    $authorName = trim($input['author_name'] ?? $existing['author_name']);
    $authorRole = trim($input['author_role'] ?? $existing['author_role']);
    $readTime = !empty($input['read_time']) ? trim($input['read_time']) : calculateReadingTime($content);
    $tags = trim($input['tags'] ?? $existing['tags']);
    $metaTitle = trim($input['meta_title'] ?? $existing['meta_title']);
    $metaDesc = trim($input['meta_description'] ?? $existing['meta_description']);
    $metaKeywords = trim($input['meta_keywords'] ?? $existing['meta_keywords']);
    $canonicalUrl = trim($input['canonical_url'] ?? $existing['canonical_url']);
    $status = trim($input['status'] ?? $existing['status']);

    // Check slug uniqueness if changed
    $slug = !empty($input['slug']) ? slugify($input['slug']) : $existing['slug'];
    if ($slug !== $existing['slug']) {
        $checkStmt = $pdo->prepare("SELECT COUNT(*) FROM blogs WHERE slug = :slug AND id != :id");
        $checkStmt->execute([':slug' => $slug, ':id' => $id]);
        if ($checkStmt->fetchColumn() > 0) {
            $slug = $slug . '-' . time();
        }
    }

    $updateStmt = $pdo->prepare("UPDATE blogs SET 
        title = :title,
        slug = :slug,
        excerpt = :excerpt,
        content = :content,
        cover_image = :cover_image,
        category = :category,
        author_name = :author_name,
        author_role = :author_role,
        read_time = :read_time,
        tags = :tags,
        meta_title = :meta_title,
        meta_description = :meta_description,
        meta_keywords = :meta_keywords,
        canonical_url = :canonical_url,
        status = :status,
        updated_at = datetime('now')
        WHERE id = :id");

    $updateStmt->execute([
        ':title' => $title,
        ':slug' => $slug,
        ':excerpt' => $excerpt,
        ':content' => $content,
        ':cover_image' => $coverImage,
        ':category' => $category,
        ':author_name' => $authorName,
        ':author_role' => $authorRole,
        ':read_time' => $readTime,
        ':tags' => $tags,
        ':meta_title' => $metaTitle,
        ':meta_description' => $metaDesc,
        ':meta_keywords' => $metaKeywords,
        ':canonical_url' => $canonicalUrl,
        ':status' => $status,
        ':id' => $id
    ]);

    sendJsonResponse([
        'success' => true,
        'message' => 'Blog post updated successfully!',
        'slug' => $slug
    ]);
}

// -----------------------------------------------------------------------------
// DELETE: Delete Blog (Admin Only)
// -----------------------------------------------------------------------------
if ($method === 'DELETE') {
    requireAuth();

    $id = (int)($_GET['id'] ?? 0);
    if (!$id) {
        $input = json_decode(file_get_contents('php://input'), true);
        $id = (int)($input['id'] ?? 0);
    }

    if (!$id) {
        sendJsonResponse(['success' => false, 'message' => 'Blog ID is required.'], 400);
    }

    $delStmt = $pdo->prepare("DELETE FROM blogs WHERE id = :id");
    $delStmt->execute([':id' => $id]);

    sendJsonResponse([
        'success' => true,
        'message' => 'Blog post deleted successfully.'
    ]);
}

sendJsonResponse(['success' => false, 'message' => 'Method not allowed.'], 405);
