<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Define file path
$file = __DIR__ . '/../cookies_consent.csv'; // CSV can be opened natively in Excel

// Handle OPTIONS request for preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Read input payload
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

if ($input) {
    // Escape and fetch data
    $action = htmlspecialchars($input['action'] ?? 'unknown');
    $analytics = (isset($input['preferences']['analytics']) && $input['preferences']['analytics']) ? 'Diterima' : 'Ditolak';
    $marketing = (isset($input['preferences']['marketing']) && $input['preferences']['marketing']) ? 'Diterima' : 'Ditolak';
    $timestamp = htmlspecialchars($input['timestamp'] ?? date('c'));
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';
    $userAgent = htmlspecialchars($_SERVER['HTTP_USER_AGENT'] ?? 'Unknown');

    // Create file and headers if it doesn't exist
    $fileExists = file_exists($file);
    $handle = fopen($file, 'a');
    
    if (!$fileExists) {
        // Add UTF-8 BOM for Excel compatibility
        fprintf($handle, chr(0xEF).chr(0xBB).chr(0xBF));
        fputcsv($handle, ['Waktu (Timestamp)', 'Alamat IP', 'Aksi (Action)', 'Cookie Analisis', 'Cookie Pemasaran', 'User Agent']);
    }

    // Write a new row
    fputcsv($handle, [$timestamp, $ip, $action, $analytics, $marketing, $userAgent]);
    fclose($handle);

    echo json_encode(["status" => "success", "message" => "Data tersimpan ke Excel/CSV."]);
} else {
    echo json_encode(["status" => "error", "message" => "Invalid payload"]);
}
?>
