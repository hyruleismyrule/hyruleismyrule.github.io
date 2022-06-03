<?php
// This is the main controller

// Get the database connection file
require_once 'library/connections.php';
// Get the PHP Motors model for use as needed
require_once 'model/main-model.php';
// Get the accounts model
require_once 'model/accounts-model.php';
// Get the functions library
require_once 'library/functions.php';


// Get the array of classifications
$classifications = getClassifications();
$navList = buildNavList($classifications);

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
        break;
}
?>