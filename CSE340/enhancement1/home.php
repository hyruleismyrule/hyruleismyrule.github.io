<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="description" content="#">
    <meta name="author" content="Cynthia Rawlings">
    <title>Home • PHP Motors</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link href="css/normalize.css" rel="stylesheet">
    <link href="css/small.css" rel="stylesheet">
    <link href="css/medium.css" rel="stylesheet">
    <link href="css/large.css" rel="stylesheet">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo&family=M+PLUS+Code+Latin&display=swap" rel="stylesheet">
    <!-- Fontawesome Icons -->
    <script src="https://kit.fontawesome.com/7d69b1e6ff.js" crossorigin="anonymous"></script>
    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="images/favicon_package_v0.16/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon_package_v0.16/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon_package_v0.16/favicon-16x16.png">
    <link rel="manifest" href="images/favicon_package_v0.16/site.webmanifest">
    <link rel="mask-icon" href="images/favicon_package_v0.16/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
</head>

<body>
    <div class="all-content-wrapper">
        <header>
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/header.php'; ?>
        </header>

        <nav>
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/navigation.php'; ?>
        </nav>

        <main>
            <h1 class="mobile-margin">Welcome to PHP Motors!</h1>
            <div class="mobile-margin hero-container">
                <div class="hero-car-info">
                    <h2>DMC Delorean</h2>
                    <p>3 Cup holders</p>
                    <p>Superman doors</p>
                    <p>Fuzzy dice!</p>
                    <div class="hero-button-container top-button">
                        <button class="hero-car-button">Own Today</button>
                    </div>
                </div>

                <div class="hero-car-img">
                    <img src="images/delorean.jpg" alt="Delorean car">
                </div>

                <div class="hero-button-container bottom-button">
                    <button class="hero-car-button">Own Today</button>
                </div>
            </div>

            <div class="mobile-margin car-upgrades-reviews-container">
                <div class="reviews">
                    <h2>DMC Delorian Reviews</h2>
                    <ul>
                        <li>"So fast its almost like traveling in time." (4/5)</li>
                        <li>"Coolest ride on the road." (4/5)</li>
                        <li>"I'm feeling Marty McFly!" (5/5)</li>
                        <li>"The most futuristic ride of our day." (4.5/5)</li>
                        <li>"80's livin and I love it!" (5/5)</li>
                    </ul>
                </div>

                <div class="upgrade-container">
                    <h2 class="upgrades-title">Delorian Upgrades</h2>
                    <div class="upgrade">
                        <div class="upgrade-img-container">
                            <img src="images/upgrades/flux-cap.png" alt="Flux Capacitor">
                        </div>
                        <p><a href="#">Flux Capacitor</a></p>
                    </div>

                    <div class="upgrade">
                        <div class="upgrade-img-container">
                            <img src="images/upgrades/flame.jpg" alt="Flame">
                        </div>
                        <p><a href="#">Flame Decals</a></p>
                    </div>

                    <div class="upgrade">
                        <div class="upgrade-img-container">
                            <img src="images/upgrades/bumper_sticker.jpg" alt="Bumper Sticker">
                        </div>
                        <p><a href="#">Bumper Stickers</a></p>
                    </div>

                    <div class="upgrade">
                        <div class="upgrade-img-container">
                            <img src="images/upgrades/hub-cap.jpg" alt="Hub cap">
                        </div>
                        <p><a href="#">Hub Caps</a></p>
                    </div>
                </div>

            </div>
        </main>

        <footer>
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php'; ?>
        </footer>
    </div>

    <!-- javaScript -->
    <script src="js/scripts.js"></script>
</body>

</html>