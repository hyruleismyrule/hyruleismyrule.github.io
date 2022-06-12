<?php
// This is the main controller

// Create or access a Session
session_start();

// Get the database connection file
require_once 'library/connections.php';
// Get the PHP Motors model for use as needed
require_once 'model/main-model.php';
// Get the accounts model
require_once 'model/accounts-model.php';
// Get the vehicles model
require_once 'model/vehicles-model.php';
// Get the functions library
require_once 'library/functions.php';


// Get the array of classifications
$classifications = getClassifications();
$navList = buildNavList($classifications);

// Check if the firstname cookie exists, get its value
if(isset($_COOKIE['firstname'])){
    $cookieFirstname = filter_input(INPUT_COOKIE, 'firstname', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    $userInfo = getUserInfo($cookieFirstname);

    $_SESSION['lastName'] = $userInfo['clientLastname'];
    $_SESSION['email'] = $userInfo['clientEmail'];
    $_SESSION['level'] = $userInfo['clientLevel'];
}

$action = filter_input(INPUT_GET, 'action');
if ($action == NULL) {
    $action = filter_input(INPUT_POST, 'action');
}

switch ($action) {
    case 'template':
        include 'view/template.php';
        break;
    default:
        include 'view/home.php';
        // include 'view/admin.php';
        break;
}
?>