<?php
    
     
    if (!isset($_SESSION['loggedin'])) {
        header('Location: /phpmotors/');
    }
    if ($_SESSION['clientData']['clientLevel'] < 2) {
        header('Location: /phpmotors/');
    }

?><?php 
// Build vehicles classifications dropdown
$carclassificationSelect = '<select name="classificationId" id="classificationId">';

foreach ($classifications as $classification) {
    $carclassificationOption = "<option value='$classification[classificationId]'";

    if (isset($classificationId)) {
        if($classification['classificationId'] === $classificationId) {
            $carclassificationOption .= ' selected ';
        }
    }


    $carclassificationOption .= ">$classification[classificationName]</option>";

    $carclassificationSelect .= $carclassificationOption;
}

$carclassificationSelect .= '</select>';

?><!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="description" content="#">
    <meta name="author" content="Cynthia Rawlings">
    <title>
        <?php if(isset($invInfo['invMake'])){ 
	            echo "Delete $invInfo[invMake] $invInfo[invModel]";
            } 
        ?>
        • PHP Motors
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link href="/phpmotors/css/normalize.css" rel="stylesheet">
    <link href="/phpmotors/css/small.css" rel="stylesheet">
    <link href="/phpmotors/css/medium.css" rel="stylesheet">
    <link href="/phpmotors/css/large.css" rel="stylesheet">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo&family=M+PLUS+Code+Latin&display=swap" rel="stylesheet">
    <!-- Fontawesome Icons -->
    <!-- <script src="https://kit.fontawesome.com/7d69b1e6ff.js" crossorigin="anonymous"></script> -->
    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="/phpmotors/images/favicon_package_v0.16/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/phpmotors/images/favicon_package_v0.16/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/phpmotors/images/favicon_package_v0.16/favicon-16x16.png">
    <link rel="manifest" href="/phpmotors/images/favicon_package_v0.16/site.webmanifest">
    <link rel="mask-icon" href="/phpmotors/images/favicon_package_v0.16/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
</head>

<body>
    <div class="all-content-wrapper">
        <header>
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/common/header.php'; ?>
        </header>

        <nav>
            <?php echo $navList; ?>
        </nav>

        <main>
            <div class="mobile-margin">
            <h1>
                <?php if(isset($invInfo['invMake'])){ 
	                echo "Delete $invInfo[invMake] $invInfo[invModel]";
                    } 
                ?>
            </h1>

                <?php
                if (isset($_SESSION['message'])) {
                    echo $_SESSION['message'];

                   unset($_SESSION['message']);
                }
                ?>
            </div>

            <div class="form">
                <form action="/phpmotors/vehicles/index.php" method="post">
                    <p>Confirm Vehicle Deletion. The delete is permanent.</p>
                    <fieldset>
                        <legend>Model Information</legend>

                        <label>Make
                        <input type="text" name="invMake" id="invMake" required readonly <?php if(isset($invMake)){ echo "value='$invMake'"; } elseif(isset($invInfo['invMake'])) {echo "value='$invInfo[invMake]'"; }?>>
                        </label>

                        <label>Model
                            <input type="text" name="invModel" id="invModel" required readonly <?php if(isset($invModel)){ echo "value='$invModel'"; } elseif(isset($invInfo['invModel'])) {echo "value='$invInfo[invModel]'"; }?>>
                        </label>

                        <label>Description
                            <textarea name="invDescription" id="invDescription" required readonly><?php if(isset($invDescription)){ echo $invDescription; } elseif(isset($invInfo['invDescription'])) {echo $invInfo['invDescription']; }?></textarea>
                        </label>
                    </fieldset>
    
                    <input type="hidden" name="action" value="deleteVehicle">
                    <input type="hidden" name="invId" value="<?php if(isset($invInfo['invId'])){ echo $invInfo['invId'];} elseif(isset($invId)){ echo $invId; } ?>">
                    <button type="submit" name="submit" id="regbtn">Delete Vehicle</button>
                </form>
            </div>
        </main>

        <footer>
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/common/footer.php'; ?>
        </footer>
    </div>

    <!-- javaScript -->
    <script src="../js/scripts.js"></script>
</body>

</html>