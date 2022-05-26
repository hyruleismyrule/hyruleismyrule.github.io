<?php
//Accounts Controller
// Get the database connection file
require_once '../library/connections.php';
// Get the PHP Motors model for use as needed
require_once '../model/main-model.php';
//Get the accounts model
require_once '../model/accounts-model.php';
$classifications = getClassifications();
//Building the nav list
$navList = '<ul>';
 $navList .= "<li><a href='/phpmotors/index.php' title='View the PHP Motors home page'>Home</a></li>";
 foreach ($classifications as $classification) {
  $navList .= "<li><a href='/phpmotors/index.php?action=".urlencode($classification['classificationName'])."' title='View our $classification[classificationName] product line'>$classification[classificationName]</a></li>";
 }
 $navList .= '</ul>';
$action = filter_input(INPUT_POST, 'action');
 if ($action == NULL){
  $action = filter_input(INPUT_GET, 'action');
 }
 switch ($action){
 case 'registration':
    // include '../view/register.php';
    include $_SERVER["DOCUMENT_ROOT"] . '/phpmotors/view/registration.php';
  break;
  case 'register':
    $clientFirstname = filter_input(INPUT_POST, 'clientFirstname');
    $clientLastname = filter_input(INPUT_POST, 'clientLastname');
    $clientEmail = filter_input(INPUT_POST, 'clientEmail');
    $clientPassword = filter_input(INPUT_POST, 'clientPassword');
    if (empty($clientFirstname) || empty($clientLastname) || empty($clientEmail)|| empty($clientPassword)){
      $msg = '<p>Please fill in all fields.</p>';
      include $_SERVER["DOCUMENT_ROOT"] . '/phpmotors/view/registration.php';
      exit;
    }
    //send data out
    $regOutcome = regClient($clientFirstname, $clientLastname, $clientEmail, $clientPassword);
    //check result
    if($regOutcome === 1){
      $message = "<p>Thanks for registering $clientFirstname. Please use your email and password to login.</p>";
      include '../view/login.php';
      exit;
     } else {
      $message = "<p>Sorry $clientFirstname, but the registration failed. Please try again.</p>";
      include '../view/registration.php';
      exit;
     }
  break;
 default:
    include $_SERVER["DOCUMENT_ROOT"] . '/phpmotors/view/login.php';
  break;
}
?>