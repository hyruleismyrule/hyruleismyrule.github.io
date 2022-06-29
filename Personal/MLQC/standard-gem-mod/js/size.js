export function responsiveAppSize() {
    let appDiv = document.getElementById("app-container");

    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;

    let appHeight = windowHeight;
    let appWidth = windowWidth;

    if (windowHeight > windowWidth) {
        // Caclculate by width (mobile)
        appWidth = windowWidth;
        appHeight = 1.77 * appWidth;

        appDiv.style.width = appWidth + "px";
        appDiv.style.height = appHeight + "px";

        if (appHeight > windowHeight) {
            // calculate by height
            appHeight = windowHeight;
            appWidth = appHeight / 1.77;

            appDiv.style.width = appWidth + "px";
            appDiv.style.height = appHeight + "px";
        }
    } else {
        // Calculate by height (desktop)
        appHeight = windowHeight;
        appWidth = appHeight / 1.77;

        appDiv.style.width = appWidth + "px";
        appDiv.style.height = appHeight + "px";
    }
    placeGrids(appWidth);

    if (document.getElementById("karmaHeader")) {
        sizeResultsKarma(appWidth);
    }

    if (document.getElementById("summaryBox")) {
        summaryKarmaSizes();
    }
}

// Summary Karma
function summaryKarmaSizes() {
    let appContainer = document.getElementById("app-container");
    let width = appContainer.offsetWidth;

    let karmaHeader = document.getElementById("karmaHeader");
    karmaHeader.style.marginTop = width / 3 + "px";
    karmaHeader.style.marginLeft = (width / 2 - ((width / 4.75))) + "px";
    karmaHeader.style.marginBottom = width / 50 + "px";

    let karmaHeaderText = document.getElementById("karmaHeaderText");
    karmaHeaderText.style.width = width / 5.5 + "px";
    karmaHeaderText.style.fontSize = width / 20 + "px";
    karmaHeaderText.style.padding = width / 50 + "px";
    karmaHeaderText.style.paddingLeft = width / 8 + "px";
    karmaHeaderText.style.paddingRight = width / 8 + "px";

    let elements = document.querySelectorAll('.summaryBox');
    elements.forEach(element => {
        element.style.padding = width / 40 + "px";
        element.style.gridGap = width / 40 + "px";
    });

    elements = document.querySelectorAll('.summaryKarmaImg');
    elements.forEach(element => {
        element.style.width = width / 5 + "px";
    });

    elements = document.querySelectorAll('.summaryKarmaBox');
    elements.forEach(element => {
        element.style.gridTemplateColumns = width / 18 + "px" + " 1fr";
        element.style.gridTemplateRows = width / 30 +"px" + " 1fr " + width / 15 + "px";
    });

    elements = document.querySelectorAll('.summaryKarma');
    elements.forEach(element => {
        element.style.width = width / 5 + "px";
    });

    elements = document.querySelectorAll('.summaryRarity');
    elements.forEach(element => {
        element.style.height = width / 18 + "px";
        element.style.margin = "0px";
        element.style.marginTop = width / 400 + "px";
        element.style.marginLeft = width / 400 + "px";
    });

    elements = document.querySelectorAll('.summaryStars');
    elements.forEach(element => {
        element.style.width = width / 15 + "px";
        element.style.marginLeft = width / 10 + "px";
        element.style.marginBottom = width / 200 + "px";
    });

    elements = document.querySelectorAll('.summaryTitle');
    elements.forEach(element => {
        element.style.fontSize = width / 50 + "px";
        element.style.marginTop = width / 100 + "px";
    });

    elements = document.querySelectorAll('.starBox');
    elements.forEach(element => {
        element.style.marginBottom = "-" + width / 20 + "px";
        element.style.marginTop = width / 21 + "px";
        element.style.marginRight = "-" + width / 20 + "px";
    });

    elements = document.querySelectorAll('.LVtext');
    elements.forEach(element => {
        element.style.marginTop = "-" + width / 12 + "px";
        element.style.marginLeft = width / 5.7 + "px";
    });

    elements = document.querySelectorAll('.LV');
    elements.forEach(element => {
        element.style.fontSize = width / 70 + "px";
        element.style.marginTop = width / 18.5 + "px";
    });

    elements = document.querySelectorAll('.num');
    elements.forEach(element => {
        element.style.fontSize = width / 60 + "px";
        element.style.marginLeft = width / 300 + "px";
    });
}

