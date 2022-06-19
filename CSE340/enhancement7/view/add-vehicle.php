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
    <title>Add Vehicle • PHP Motors</title>
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
                <h1>Add Vehicle</h1>
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
                                <?php echo $carclassificationSelect; ?>
                        </label>

                        <label>Make
                            <input type="text" name="invMake" id="invMake" required <?php if(isset($invMake)){echo "value='$invMake'";}  ?>>
                        </label>

                        <label>Model
                            <input type="text" name="invModel" id="invModel" required <?php if(isset($invModel)){echo "value='$invModel'";}  ?>>
                        </label>

                        <label>Description
                            <textarea name="invDescription" required><?php if(isset($invDescription)){echo $invDescription;} ?></textarea>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Image Information</legend>
                        <label>Image Path
                            <input type="text" name="invImage" id="invImage" required placeholder="/images/no-image.png" <?php if(isset($invImage)){echo "value='$invImage'";}  ?>>
                        </label>

                        <label>Thumbnail Path
                            <input type="text" name="invThumbnail" id="invThumbnail" required placeholder="/images/no-image.png" <?php if(isset($invThumbnail)){echo "value='$invThumbnail'";}  ?>>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Stock Information</legend>
                        <label>Price
                            <input type="number" name="invPrice" id="invPrice" required <?php if(isset($invPrice)){echo "value='$invPrice'";}  ?>>
                        </label>

                        <label>Stock
                            <input type="number" name="invStock" id="invStock" required <?php if(isset($invStock)){echo "value='$invStock'";}  ?>>
                        </label>

                        <label>Color
                            <input type="text" name="invColor" id="invColor" required <?php if(isset($invColor)){echo "value='$invColor'";}  ?>>
                        </label>
                    </fieldset>
                    <input type="hidden" name="action" value="addVehicle">
                    <button type="submit" name="submit" id="regbtn">Add Vehicle</button>
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