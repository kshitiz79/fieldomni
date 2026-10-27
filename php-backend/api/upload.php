<?php
require_once __DIR__ . '/../config.php';

handleCors();
requireAuth();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJsonResponse(['success' => false, 'message' => 'Only POST allowed'], 405);
}

if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    sendJsonResponse(['success' => false, 'message' => 'No image file uploaded or upload error occurred.'], 400);
}

$file = $_FILES['image'];
$allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];

if (!in_array($file['type'], $allowedTypes)) {
    sendJsonResponse(['success' => false, 'message' => 'Invalid file format. Allowed: JPG, PNG, WEBP, GIF, SVG.'], 400);
}

// Max 5MB
if ($file['size'] > 5 * 1024 * 1024) {
    sendJsonResponse(['success' => false, 'message' => 'File size exceeds 5MB limit.'], 400);
}

// Target folder inside Next.js public directory so it serves instantly
$targetDir = dirname(__DIR__, 2) . '/public/uploads/blogs';
if (!is_dir($targetDir)) {
    mkdir($targetDir, 0777, true);
}

$ext = pathinfo($file['name'], PATHINFO_EXTENSION);
$safeName = 'blog_' . time() . '_' . bin2hex(random_bytes(4)) . '.' . $ext;
$targetPath = $targetDir . '/' . $safeName;

if (move_uploaded_file($file['tmp_name'], $targetPath)) {
    $publicUrl = '/uploads/blogs/' . $safeName;
    sendJsonResponse([
        'success' => true,
        'message' => 'Image uploaded successfully!',
        'url' => $publicUrl
    ]);
} else {
    sendJsonResponse(['success' => false, 'message' => 'Failed to save uploaded file.'], 500);
}
