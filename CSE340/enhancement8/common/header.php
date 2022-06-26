<div class="logo-container">
    <img src="/phpmotors/images/site/logo.png" alt="PHP Motors">
</div>

<?php 

    if(isset($cookieFirstname)){
        echo    '<div class="account-container">
                    <a href="/phpmotors/accounts">' . 
                    $cookieFirstname . '</a>' .
                    '<div>|</div>' .
                    '<a href="/phpmotors/accounts?action=logout">Log out</a>
                </div>'
            ;
    } 
    else {
        echo
            '<div class="account-container">
                <a href="/phpmotors/accounts?action=login">My Account</a>
            </div>'
        ;
    }

?>
