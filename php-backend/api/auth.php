<?php
require_once __DIR__ . '/../config.php';

handleCors();

$pdo = getDbConnection();
$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';

// LOGIN
if ($method === 'POST' && ($action === 'login' || empty($action))) {
    $input = json_decode(file_get_contents('php://input'), true);
    if (!$input) {
        $input = $_POST;
    }

    $email = trim($input['email'] ?? '');
    $password = trim($input['password'] ?? '');

    if (empty($email) || empty($password)) {
        sendJsonResponse([
            'success' => false,
            'message' => 'Please provide both email and password.'
        ], 400);
    }

    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email LIMIT 1");
    $stmt->execute([':email' => $email]);
    $user = $stmt->fetch();

    if (!$user || !password_verify($password, $user['password'])) {
        sendJsonResponse([
            'success' => false,
            'message' => 'Invalid email or password.'
        ], 401);
    }

    // Generate Token
    $token = generateToken($user['id'], $user['email']);

    sendJsonResponse([
        'success' => true,
        'message' => 'Login successful',
        'token' => $token,
        'user' => [
            'id' => $user['id'],
            'username' => $user['username'],
            'email' => $user['email'],
            'role' => $user['role']
        ]
    ]);
}

// VERIFY CURRENT SESSION
if ($method === 'GET' && $action === 'verify') {
    $auth = requireAuth();
    $stmt = $pdo->prepare("SELECT id, username, email, role FROM users WHERE id = :id LIMIT 1");
    $stmt->execute([':id' => $auth['user_id']]);
    $user = $stmt->fetch();

    if (!$user) {
        sendJsonResponse(['success' => false, 'message' => 'User not found'], 404);
    }

    sendJsonResponse([
        'success' => true,
        'user' => $user
    ]);
}

// LOGOUT
if ($method === 'POST' && $action === 'logout') {
    sendJsonResponse([
        'success' => true,
        'message' => 'Logged out successfully'
    ]);
}

sendJsonResponse(['success' => false, 'message' => 'Invalid action or method'], 400);
