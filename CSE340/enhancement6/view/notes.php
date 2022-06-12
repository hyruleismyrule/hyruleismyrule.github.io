<?php
    //obtains user input for email
    $clientEmail = filter_input(INPUT_POST, 'clientEmail');

    $emailFormatAt = '/[a-zA-Z0-9-].@[a-zA-Z0-9-]/';
    $emailFormatDot = '/\.[a-zA-Z0-9-]/';


    if ($clientEmail) {
        if (preg_match($emailFormatAt, $clientEmail) == 1 && preg_match($emailFormatDot, $clientEmail) == 1) {
            echo "email valid";
        }
        else {
            echo "email is invalid";
        }
    }

    // Prints user input for email
    echo "<br>";
    echo $clientEmail;
              
?>