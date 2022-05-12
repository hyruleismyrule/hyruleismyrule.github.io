<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="description" content="#">
    <meta name="author" content="Cynthia Rawlings">
    <title>Sign Up • PHP Motors</title>
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
                <h1>Sign Up</h1>
            </div>
            <div class="form">
                <form action="signup">
                    <fieldset>
                        <legend>Personal Infromation</legend>
                        <label>First name:
                            <input type="text" name="clientFirstname" id="clientFirstname" pattern="[A-Za-z]{3,}" required>
                        </label>
                        <label>Last name:
                            <input type="text" name="clientLastname" id="clientLastname" pattern="[A-Za-z]{3,}" required>
                        </label>
                        <label>Email:
                            <input type="email" name="clientEmail" id="clientEmail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Login Information</legend>
                        <label>Username:
                            <input type="text" name="username" required>
                        </label>
                        <label>Password:
                            <input type="password" name="clientPassword" id="clientPassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required>
                        </label>
                    </fieldset>
                    <button type="submit">Sign Up</button>
                </form>
            </div>

        </main>

        <footer>
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/common/footer.php'; ?>
        </footer>
    </div>

    <!-- javaScript -->
    <script src="js/scripts.js"></script>
</body>

</html>