<?php
    // if (!isset($_SESSION['loggedin'])) {
    //     header('Location: /phpmotors/');
    // }
    // if ($_SESSION['level'] < 2) {
    //     header('Location: /phpmotors/');
    // }
          
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
        <?php if(isset($invInfo['invMake']) && isset($invInfo['invModel'])){ 
            echo "Modify $invInfo[invMake] $invInfo[invModel]";} 
            elseif(isset($invMake) && isset($invModel)) { 
            echo "Modify $invMake $invModel"; }
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
                <?php if(isset($invInfo['invMake']) && isset($invInfo['invModel'])){ 
	                    echo "Modify $invInfo[invMake] $invInfo[invModel]";} 
                    elseif(isset($invMake) && isset($invModel)) { 
	                    echo "Modify$invMake $invModel"; }
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
                    <p>*Note all Fields are Required</p>
                    <fieldset>
                        <legend>Model Information</legend>
                        <label>Choose Car Classification
                            <?php
                                $classificationList = '<select name="classificationId" id="classificationList">';
                                $classificationList .= "<option>Choose a Classification</option>";
                                foreach ($classifications as $classification) {
                                    $classificationList .= "<option value='$classification[classificationId]'";
                                    if (isset($classificationId)) {
                                        if ($classification['classificationId'] === $classificationId) {
                                            $classificationList .= ' selected ';
                                        }
                                    } elseif (isset($invInfo['classificationId'])) {
                                        if ($classification['classificationId'] === $invInfo['classificationId']) {
                                            $classificationList .= ' selected ';
                                        }
                                    }
                                    $classificationList .= ">$classification[classificationName]</option>";
                                }
                                $classificationList .= '</select>';
                                echo $classificationList;
                            ?>
                        </label>

                        <label>Make
                        <input type="text" name="invMake" id="invMake" required <?php if(isset($invMake)){ echo "value='$invMake'"; } elseif(isset($invInfo['invMake'])) {echo "value='$invInfo[invMake]'"; }?>>
                        </label>

                        <label>Model
                            <input type="text" name="invModel" id="invModel" required <?php if(isset($invModel)){ echo "value='$invModel'"; } elseif(isset($invInfo['invModel'])) {echo "value='$invInfo[invModel]'"; }?>>
                        </label>

                        <label>Description
                            <textarea name="invDescription" id="invDescription" required><?php if(isset($invDescription)){ echo $invDescription; } elseif(isset($invInfo['invDescription'])) {echo $invInfo['invDescription']; }?></textarea>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Image Information</legend>
                        <label>Image Path
                            <input type="text" name="invImage" id="invImage" required placeholder="/images/no-image.png" <?php if(isset($invImage)){echo "value='$invImage'";} elseif(isset($invInfo['invImage'])) {echo "value='$invInfo[invImage]'"; } ?>>
                        </label>

                        <label>Thumbnail Path
                            <input type="text" name="invThumbnail" id="invThumbnail" required placeholder="/images/no-image.png" <?php if(isset($invThumbnail)){echo "value='$invThumbnail'";} elseif(isset($invInfo['invThumbnail'])) {echo "value='$invInfo[invThumbnail]'"; } ?>>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Stock Information</legend>
                        <label>Price
                            <input type="number" name="invPrice" id="invPrice" required <?php if(isset($invPrice)){echo "value='$invPrice'";} elseif(isset($invInfo['invPrice'])) {echo "value='$invInfo[invPrice]'"; } ?>>
                        </label>

                        <label>Stock
                            <input type="number" name="invStock" id="invStock" required <?php if(isset($invStock)){echo "value='$invStock'";} elseif(isset($invInfo['invStock'])) {echo "value='$invInfo[invStock]'"; } ?>>
                        </label>

                        <label>Color
                            <input type="text" name="invColor" id="invColor" required <?php if(isset($invColor)){echo "value='$invColor'";} elseif(isset($invInfo['invColor'])) {echo "value='$invInfo[invColor]'"; } ?>>
                        </label>
                    </fieldset>
                    <input type="hidden" name="action" value="updateVehicle">
                    <input type="hidden" name="invId" value="<?php if(isset($invInfo['invId'])){ echo $invInfo['invId'];} elseif(isset($invId)){ echo $invId; } ?>">
                    <button type="submit" name="submit" id="regbtn">Update Vehicle</button>
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