// This is the results being displayed
function sizeResultsKarma(appWidth) {
    if (document.getElementById("karmaImgContainer")) {
        let karmaHeader = document.getElementById("karmaHeader");
        let karmaHeaderText = document.getElementById("karmaHeaderText");

        let karmaImgContainer = document.getElementById("karmaImgContainer");
        let karmaIMG = document.getElementById("karmaIMG");
        let karmaRarity = document.getElementById("karmaRarity");
        let starOverflow = document.getElementById("starOverflow");
        let starContainer = document.getElementById("starContainer");
        let nameContainer = document.getElementById("nameContainer");
        let starIMG = document.getElementById("starIMG");
        let shareContainer = document.getElementById("shareContainer");
        let shareIMG = document.getElementById("shareIMG");
        let shareText = document.getElementById("shareText");
        let karmaTitle = document.getElementById("karmaTitle");
        let skipContainer = document.getElementById("skipContainer");
        let skipText = document.getElementById("skipText");
        let skipSVGContainer = document.getElementById("skipSVGContainer");

        karmaHeader.style.paddingTop = appWidth / 8 + "px";

        karmaHeaderText.style.width = appWidth / 5.5 + "px";
        karmaHeaderText.style.fontSize = appWidth / 20 + "px";
        karmaHeaderText.style.padding = appWidth / 50 + "px";
        karmaHeaderText.style.paddingLeft = appWidth / 8 + "px";
        karmaHeaderText.style.paddingRight = appWidth / 8 + "px";
        karmaHeader.style.paddingLeft = ((appWidth / 2) - karmaHeaderText.offsetWidth / 2) + "px";
        karmaHeaderText.style.marginBottom = appWidth / 50 + "px";

        karmaImgContainer.style.width = appWidth * 1.2 + "px";
        karmaImgContainer.style.height = appWidth * 1.4 + "px";
        karmaImgContainer.style.marginLeft = "-" + appWidth / 20 + "px";
        karmaIMG.style.marginTop = "-" + appWidth / 30 + "px";

        karmaRarity.style.height = appWidth / 5 + "px";
        karmaRarity.style.marginTop = appWidth / 20 + "px";
        karmaRarity.style.marginLeft = appWidth / 50 + "px";

        nameContainer.style.fontSize = appWidth / 15 + "px";
        starIMG.style.width = appWidth / 5 + "px";

        starContainer.style.height = appWidth / 6.5 + "px";
        starContainer.style.marginLeft = appWidth / 5 + "px";
        starOverflow.style.marginTop = "-" + appWidth / 7 + "px";

        starContainer.style.marginTop = appWidth / 2.2 + "px";

        nameContainer.style.marginLeft = appWidth / 2 + "px";
        starIMG.style.marginLeft = appWidth / 2 + "px";

        shareContainer.style.height = appWidth / 8 + "px";
        shareContainer.style.width = appWidth / 8 + "px";
        shareContainer.style.marginLeft = appWidth / 40 + "px";
        shareContainer.style.marginTop = "-" + appWidth / 40 + "px";
        shareContainer.style.marginBottom = appWidth / 40 + "px";

        shareIMG.style.width = appWidth / 20 + "px";
        shareIMG.style.marginLeft = "-" + appWidth / 50 + "px";
        shareIMG.style.marginTop = "-" + appWidth / 15 + "px";

        shareText.style.fontSize = appWidth / 25 + "px";

        karmaTitle.style.fontSize = appWidth / 35 + "px";
        karmaTitle.style.height = appWidth / 20 + "px";
        karmaTitle.style.width = appWidth / 2 + "px";
        karmaTitle.style.marginTop = appWidth / 50 + "px";

        skipContainer.style.height = appWidth / 18 + "px";
        skipContainer.style.marginRight = appWidth / 100 + "px";
        skipContainer.style.marginTop = appWidth / 50 + "px";
        skipText.style.fontSize = appWidth / 25 + "px";
        skipText.style.marginRight = appWidth / 50 + "px";
        skipText.style.marginLeft = appWidth / 50 + "px";

        skipSVGContainer.style.width = appWidth / 35 + "px";
        skipSVGContainer.style.marginTop = appWidth / 100 + "px";
    }
}

