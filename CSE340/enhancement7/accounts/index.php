<?php
// This is the accounts controller

// Create or access a Session
session_start();

// Get the database connection file
require_once '../library/connections.php';
// Get the PHP Motors model for use as needed
require_once '../model/main-model.php';
// Get the accounts model
require_once '../model/accounts-model.php';
// Get the functions library
require_once '../library/functions.php';

// Check if the firstname cookie exists, get its value
if(isset($_COOKIE['firstname'])){
    $cookieFirstname = filter_input(INPUT_COOKIE, 'firstname', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $cookieEmail = filter_input(INPUT_COOKIE, 'email', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    $clientEmail = $cookieEmail;

    $clientData = getClient($clientEmail);
    array_pop($clientData);
    $_SESSION['clientData'] = $clientData;
    $_SESSION['loggedin'] = True;

    $clientFirstname = $clientData['clientFirstname'];

    setcookie('firstname', $clientFirstname, strtotime('+1 year'), '/');
    setcookie('email', $clientEmail, strtotime('+1 year'), '/');
}

// Get the array of classifications
$classifications = getClassifications();
$navList = buildNavList($classifications);


$action = filter_input(INPUT_GET, 'action');
if ($action == NULL) {
    $action = filter_input(INPUT_POST, 'action');
}

switch ($action) {
    case 'modifyUserInfo':
        $clientId = filter_input(INPUT_POST, 'clientId', FILTER_SANITIZE_NUMBER_INT);
        $clientFirstname = filter_input(INPUT_POST, 'clientFirstname', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $clientLastname = filter_input(INPUT_POST, 'clientLastname', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $clientEmail = filter_input(INPUT_POST, 'clientEmail', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

        $_SESSION['clientFirstname'] = $clientFirstname;
        $_SESSION['clientLastname'] = $clientLastname;
        $_SESSION['clientEmail'] = $clientEmail;


        // $_SESSION['message'] = $clientId . ', ' . $clientFirstname . ', ' . $clientLastname . ', ' . $clientEmail;
        // header('location: /phpmotors/accounts/');
        // break;
        
        if (empty($clientId) || empty($clientFirstname) || empty($clientLastname) || empty($clientEmail)) {
            $_SESSION['message'] = '<p>Please fill out all of the information.</p>';
            header('location: /phpmotors/accounts/?action=toUpdateAccount');
            exit;
        }

        $clientEmail = checkEmail($clientEmail);
       
        if ($clientEmail != $_SESSION['clientData']['clientEmail']) {
            if (checkExistingEmail($clientEmail) != 0) {
                $_SESSION['message'] = "<p>The email you have entered is already in our system, please choose a different email.</p>";
                header('location: /phpmotors/accounts/?action=toUpdateAccount');
                exit;
            }
        }

        $updateResult = updateClientInfo($clientId, $clientFirstname, $clientLastname, $clientEmail);

        if ($updateResult) {
            $_SESSION['message'] = "<p>Congratulations, $clientFirstname your info was successfully updated.</p>";
            header('location: /phpmotors/accounts/');

            setcookie('firstname', $clientFirstname, strtotime('+1 year'), '/');
            setcookie('email', $clientEmail, strtotime('+1 year'), '/');

            exit;
        } else {
            $_SESSION['message'] = "<p>Error. Your info was not updated.</p>";
            header('location: /phpmotors/accounts/?action=toUpdateAccount');
            exit;
        }

    break;

    case 'modifyUserPassword':
        $clientId = filter_input(INPUT_POST, 'clientId', FILTER_SANITIZE_NUMBER_INT);

        $clientPassword = filter_input(INPUT_POST, 'clientPassword', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        
        if (empty($clientPassword)) {
            $_SESSION['message'] = '<p>Please enter a new password.</p>';
            header('location: /phpmotors/accounts/?action=toUpdateAccount');
            exit;
        }

        $checkPassword = checkPassword($clientPassword);
        if ($checkPassword == 0) {
            $_SESSION['message'] = '<p>Please follow the password requirements.</p>';
            header('location: /phpmotors/accounts/?action=toUpdateAccount');
            exit;
        }

        $hashedPassword = password_hash($clientPassword, PASSWORD_DEFAULT);
        // $_SESSION['message'] = $clientPassword . ', ' . $hashedPassword;
        // header('location: /phpmotors/accounts/?action=toUpdateAccount');
        // break;

        $updateResult = updateClientPassword($clientId, $hashedPassword);
        
        if ($updateResult) {
            $_SESSION['message'] = "<p>Congratulations, $cookieFirstname, your password was successfully updated.</p>";
            // $_SESSION['message'] = 'Congratulations,' . $cookieFirstname . ', your password was successfully updated.' . $clientPassword . ', ' . $hashedPassword;
            header('location: /phpmotors/accounts/');
            exit;
        } else {
            $_SESSION['message'] = "<p>Error. Your password was not updated.</p>";
            // $_SESSION['message'] = 'Error. Your password was not updated.' . $clientPassword . ', ' . $hashedPassword;
            header('location: /phpmotors/accounts/');
            exit;
        }


    break; 

    case 'toUpdateAccount':
        // $test_a = 'testmmmmm';
        include $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/view/client-update.php';
    break;

    case 'login':
        include $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/view/login.php';
    break;

    case 'logout':

        if (isset($_COOKIE['firstname'])) {
            unset($_COOKIE['firstname']); 
            setcookie('firstname', null, -1, '/'); 
            setcookie('email', null, -1, '/');
        }

        session_unset();
        session_destroy();

        header('Location: /phpmotors/');
    break;
    
    case 'register':
        // Filter and store the data
        $clientFirstname = trim(filter_input(INPUT_POST, 'clientFirstname', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
        $clientLastname = trim(filter_input(INPUT_POST, 'clientLastname', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
        $clientEmail = trim(filter_input(INPUT_POST, 'clientEmail', FILTER_SANITIZE_EMAIL));
        $clientPassword = trim(filter_input(INPUT_POST, 'clientPassword', FILTER_SANITIZE_FULL_SPECIAL_CHARS));

        $clientEmail = checkEmail($clientEmail);
        $checkPassword = checkPassword($clientPassword);

        $existingEmail = checkExistingEmail($clientEmail);

        // Check for existing email address in the table
        if ($existingEmail) {
            $_SESSION['message'] = '<p class="notice">That email address already exists. Do you want to login instead?</p>';
            include '../view/login.php';
            exit;
        }

        if ($checkPassword == 0) {
            $_SESSION['message'] = '<p>Please follow the password requirements.</p>';
            include '../view/signup.php';
            exit;
        }

        // Check for missing data
        if (empty($clientFirstname) || empty($clientLastname) || empty($clientEmail) || empty($checkPassword)) {
            $_SESSION['message'] = '<p>Please provide information for all empty form fields.</p>';
            include '../view/signup.php';
            exit;
        }

        // Hash the checked password
        $hashedPassword = password_hash($clientPassword, PASSWORD_DEFAULT);

        // Send the data to the model
        $regOutcome = regClient($clientFirstname, $clientLastname, $clientEmail, $hashedPassword);

        // Check and report the result
        if ($regOutcome === 1) {
            setcookie('firstname', $clientFirstname, strtotime('+1 year'), '/');
            setcookie('email', $clientEmail, strtotime('+1 year'), '/');

            $_SESSION['message'] = "Thanks for registering $clientFirstname. Please use your email and password to login.";
            header('Location: /phpmotors/accounts/?action=login');

            exit;
        } else {
            $_SESSION['message'] = "<p>Sorry $clientFirstname, but the registration failed. Please try again.</p>";
            include '../view/signup.php';
            exit;
        }
    break;

    case 'startlogin':
        $clientEmail = filter_input(INPUT_POST, 'clientEmail', FILTER_SANITIZE_EMAIL);
        $clientEmail = checkEmail($clientEmail);
        $clientPassword = filter_input(INPUT_POST, 'clientPassword', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $passwordCheck = checkPassword($clientPassword);

        // Run basic checks, return if errors
        if (empty($clientEmail) || empty($passwordCheck)) {
            $_SESSION['message'] = '<p class="notice">Please provide a valid email address and password.</p>';
            include '../view/login.php';
            exit;
        }

        // A valid password exists, proceed with the login process
        // Query the client data based on the email address
        $clientData = getClient($clientEmail);

        // Compare the password just submitted against
        // the hashed password for the matching client
        $hashCheck = password_verify($clientPassword, $clientData['clientPassword']);
        // If the hashes don't match create an error
        // and return to the login view
        if (!$hashCheck) {
            $_SESSION['message'] = '<p class="notice">Please check your password and try again.</p>';
            include '../view/login.php';
            exit;
        }
        // A valid user exists, log them in
        $_SESSION['loggedin'] = TRUE;
        // Remove the password from the array
        // the array_pop function removes the last
        // element from an array
        array_pop($clientData);
        // Store the array into the session
        $_SESSION['clientData'] = $clientData;

        $clientFirstname = $clientData['clientFirstname'];
        setcookie('firstname', $clientFirstname, strtotime('+1 year'), '/');
        setcookie('email', $clientEmail, strtotime('+1 year'), '/');
        // Send them to the admin view
        
        // include '../view/admin.php';
        header('Location: /phpmotors/accounts/');
    exit;

    case 'signup':
        include $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/view/signup.php';
    break;

    default:
        include $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/view/admin.php';
    break;
}
