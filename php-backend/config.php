<?php
/**
 * Fieldomni Blog Management System - PHP Backend Configuration
 * Provides SQLite PDO Database Connection, CORS, Helper Functions & Security
 */

// Enable error reporting for development (disable or adjust in production)
error_reporting(E_ALL);
ini_set('display_errors', '0');

// Set JSON header by default for API endpoints
function sendJsonResponse($data, $statusCode = 200) {
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

// CORS Headers
function handleCors() {
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '*';
    header("Access-Control-Allow-Origin: $origin");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit;
    }
}

// Database Connection
function getDbConnection() {
    static $pdo = null;
    if ($pdo !== null) {
        return $pdo;
    }

    $dbDir = __DIR__ . '/data';
    if (!is_dir($dbDir)) {
        mkdir($dbDir, 0777, true);
    }

    $dbPath = $dbDir . '/fieldomni_blogs.sqlite';
    $isNewDb = !file_exists($dbPath);

    try {
        $pdo = new PDO("sqlite:" . $dbPath);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

        // Initialize schema if newly created
        if ($isNewDb) {
            initDatabaseSchema($pdo);
        }

        return $pdo;
    } catch (PDOException $e) {
        sendJsonResponse([
            'success' => false,
            'message' => 'Database connection error: ' . $e->getMessage()
        ], 500);
    }
}

// Schema Initializer
function initDatabaseSchema($pdo) {
    // Blogs Table
    $pdo->exec("CREATE TABLE IF NOT EXISTS blogs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        excerpt TEXT,
        content TEXT NOT NULL,
        cover_image TEXT,
        category TEXT NOT NULL DEFAULT 'General',
        author_name TEXT NOT NULL DEFAULT 'Fieldomni Editorial',
        author_role TEXT DEFAULT 'Pharma Intelligence Team',
        author_avatar TEXT DEFAULT '/assets/img/home-4/news/info.png',
        read_time TEXT DEFAULT '5 min read',
        tags TEXT DEFAULT 'Pharma, MR Tracking, Healthcare',
        meta_title TEXT,
        meta_description TEXT,
        meta_keywords TEXT,
        canonical_url TEXT,
        status TEXT NOT NULL DEFAULT 'published',
        views INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )");

    // Users / Admins Table
    $pdo->exec("CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'admin',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )");

    // Create default admin: admin@fieldomni.com / admin123
    $defaultPassHash = password_hash('admin123', PASSWORD_BCRYPT);
    $stmt = $pdo->prepare("INSERT OR IGNORE INTO users (username, email, password, role) VALUES (:username, :email, :password, :role)");
    $stmt->execute([
        ':username' => 'admin',
        ':email' => 'admin@fieldomni.com',
        ':password' => $defaultPassHash,
        ':role' => 'admin'
    ]);
}

// Generate URL slug from title
function slugify($text) {
    $text = preg_replace('~[^\pL\d]+~u', '-', $text);
    $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
    $text = preg_replace('~[^-\w]+~', '', $text);
    $text = trim($text, '-');
    $text = preg_replace('~-+~', '-', $text);
    $text = strtolower($text);
    return empty($text) ? 'blog-post-' . time() : $text;
}

// Simple Token Verification for Admin API
define('AUTH_SECRET', 'fieldomni_secret_jwt_key_2026_secure_token');

function generateToken($userId, $email) {
    $payload = [
        'user_id' => $userId,
        'email' => $email,
        'exp' => time() + (86400 * 7) // 7 days
    ];
    $json = json_encode($payload);
    $sig = hash_hmac('sha256', $json, AUTH_SECRET);
    return base64_encode($json) . '.' . $sig;
}

function verifyToken($token) {
    if (!$token) return false;
    $parts = explode('.', $token);
    if (count($parts) !== 2) return false;

    $payloadJson = base64_decode($parts[0]);
    if (!$payloadJson) return false;

    $expectedSig = hash_hmac('sha256', $payloadJson, AUTH_SECRET);
    if (!hash_equals($expectedSig, $parts[1])) return false;

    $data = json_decode($payloadJson, true);
    if (!$data || !isset($data['exp']) || $data['exp'] < time()) {
        return false;
    }
    return $data;
}

function requireAuth() {
    $headers = getallheaders();
    $authHeader = $headers['Authorization'] ?? $headers['authorization'] ?? '';
    
    $token = '';
    if (preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
        $token = $matches[1];
    } elseif (isset($_COOKIE['admin_token'])) {
        $token = $_COOKIE['admin_token'];
    }

    $authData = verifyToken($token);
    if (!$authData) {
        sendJsonResponse([
            'success' => false,
            'message' => 'Unauthorized: Invalid or expired admin token'
        ], 401);
    }
    return $authData;
}
