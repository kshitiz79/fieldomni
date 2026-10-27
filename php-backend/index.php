<?php
require_once __DIR__ . '/config.php';
$pdo = getDbConnection();
$blogCount = $pdo->query("SELECT COUNT(*) FROM blogs")->fetchColumn();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fieldomni Blog API Backend</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #001a24; color: #e2e8f0; margin: 0; padding: 40px 20px; line-height: 1.6; }
        .container { max-width: 800px; margin: 0 auto; background: #002b3d; padding: 36px; border-radius: 16px; border: 1px solid rgba(30,196,182,0.2); box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
        h1 { color: #1ec4b6; margin-top: 0; font-size: 28px; }
        .badge { background: rgba(30,196,182,0.2); color: #1ec4b6; padding: 4px 12px; border-radius: 999px; font-size: 13px; font-weight: 600; display: inline-block; margin-bottom: 20px; }
        .card { background: #001f2c; padding: 18px 24px; border-radius: 10px; margin-bottom: 16px; border: 1px solid rgba(255,255,255,0.05); }
        .method { font-weight: 700; color: #1ec4b6; margin-right: 8px; font-family: monospace; }
        .endpoint { font-family: monospace; color: #ffffff; }
        code { background: #00151f; padding: 2px 6px; border-radius: 4px; color: #1ec4b6; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <span class="badge">● PHP Backend Status: Active</span>
        <h1>Fieldomni Dynamic Blog Engine</h1>
        <p>PHP SQLite/PDO REST API backend powering real-time SEO-optimized blogs and admin management.</p>
        <p><strong>Total Seeded Articles:</strong> <?php echo $blogCount; ?> blogs ready in database.</p>

        <h3 style="color: #ffffff; margin-top: 30px;">API Endpoints</h3>
        <div class="card">
            <span class="method">GET</span><span class="endpoint">/api/blogs.php</span>
            <p style="margin: 6px 0 0; font-size: 14px; color: #94a3b8;">Fetch paginated blogs with search, category filtering, and status.</p>
        </div>
        <div class="card">
            <span class="method">GET</span><span class="endpoint">/api/blogs.php?slug={slug}</span>
            <p style="margin: 6px 0 0; font-size: 14px; color: #94a3b8;">Fetch single blog with full HTML content, SEO metadata, and related articles.</p>
        </div>
        <div class="card">
            <span class="method">POST</span><span class="endpoint">/api/blogs.php</span>
            <p style="margin: 6px 0 0; font-size: 14px; color: #94a3b8;">Create new blog post (Requires Bearer Admin Token). Auto-generates SEO slug & read time.</p>
        </div>
        <div class="card">
            <span class="method">POST</span><span class="endpoint">/api/auth.php?action=login</span>
            <p style="margin: 6px 0 0; font-size: 14px; color: #94a3b8;">Admin login with credentials (Default: admin@fieldomni.com / admin123).</p>
        </div>
    </div>
</body>
</html>