// // Grid-placement
function placeGrids(appWidth) {
    // Top Row
    let topRow = document.getElementById("topRow");
    let TRC = appWidth / 8;
    TRC = "repeat(auto-fill, " + TRC + "px)";
    topRow.style.gridTemplateColumns = TRC;

    // Back Button
    let backButton = document.getElementById("backButton");
    backButton.style.width = Math.round(appWidth / 10) + "px";
    backButton.style.height = Math.round(appWidth / 10) + "px";
    backButton.style.marginTop = Math.round(appWidth / 75) + "px";
    backButton.style.marginLeft = Math.round(appWidth / 75) + "px";

    let backSVG = document.getElementById("backSVG");
    backSVG.style.width = Math.round(appWidth / 15) + "px";
    backSVG.style.marginLeft = Math.round(appWidth / 55) + "px";
    backSVG.style.marginTop = Math.round(appWidth / 80) + "px";

    // Stamina
    let stamina = document.getElementById("stamina");
    stamina.style.marginTop = Math.round(appWidth / 150) + "px";
    stamina.style.height = Math.round(appWidth / 25) + "px";
    stamina.style.fontSize = Math.round(appWidth / 35) + "px";

    let staminaIMG = document.getElementById("stamina-img");
    staminaIMG.style.width = Math.round(appWidth / 16) + "px";

    let staminaButton = document.getElementById("stamina-button");
    staminaButton.style.height = Math.round(appWidth / 28) + "px";
    staminaButton.style.width = Math.round(appWidth / 28) + "px";
    staminaButton.style.marginRight = Math.round(appWidth / 110) + "px";

    let staminaSVG = document.getElementById("staminaSVG");
    staminaSVG.style.width = Math.round(appWidth / 36) + "px";
    staminaSVG.style.marginLeft = "-" + Math.round(appWidth / 110) + "px";

    // Gold
    let gold = document.getElementById("gold");
    gold.style.marginTop = Math.round(appWidth / 150) + "px";
    gold.style.height = Math.round(appWidth / 25) + "px";
    gold.style.fontSize = Math.round(appWidth / 35) + "px";

    let goldIMG = document.getElementById("gold-img");
    goldIMG.style.width = Math.round(appWidth / 16) + "px";

    let goldButton = document.getElementById("gold-button");
    goldButton.style.height = Math.round(appWidth / 28) + "px";
    goldButton.style.width = Math.round(appWidth / 28) + "px";
    goldButton.style.marginRight = Math.round(appWidth / 110) + "px";

    let goldSVG = document.getElementById("goldSVG");
    goldSVG.style.width = Math.round(appWidth / 36) + "px";
    goldSVG.style.marginLeft = "-" + Math.round(appWidth / 110) + "px";

    // Gems
    let gems = document.getElementById("gems");
    gems.style.marginTop = Math.round(appWidth / 150) + "px";
    gems.style.height = Math.round(appWidth / 25) + "px";
    gems.style.fontSize = Math.round(appWidth / 35) + "px";

    let gemsIMG = document.getElementById("gems-img");
    gemsIMG.style.width = Math.round(appWidth / 16) + "px";

    let gemsButton = document.getElementById("gems-button");
    gemsButton.style.height = Math.round(appWidth / 28) + "px";
    gemsButton.style.width = Math.round(appWidth / 28) + "px";
    gemsButton.style.marginRight = Math.round(appWidth / 110) + "px";

    let gemsSVG = document.getElementById("gemsSVG");
    gemsSVG.style.width = Math.round(appWidth / 36) + "px";
    gemsSVG.style.marginLeft = "-" + Math.round(appWidth / 110) + "px";

    // 2nd row
    let secondRow = document.getElementById("2ndRow");
    secondRow.style.marginTop = "-" + Math.round(appWidth / 30) + "px";

    // Redeem
    let redeemButton = document.getElementById("redeem-button");
    redeemButton.style.fontSize = Math.round(appWidth / 25) + "px";
    redeemButton.style.width = Math.round(appWidth / 4.5) + "px";
    redeemButton.style.height = Math.round(appWidth / 15) + "px";

    let redeemIMG = document.getElementById("redeem-img");
    redeemIMG.style.width = Math.round(appWidth / 10) + "px";
    redeemIMG.style.marginLeft = "-" + Math.round(appWidth / 40) + "px";
    redeemIMG.style.marginRight = "-" + Math.round(appWidth / 100) + "px";

    // Drop Rate
    let dropButton = document.getElementById("drop-button");
    dropButton.style.fontSize = Math.round(appWidth / 25) + "px";
    dropButton.style.padding = Math.round(appWidth / 90) + "px";
    dropButton.style.marginTop = Math.round(appWidth / 50) + "px";

    // Banner placeholder
    let bannerPlaceholder = document.getElementById("banner-placeholder");
    bannerPlaceholder.style.width = Math.round(appWidth) + "px";
    bannerPlaceholder.style.height = Math.round(appWidth) + "px";

    // Third Row
    let thirdRow = document.getElementById("third-row");
    let ThirdRC = appWidth / 16;
    ThirdRC = "repeat(auto-fill, " + ThirdRC + "px)";
    thirdRow.style.gridTemplateColumns = ThirdRC;

    // Preview
    let previewBTN = document.getElementById("previewBTN");
    previewBTN.style.fontSize = Math.round(appWidth / 30) + "px";
    previewBTN.style.height = Math.round(appWidth / 9) + "px";
    previewBTN.style.width = Math.round(appWidth / 9) + "px";
    previewBTN.style.marginLeft = "-" + Math.round(appWidth / 100) + "px";

    // Own Limited
    let limitedContainer = document.getElementById("limitedContainer");
    limitedContainer.style.fontSize = Math.round(appWidth / 35) + "px";
    limitedContainer.style.height = Math.round(appWidth / 23) + "px";
    limitedContainer.style.marginTop = Math.round(appWidth / 18) + "px";
    limitedContainer.style.marginLeft = "-" + Math.round(appWidth / 20) + "px";

    let ownP = document.getElementById("ownP");
    ownP.style.marginTop = Math.round(appWidth / 200) + "px";
    ownP.style.marginLeft = Math.round(appWidth / 40) + "px";

    // Fouth Row
    let fourthRow = document.getElementById("fourthRow");
    let fourthRC = appWidth / 16;
    fourthRC = "repeat(auto-fill, " + fourthRC + "px)";
    fourthRow.style.gridTemplateColumns = fourthRC;

    // Galaxy Wish Coupon
    let gwcContainer = document.getElementById("gwcContainer");
    gwcContainer.style.fontSize = Math.round(appWidth / 49) + "px";
    gwcContainer.style.height = Math.round(appWidth / 23) + "px";
    gwcContainer.style.marginTop = Math.round(appWidth / 30) + "px";

    let gwctext = document.getElementById("gwctext");
    gwctext.style.marginTop = Math.round(appWidth / 100) + "px";

    let gwcIMG = document.getElementById("gwcIMG");
    gwcIMG.style.width = Math.round(appWidth / 8) + "px";
    gwcIMG.style.marginLeft = "-" + Math.round(appWidth / 28) + "px";

    let gwcButton = document.getElementById("gwc-button");
    gwcButton.style.height = Math.round(appWidth / 28) + "px";
    gwcButton.style.width = Math.round(appWidth / 28) + "px";
    gwcButton.style.marginRight = Math.round(appWidth / 110) + "px";
    gwcButton.style.marginTop = Math.round(appWidth / 30) + "px";

    let gwcSVG = document.getElementById("gwcSVG");
    gwcSVG.style.width = Math.round(appWidth / 36) + "px";
    gwcSVG.style.marginLeft = "-" + Math.round(appWidth / 110) + "px";

    // Row 5
    let fifthRow = document.getElementById("row5");
    let fifthRC = appWidth / 8;
    fifthRC = "repeat(auto-fill, " + fifthRC + "px)";
    fifthRow.style.gridTemplateColumns = fifthRC;


    // Free
    let freeTxt = document.getElementById("freeTxt");
    freeTxt.style.marginTop = "-" + Math.round(appWidth / 16) + "px";
    freeTxt.style.fontSize = Math.round(appWidth / 30) + "px";
    freeTxt.style.height = Math.round(appWidth / 9.6) + "px";

    // Row 6
    let SixthRow = document.getElementById("SixthRow");
    let SixthRC = appWidth / 16;
    SixthRC = "repeat(auto-fill, " + SixthRC + "px)";
    SixthRow.style.gridTemplateColumns = SixthRC;

    // Pull 1
    let pull1 = document.getElementById("pull1");
    pull1.style.fontSize = appWidth / 21 + "px";
    pull1.style.paddingLeft = appWidth / 10.5 + "px";
    pull1.style.paddingRight = appWidth / 10.5 + "px";
    pull1.style.paddingTop = Math.round(appWidth / 50) + "px";
    pull1.style.paddingBottom = Math.round(appWidth / 50) + "px";
    pull1.style.marginTop = "-" + Math.round(appWidth / 50) + "px";

    // Pull 10
    let pull10 = document.getElementById("pull10");
    pull10.style.fontSize = appWidth / 21 + "px";
    pull10.style.paddingLeft = appWidth / 12 + "px";
    pull10.style.paddingRight = appWidth / 12 + "px";
    pull10.style.paddingTop = Math.round(appWidth / 50) + "px";
    pull10.style.paddingBottom = Math.round(appWidth / 50) + "px";
    pull10.style.marginTop = "-" + Math.round(appWidth / 50) + "px";

    // SR Endured
    let SRendured = document.getElementById("SRendured");
    SRendured.style.width = appWidth / 5 + "px";
    SRendured.style.right = appWidth / 10 + "px";
    SRendured.style.bottom = appWidth / 10 + "px";

    // Pull 1 cost
    let cost1IMG = document.getElementById("cost1IMG");
    cost1IMG.style.width = appWidth / 13 + "px";

    let cost1Container = document.getElementById("cost1Container");
    cost1Container.style.fontSize = appWidth / 30 + "px";
    cost1Container.style.height = appWidth / 20 + "px";
    cost1Container.style.marginTop = appWidth / 50 + "px";

    let cost1p = document.getElementById("cost1p");
    cost1p.style.marginLeft = appWidth / 50 + "px";

    // Pull 10 cost
    let cost10IMG = document.getElementById("cost10IMG");
    cost10IMG.style.width = appWidth / 13 + "px";

    let cost10Container = document.getElementById("cost10Container");
    cost10Container.style.fontSize = appWidth / 30 + "px";
    cost10Container.style.height = appWidth / 20 + "px";
    cost10Container.style.marginTop = appWidth / 50 + "px";

    let cost10p = document.getElementById("cost10p");
    cost10p.style.marginLeft = appWidth / 50 + "px";

    // Last Row
    let lastRow = document.getElementById("purchase-limit-container");
    let lastRC = appWidth / 8;
    lastRC = "repeat(auto-fill, " + lastRC + "px)";
    lastRow.style.gridTemplateColumns = lastRC;

    // Purchase Limit
    let limitText = document.getElementById("limitText");
    limitText.style.fontSize = appWidth / 30 + "px";
    limitText.style.height = appWidth / 28 + "px";
    limitText.style.marginRight = appWidth / 70 + "px";
    limitText.style.marginTop = appWidth / 50 + "px";
}