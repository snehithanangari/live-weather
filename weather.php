<?php
header('Content-Type: application/json');

$apiKey = "YOUR_API_KEY"; // <-- Replace with your OpenWeatherMap API key
$city = isset($_GET['city']) ? urlencode($_GET['city']) : '';

if ($city) {
    $url = "https://api.openweathermap.org/data/2.5/weather?q=$city&units=metric&appid=$apiKey";
    $response = file_get_contents($url);
    echo $response;
} else {
    echo json_encode(["cod" => 400, "message" => "City not provided"]);
}
?>
