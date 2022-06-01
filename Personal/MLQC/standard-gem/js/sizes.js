// Window sizes

responsiveAppSize()
window.addEventListener('resize', responsiveAppSize);

function responsiveAppSize() {
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
            appWidth =appHeight / 1.77;

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
    // bannerPlaceholder.style.backgroundColor = "black";
    bannerPlaceholder.style.width = Math.round(appWidth) + "px";
    bannerPlaceholder.style.height = Math.round(appWidth) + "px";

    // Third Row
    let thirdRow = document.getElementById("third-row");
    let ThirdRC = appWidth / 16;
    ThirdRC = "repeat(auto-fill, " + ThirdRC + "px)";
    thirdRow.style.gridTemplateColumns = ThirdRC;
    // thirdRow.style.gridTemplateRows = + Math.round(appWidth / 50) + "px" + Math.round(appWidth / 50) + "px";

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
    gwcContainer.style.fontSize = fontSize = Math.round(appWidth / 49) + "px";
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


// This is the results being displayed

function sizeResultsKarma(appWidth) {
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
    
    karmaHeaderText.style.width = appWidth / 6 + "px";
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
    
    karmaRarity.style.width = appWidth / 5 + "px";
    karmaRarity.style.marginTop = appWidth / 20 + "px";
    karmaRarity.style.marginLeft= appWidth / 50 + "px";

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


// function displayMultipleKarma(karma, height, width, karmaImgURL, karmas, karmaImgURLS) {
//     let resultsContainer = document.getElementById("resultsContainer");
//     resultsContainer.setAttribute("height", height + "px");
//     resultsContainer.setAttribute("width", width + "px");
//     resultsContainer.style.backgroundImage = 'url("assets/hd-floral-background.png")';

//     let karmaContainer = document.createElement("div");
//     karmaContainer.setAttribute("class", "karma-container");
//     karmaContainer.setAttribute("id", "karmaContainer");

    
//         let karmaHeader = document.createElement("div");
//         karmaHeader.setAttribute("class", "karmaHeader");
//         karmaHeader.setAttribute("id", "karmaHeader");
//         karmaHeader.setAttribute("onclick", "nextDisplayKarma()");
//         // karmaHeader.textContent = "You got";

//         let karmaHeaderText = document.createElement("div");
//         karmaHeaderText.setAttribute("id", "karmaHeaderText");
//         karmaHeaderText.textContent = "You got";
//         karmaHeader.appendChild(karmaHeaderText);
    
//         let karmaRarites = findKarmaRarity(karma);
//         let baseRarityIMGSRC = "assets/rarity/"
//         let fullKarmaRaritySRC = baseRarityIMGSRC + karmaRarites[i] + "-icon.png";

//         let karmaRarity = document.createElement("img");
//         karmaRarity.setAttribute("id", "karmaRarity");
//         karmaRarity.setAttribute("src", fullKarmaRaritySRC);
//         karmaRarity.setAttribute("alt", karmaRarites[i]);
//         karmaRarity.setAttribute("class", "karma-rarity");
//         // karmaRarity.setAttribute("onclick", "quickDisplayKarma()");

//         let karmaImgContainer = document.createElement("div");
//         karmaImgContainer.setAttribute("id", "karmaImgContainer");
//         karmaImgContainer.setAttribute("class", "karmaImgContainer");
//         // karmaImgContainer.setAttribute("onclick", "quickDisplayKarma()");
    
//         let karmaIMG = document.createElement("img");
//         karmaIMG.setAttribute("src", karmaImgURL[i]);
//         karmaIMG.setAttribute("alt", karma[i]);
//         karmaIMG.setAttribute("class", "karma-img");
//         karmaIMG.setAttribute("id", "karmaIMG");
//         karmaImgContainer.appendChild(karmaIMG);
   
//         let karmaCharacters = findKarmaCharacter(karma);
//         let nameContainer = document.createElement("div");
//         nameContainer.setAttribute("id", "nameContainer");
//         nameContainer.textContent = karmaCharacters[i];
//         // nameContainer.setAttribute("onclick", "quickDisplayKarma()");

//         // rotateKarma();
//         karmaRarity.setAttribute("onclick", "nextDisplayKarma()");
//         karmaImgContainer.setAttribute("onclick", "nextDisplayKarma()");
//         nameContainer.setAttribute("onclick", "nextDisplayKarma()");


//         let starOverflow = document.createElement("div");
//         starOverflow.setAttribute("class", "starOverflow");
//         starOverflow.setAttribute("id", "starOverflow");
//         starOverflow.setAttribute("onclick", "nextDisplayKarma()");
     
//         let starContainer = document.createElement("div");
//         starContainer.appendChild(nameContainer);
//         starContainer.setAttribute("class", "star-container");
//         starContainer.setAttribute("id", "starContainer");

//         let starIMG = document.createElement("img");
//         starIMG.setAttribute("src", "assets/stars.png");
//         starIMG.setAttribute("alt", "1star");
//         starIMG.setAttribute("id", "starIMG");
//         starContainer.appendChild(starIMG);
//         starContainer.setAttribute("onclick", "nextDisplayKarma()");
//         starIMG.setAttribute("class", "star-img");

//         let karmaTitle =  document.createElement("div");
//         karmaTitle.setAttribute("class", "karmaTitle");
//         karmaTitle.setAttribute("id", "karmaTitle");
//         karmaTitle.textContent = karma[i];
//         karmaTitle.setAttribute("onclick", "nextDisplayKarma()");

//         let shareContainer = document.createElement("button");
//         shareContainer.setAttribute("class", "shareContainer");
//         shareContainer.setAttribute("id", "shareContainer");
//         let shareIMG = document.createElement("img");
//         shareIMG.setAttribute("src", "assets/share-stars.png");
//         shareIMG.setAttribute("id", "shareIMG");
//         shareIMG.setAttribute("alt", "stars");
//         shareContainer.appendChild(shareIMG);

//         let shareText = document.createElement("div");
//         shareText.setAttribute("id", "shareText");
//         shareText.textContent = "Share";
//         shareContainer.appendChild(shareText);

//         let skipContainer = document.createElement("button");
//         skipContainer.setAttribute("class", "skipContainer");
//         skipContainer.setAttribute("id", "skipContainer");
//         skipContainer.setAttribute("onclick", "nextDisplayKarma()");

//         let skipText = document.createElement("div");
//         skipText.setAttribute("id", "skipText");
//         skipText.textContent = "Skip";

//         let skipSVGContainer = document.createElement("div");
//         skipSVGContainer.setAttribute("id", "skipSVGContainer");
//         let skipSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M52.51 440.6l171.5-142.9V214.3L52.51 71.41C31.88 54.28 0 68.66 0 96.03v319.9C0 443.3 31.88 457.7 52.51 440.6zM308.5 440.6l192-159.1c15.25-12.87 15.25-36.37 0-49.24l-192-159.1c-20.63-17.12-52.51-2.749-52.51 24.62v319.9C256 443.3 287.9 457.7 308.5 440.6z"/></svg>';
//         skipSVGContainer.innerHTML = skipSVG;

//         skipContainer.appendChild(skipText);
//         skipContainer.appendChild(skipSVGContainer);

//         let bottomRowKarma = document.createElement("div");
//         bottomRowKarma.setAttribute("class", "bottomRowKarma");
//         bottomRowKarma.appendChild(shareContainer);
//         bottomRowKarma.appendChild(karmaTitle);
//         bottomRowKarma.appendChild(skipContainer);
    
//         resultsContainer.appendChild(karmaHeader);
//         karmaContainer.appendChild(karmaRarity);
//         karmaContainer.appendChild(karmaImgContainer);
//         starOverflow.appendChild(starContainer);
//         karmaContainer.appendChild(starOverflow);
//         resultsContainer.appendChild(karmaContainer);
//         resultsContainer.appendChild(bottomRowKarma);

//         // resultsContainer.style.rotate(40);
    

//     let appwidth = document.getElementById("app-container").offsetWidth;
//     sizeResultsKarma(appwidth);
    
// }

// function displayKarma(karmas, height, width, karmaImgURLS) {
//     // // Testing Karma
//     // karmas = ["Gavin: Dream Traveler"];
//     // karmaImgURLS = ["assets/standard-gem-karma-cg/gavin-dream-traveler.png"];


//     let resultsContainer = document.getElementById("resultsContainer");
//     resultsContainer.setAttribute("height", height + "px");
//     resultsContainer.setAttribute("width", width + "px");
//     resultsContainer.style.backgroundImage = 'url("assets/hd-floral-background.png")';

//     let karmaContainer = document.createElement("div");
//     karmaContainer.setAttribute("class", "karma-container");
//     karmaContainer.setAttribute("id", "karmaContainer");

//     for (let i = 0; i < karmas.length; i++) {
//         let karmaHeader = document.createElement("div");
//         karmaHeader.setAttribute("class", "karmaHeader");
//         karmaHeader.setAttribute("id", "karmaHeader");
//         karmaHeader.setAttribute("onclick", "removeDisplayKarma(i)");
//         // karmaHeader.textContent = "You got";

//         let karmaHeaderText = document.createElement("div");
//         karmaHeaderText.setAttribute("id", "karmaHeaderText");
//         karmaHeaderText.textContent = "You got";
//         karmaHeader.appendChild(karmaHeaderText);
    
//         let karmaRarites = findKarmaRarity(karmas);
//         let baseRarityIMGSRC = "assets/rarity/"
//         let fullKarmaRaritySRC = baseRarityIMGSRC + karmaRarites[i] + "-icon.png";

//         let karmaRarity = document.createElement("img");
//         karmaRarity.setAttribute("id", "karmaRarity");
//         karmaRarity.setAttribute("src", fullKarmaRaritySRC);
//         karmaRarity.setAttribute("alt", karmaRarites[i]);
//         karmaRarity.setAttribute("class", "karma-rarity");
//         // karmaRarity.setAttribute("onclick", "quickDisplayKarma()");

//         let karmaImgContainer = document.createElement("div");
//         karmaImgContainer.setAttribute("id", "karmaImgContainer");
//         karmaImgContainer.setAttribute("class", "karmaImgContainer");
//         // karmaImgContainer.setAttribute("onclick", "quickDisplayKarma()");
    
//         let karmaIMG = document.createElement("img");
//         karmaIMG.setAttribute("src", karmaImgURLS[i]);
//         karmaIMG.setAttribute("alt", karmas[i]);
//         karmaIMG.setAttribute("class", "karma-img");
//         karmaIMG.setAttribute("id", "karmaIMG");
//         karmaImgContainer.appendChild(karmaIMG);
   
//         let karmaCharacters = findKarmaCharacter(karmas);
//         let nameContainer = document.createElement("div");
//         nameContainer.setAttribute("id", "nameContainer");
//         nameContainer.textContent = karmaCharacters[i];
//         // nameContainer.setAttribute("onclick", "quickDisplayKarma()");

//         // rotateKarma();
//         karmaRarity.setAttribute("onclick", "removeDisplayKarma(i)");
//         karmaImgContainer.setAttribute("onclick", "removeDisplayKarma(i)");
//         nameContainer.setAttribute("onclick", "removeDisplayKarma(i)");


//         let starOverflow = document.createElement("div");
//         starOverflow.setAttribute("class", "starOverflow");
//         starOverflow.setAttribute("id", "starOverflow");
//         starOverflow.setAttribute("onclick", "removeDisplayKarma(i)");
     
//         let starContainer = document.createElement("div");
//         starContainer.appendChild(nameContainer);
//         starContainer.setAttribute("class", "star-container");
//         starContainer.setAttribute("id", "starContainer");

//         let starIMG = document.createElement("img");
//         starIMG.setAttribute("src", "assets/stars.png");
//         starIMG.setAttribute("alt", "1star");
//         starIMG.setAttribute("id", "starIMG");
//         starContainer.appendChild(starIMG);
//         starContainer.setAttribute("onclick", "removeDisplayKarma(i)");
//         starIMG.setAttribute("class", "star-img");

//         let karmaTitle =  document.createElement("div");
//         karmaTitle.setAttribute("class", "karmaTitle");
//         karmaTitle.setAttribute("id", "karmaTitle");
//         karmaTitle.textContent = karmas[i];
//         karmaTitle.setAttribute("onclick", "removeDisplayKarma(i)");

//         let shareContainer = document.createElement("button");
//         shareContainer.setAttribute("class", "shareContainer");
//         shareContainer.setAttribute("id", "shareContainer");
//         let shareIMG = document.createElement("img");
//         shareIMG.setAttribute("src", "assets/share-stars.png");
//         shareIMG.setAttribute("id", "shareIMG");
//         shareIMG.setAttribute("alt", "stars");
//         shareContainer.appendChild(shareIMG);

//         let shareText = document.createElement("div");
//         shareText.setAttribute("id", "shareText");
//         shareText.textContent = "Share";
//         shareContainer.appendChild(shareText);

//         let skipContainer = document.createElement("button");
//         skipContainer.setAttribute("class", "skipContainer");
//         skipContainer.setAttribute("id", "skipContainer");
//         skipContainer.setAttribute("onclick", "removeDisplayKarma(i)");

//         let skipText = document.createElement("div");
//         skipText.setAttribute("id", "skipText");
//         skipText.textContent = "Skip";

//         let skipSVGContainer = document.createElement("div");
//         skipSVGContainer.setAttribute("id", "skipSVGContainer");
//         let skipSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M52.51 440.6l171.5-142.9V214.3L52.51 71.41C31.88 54.28 0 68.66 0 96.03v319.9C0 443.3 31.88 457.7 52.51 440.6zM308.5 440.6l192-159.1c15.25-12.87 15.25-36.37 0-49.24l-192-159.1c-20.63-17.12-52.51-2.749-52.51 24.62v319.9C256 443.3 287.9 457.7 308.5 440.6z"/></svg>';
//         skipSVGContainer.innerHTML = skipSVG;

//         skipContainer.appendChild(skipText);
//         skipContainer.appendChild(skipSVGContainer);

//         let bottomRowKarma = document.createElement("div");
//         bottomRowKarma.setAttribute("class", "bottomRowKarma");
//         bottomRowKarma.appendChild(shareContainer);
//         bottomRowKarma.appendChild(karmaTitle);
//         bottomRowKarma.appendChild(skipContainer);
    
//         resultsContainer.appendChild(karmaHeader);
//         karmaContainer.appendChild(karmaRarity);
//         karmaContainer.appendChild(karmaImgContainer);
//         starOverflow.appendChild(starContainer);
//         karmaContainer.appendChild(starOverflow);
//         resultsContainer.appendChild(karmaContainer);
//         resultsContainer.appendChild(bottomRowKarma);

//         // resultsContainer.style.rotate(40);
//     }

//     let appwidth = document.getElementById("app-container").offsetWidth;
//     sizeResultsKarma(appwidth);
// }