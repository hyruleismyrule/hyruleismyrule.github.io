// Get karma list from standard.json
let standardSP = [];
let standardKingSSR = [];
let standardSSR = [];
let standardKingSR = [];
let standardSR = [];
let standardKingR = [];
let standardR = [];


const standardURL = 'standard.json';
fetch(standardURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        standardSP = jsonObject['standardSP'];
        standardKingSSR = jsonObject['standardKingSSR'];
        standardSSR = jsonObject['standardSSR'];
        standardKingSR = jsonObject['standardKingSR'];
        standardSR = jsonObject['standardSR'];
        standardKingR = jsonObject['standardKingR'];
        standardR = jsonObject['standardR'];
    })

// Standard Drop Rates
// SP and SSR 1%
// SR 10%
// R 89%
// Buying 10 ar a time guarentees 1 SR or above

// Declares the karmas and timesWished variables to be used globaly
let karmas = [];
let timesWished = 0;

// resources
let stamina = 150;
let gold = 100000;
let gems = 100000;
let galaxyWishCoupon = 500;
let purchasesLeftToday = 999999;
let ownLimited = 0;
// let freeCountdown = 0;

let cost10Container = document.getElementById("cost10");
let cost10IMGContainer = document.getElementById("cost10IMG");

let cost1Container = document.getElementById("cost1");
let cost1IMGContainer = document.getElementById("cost1IMG");

function addGems() {
    gems += 10000;
    updateCosts();
    updateResources();
}

function updateCosts() {
    if (galaxyWishCoupon > 0) {
        cost10Container.textContent = 10;
        cost10IMGContainer.setAttribute("src", "../assets/resources/galaxy-wish-coupon.png");
    
        cost1Container.textContent = 1;
        cost1IMGContainer.setAttribute("src", "../assets/resources/galaxy-wish-coupon.png");
    }
    else {
        cost10Container.textContent = 1800;
        cost10IMGContainer.setAttribute("src", "../assets/resources/gem.png");
        
        cost1Container.textContent = 200;
        cost1IMGContainer.setAttribute("src", "../assets/resources/gem.png");
    }
}

updateCosts();

function updatePurchaseLimit() {
    limitContainer.textContent = purchasesLeftToday;
    if (purchasesLeftToday == 0) {
        alert("You are out of purchases today, let me fix that for you!");
        purchasesLeftToday = 999999;
    }
}

function addCoupons() {
    if (gems >= 1800) {
        galaxyWishCoupon += 10;
        gems -= 1800;
    }
    else if (gems >= 200) {
        galaxyWishCoupon += 1;
        gems -= 200;
    }
    else {
        alert("You don't have enough gems! Let me get you some more!");
        gems += 10000;
    }
    updateCosts();
    updateResources();
}

// let freeContainer = document.getElementById("free");

// if (freeCountdown == 0) {
//     cost1Container.textContent = "Free";
//     document.getElementById("freeAfter").innerHTML = "<br>";
// }
// else {
//     freeContainer.textContent = freeCountdown;
// }

let ownLimitedContainer = document.getElementById("own-limited");
ownLimitedContainer.textContent = ownLimited + "/80";

let limitContainer = document.getElementById("limit");
limitContainer.textContent = purchasesLeftToday;

let staminaNumbContainer = document.getElementById("stamina-numb");
staminaNumbContainer.textContent = stamina + "/150";

let goldNumbContainer = document.getElementById("gold-numb");
goldNumbContainer.textContent = gold;

let gemNumbContainer = document.getElementById("gems-numb");
gemNumbContainer.textContent = gems;

let gwcNumbContainer = document.getElementById("gwcNumb");
gwcNumbContainer.textContent = galaxyWishCoupon;



// Random number generators

// Random decimal from 0 to 1
function randomDeci() {
    console.log(Math.random());
}

// Random number from 1 to 100 if called with
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function draw1() {
    let karmaRoll = getRandomInt(1, 101);

    let kingCheck = getRandomInt(1, 101);
    if (kingCheck > 99) {
        if (karmaRoll > 99) {
            let karmaArray = "KingSSR";
            karma = pickKarma(karmaArray);
        }
        else if (karmaRoll > 89) {
            let karmaArray = "KingSR";
            karma = pickKarma(karmaArray);
        }
        else {
            let karmaArray = "KingR";
            karma = pickKarma(karmaArray);
        }
    }
    else {
        if (karmaRoll > 99) {
            let karmaArray = "SP or SSR";
            karma = pickKarma(karmaArray);
        }
        else if (karmaRoll > 89) {
            let karmaArray = "SR";
            karma = pickKarma(karmaArray);
        }
        else {
            let karmaArray = "R";
            karma = pickKarma(karmaArray);
        }
    }
    return karma;
}

function updateResources() {
    gwcNumbContainer.textContent = galaxyWishCoupon;
    gemNumbContainer.textContent = gems;
}

function buy1() {
    if (galaxyWishCoupon > 0) {
        galaxyWishCoupon -= 1;
    }
    else if (gems < 200) {
        alert("You don't have enough gems! Let me get you some more!");
        gems += 10000;
    }
    else {
        gems -= 200;
    }
    updateResources();
    let timesPulled = 1;
    karmas = [];
    let karma = draw1()
    karmas.push(karma);
    console.log(karmas);
    wishAnimation(timesPulled, karmas);
    timesWished = timesWished + 1;
    updateCosts();
    purchasesLeftToday -= 1;
    updatePurchaseLimit();
}

function buy10() {
    if (galaxyWishCoupon >= 10) {
        galaxyWishCoupon -= 10;
    }
    else if ((10 - galaxyWishCoupon) * 180 <= gems) {
        galaxyWishCoupon = 0;
        gems -= (10 - galaxyWishCoupon) * 180;
    }
    // else if (gems < 1800) {
    else {
        alert("You don't have enough gems! Let me get you some more!");
        gems += 10000;
    }
    // else {
    //     gems -= 1800;
    // }
    updateResources()
    let timesPulled = 10;
    karmas = [];
    let gIndex = getRandomInt(0, 11);
    for (let i = 0; i < 10; i++) {
        if (i == gIndex) {
            karmas.push(guarenteedSRPlus());
        } else {
            karmas.push(draw1());
        }
    }
    console.log(karmas);
    wishAnimation(timesPulled, karmas);
    timesWished = timesWished + 10;
    updateCosts();
    purchasesLeftToday -= 10;
    updatePurchaseLimit();
}

function guarenteedSRPlus() {
    let karmaRoll = getRandomInt(1, 101);
    if (karmaRoll > 99) {
        let karmaArray = "SP or SSR";
        karma = pickKarma(karmaArray);
    }
    else {
        let karmaArray = "SR";
        karma = pickKarma(karmaArray);
    }
    return karma;
}

function pickKarma(karmaArray) {
    if (karmaArray == "KingSSR") {
        let index = getRandomInt(0, standardKingSSR.length);
        let karma = standardKingSSR[index];
        return karma;
    }
    else if (karmaArray == "KingSR") {
        let index = getRandomInt(0, standardKingSR.length);
        let karma = standardKingSR[index];
        return karma;
    }
    else if (karmaArray == "KingR") {
        let index = getRandomInt(0, standardKingR.length);
        let karma = standardKingR[index];
        return karma;
    }
    else if (karmaArray == "SP or SSR") {
        const standardSPandSSR = standardSP.concat(standardSSR);
        let index = getRandomInt(0, standardSPandSSR.length);
        let karma = standardSPandSSR[index];
        return karma;
    }
    else if (karmaArray == "SR") {
        let index = getRandomInt(0, standardSR.length);
        let karma = standardSR[index];
        return karma;
    }
    else {
        let index = getRandomInt(0, standardR.length);
        let karma = standardR[index];
        return karma;
    }
}

function skipVideo() {
    let videoContainer = document.getElementById("videoContainer");
    videoContainer.removeChild(videoContainer.firstChild);
}

function wishAnimation(timesPulled, karmas) {
    let appContainer = document.getElementById("app-container");

    let videoContainer = document.getElementById("videoContainer");
    let videoElement = document.createElement("video");
    videoElement.autoplay = true;
    videoElement.muted = true;

    let height = appContainer.offsetHeight;
    let width = appContainer.offsetWidth;

    videoElement.setAttribute("height", height);
    videoElement.setAttribute("width", width);

    videoContainer.appendChild(videoElement);

    let sourceElement = document.createElement("source");
    sourceElement.setAttribute("type", "video/mp4");
    videoElement.appendChild(sourceElement);

    if (timesPulled == 1) {
        sourceElement.setAttribute("src", "../assets/videos/hf-pull1.mp4");
    }
    else {
        sourceElement.setAttribute("src", "../assets/videos/hf-pull10.mp4");
    }

    videoElement.onended = function () {
        videoElement.remove();
    };

    displayResults(karmas);
}

function rarityAnimation(rarity, character) {
    let appContainer = document.getElementById("app-container");

    let videoContainer = document.getElementById("videoContainer");
    let videoElement = document.createElement("video");
    videoElement.autoplay = true;
    videoElement.muted = true;

    let height = appContainer.offsetHeight;
    let width = appContainer.offsetWidth;

    videoElement.setAttribute("height", height);
    videoElement.setAttribute("width", width);

    videoContainer.appendChild(videoElement);

    let sourceElement = document.createElement("source");
    sourceElement.setAttribute("type", "video/mp4");
    videoElement.appendChild(sourceElement);

    // ex. ssr-lucien
    sourceElement.setAttribute("src", "../assets/videos/" + rarity.toLowerCase() + "-" + character.toLowerCase() + ".mp4");

    videoElement.onended = function () {
        videoElement.remove();
    };

}

function displayResults(karmas) {
    displayResultsContainer();

    let displayedKarma = 0;
    displayKarma(karmas[displayedKarma], displayedKarma, karmas);
}

// Set up the results container
function displayResultsContainer() {
    let width = document.getElementById("app-container").offsetWidth;
    let height = document.getElementById("app-container").offsetHeight;

    let resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.setAttribute("height", height + "px");
    resultsContainer.setAttribute("width", width + "px");
    resultsContainer.style.backgroundImage = 'url("assets/hd-floral-background.png")';
}

// displays 1 karma
function displayKarma(karma, displayedKarma, karmas) {
    if (karma) {
        let rarity = karma.rarity;
        let character = karma.character;
        let title = karma.title;

        // I currently don't have the sp 
        // if (rarity == "SSR" || rarity == "SP") {
        if (rarity == "SSR") {
            rarityAnimation(rarity, character);
        }

        let stringKarmas = JSON.stringify(karmas);

        let resultsContainer = document.getElementById("resultsContainer");

        let karmaContainer = document.createElement("div");
        karmaContainer.setAttribute("class", "karma-container");
        karmaContainer.setAttribute("id", "karmaContainer");

        resultsContainer.appendChild(karmaContainer);


        // Results Header "You Got"
        let karmaHeader = document.createElement("div");
        karmaHeader.setAttribute("class", "karmaHeader");
        karmaHeader.setAttribute("id", "karmaHeader");
        karmaHeader.setAttribute("onclick", 'removeDisplayedKarma(' + stringKarmas + ', ' + displayedKarma + ')');

        let karmaHeaderText = document.createElement("div");
        karmaHeaderText.setAttribute("id", "karmaHeaderText");
        karmaHeaderText.textContent = "You got";
        karmaHeader.appendChild(karmaHeaderText);

        // Rarity Icon
        let rarityIconURL = "../assets/rarity/" + rarity + "-icon.png";

        let karmaRarityIMG = document.createElement("img");
        karmaRarityIMG.setAttribute("id", "karmaRarity");
        karmaRarityIMG.setAttribute("src", rarityIconURL);
        karmaRarityIMG.setAttribute("alt", rarity);
        karmaRarityIMG.setAttribute("class", "karma-rarity");
        karmaRarityIMG.setAttribute("onclick", 'removeDisplayedKarma(' + stringKarmas + ', ' + displayedKarma + ')');

        // Karma Image
        let karmaImgURL = getKarmaImgURL(karma);

        let karmaImgContainer = document.createElement("div");
        karmaImgContainer.setAttribute("id", "karmaImgContainer");
        karmaImgContainer.setAttribute("class", "karmaImgContainer");
        karmaImgContainer.setAttribute("onclick", 'removeDisplayedKarma(' + stringKarmas + ', ' + displayedKarma + ')');

        let karmaIMG = document.createElement("img");
        karmaIMG.setAttribute("src", karmaImgURL);
        karmaIMG.setAttribute("alt", karma[1] + ": " + karma[2]);
        karmaIMG.setAttribute("class", "karma-img");
        karmaIMG.setAttribute("id", "karmaIMG");
        karmaImgContainer.appendChild(karmaIMG);

        // Character
        let nameContainer = document.createElement("div");
        nameContainer.setAttribute("id", "nameContainer");
        nameContainer.textContent = character;
        nameContainer.setAttribute("onclick", 'removeDisplayedKarma(' + stringKarmas + ', ' + displayedKarma + ')');

        // Stars
        let starOverflow = document.createElement("div");
        starOverflow.setAttribute("class", "starOverflow");
        starOverflow.setAttribute("id", "starOverflow");
        starOverflow.setAttribute("onclick", 'removeDisplayedKarma(' + stringKarmas + ', ' + displayedKarma + ')');

        let starContainer = document.createElement("div");
        starContainer.appendChild(nameContainer);
        starContainer.setAttribute("class", "star-container");
        starContainer.setAttribute("id", "starContainer");

        let starIMG = document.createElement("img");
        starIMG.setAttribute("src", "../assets/resources/stars.png");
        starIMG.setAttribute("alt", "1star");
        starIMG.setAttribute("id", "starIMG");
        starContainer.appendChild(starIMG);
        starIMG.setAttribute("class", "star-img");
        starContainer.setAttribute("onclick", 'removeDisplayedKarma(' + stringKarmas + ', ' + displayedKarma + ')');

        // Title
        let karmaTitle = document.createElement("div");
        karmaTitle.setAttribute("class", "karmaTitle");
        karmaTitle.setAttribute("id", "karmaTitle");
        karmaTitle.textContent = title;
        karmaTitle.setAttribute("onclick", 'removeDisplayedKarma(' + stringKarmas + ', ' + displayedKarma + ')');

        // Share
        let shareContainer = document.createElement("button");
        shareContainer.setAttribute("class", "shareContainer");
        shareContainer.setAttribute("id", "shareContainer");

        let shareIMG = document.createElement("img");
        shareIMG.setAttribute("src", "../assets/resources/share-stars.png");
        shareIMG.setAttribute("id", "shareIMG");
        shareIMG.setAttribute("alt", "stars");
        shareContainer.appendChild(shareIMG);

        let shareText = document.createElement("div");
        shareText.setAttribute("id", "shareText");
        shareText.textContent = "Share";
        shareContainer.appendChild(shareText);
        // shareContainer.setAttribute("onclick", "shareKarma()");

        // Skip
        let skipContainer = document.createElement("button");
        skipContainer.setAttribute("class", "skipContainer");
        skipContainer.setAttribute("id", "skipContainer");
        // skipContainer.setAttribute("onclick", "removeDisplayedKarma()");
        skipContainer.setAttribute("onclick", 'displayThumbnails(' + stringKarmas + ')');

        let skipText = document.createElement("div");
        skipText.setAttribute("id", "skipText");
        skipText.textContent = "Skip";

        let skipSVGContainer = document.createElement("div");
        skipSVGContainer.setAttribute("id", "skipSVGContainer");
        let skipSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M52.51 440.6l171.5-142.9V214.3L52.51 71.41C31.88 54.28 0 68.66 0 96.03v319.9C0 443.3 31.88 457.7 52.51 440.6zM308.5 440.6l192-159.1c15.25-12.87 15.25-36.37 0-49.24l-192-159.1c-20.63-17.12-52.51-2.749-52.51 24.62v319.9C256 443.3 287.9 457.7 308.5 440.6z"/></svg>';
        skipSVGContainer.innerHTML = skipSVG;

        skipContainer.appendChild(skipText);
        skipContainer.appendChild(skipSVGContainer);

        let bottomRowKarma = document.createElement("div");
        bottomRowKarma.setAttribute("class", "bottomRowKarma");
        bottomRowKarma.appendChild(shareContainer);
        bottomRowKarma.appendChild(karmaTitle);
        bottomRowKarma.appendChild(skipContainer);

        resultsContainer.appendChild(karmaHeader);
        karmaContainer.appendChild(karmaRarityIMG);
        karmaContainer.appendChild(karmaImgContainer);
        starOverflow.appendChild(starContainer);
        karmaContainer.appendChild(starOverflow);
        resultsContainer.appendChild(karmaContainer);
        resultsContainer.appendChild(bottomRowKarma);
    }

    let appwidth = document.getElementById("app-container").offsetWidth;
    sizeResultsKarma(appwidth);

}

function getKarmaImgURL(karma) {
    character = karma.character;
    title = karma.title;
    character = character.toLowerCase();
    title = title.replace(/\s+/g, '-').toLowerCase();
    let karmaImgURL = "../assets/karma-cg/" + character + "-" + title + ".png";
    return karmaImgURL;
}

function removeDisplayedKarma(karmas, displayedKarma) {
    let resultsContainer = document.getElementById("resultsContainer");
    if (karmas.length == 1) {
        if (displayedKarma) {
            if (displayedKarma.length == 1) {
                displayThumbnails(karmas);
                resultsContainer.setAttribute("onclick", "backHome()");
            }
        }
           displayKarma(karmas[displayedKarma], displayedKarma, karmas);
    }
    else {
        while (resultsContainer.firstChild) {
            resultsContainer.removeChild(resultsContainer.firstChild);
        }
        if (displayedKarma < 10) {
            displayedKarma += 1;
            displayKarma(karmas[displayedKarma], displayedKarma, karmas);
        }
        else {
            displayThumbnails(karmas);
            resultsContainer.setAttribute("onclick", "backHome()");
        }
    }

    // if (karmas) {
    //     while (resultsContainer.firstChild) {
    //         resultsContainer.removeChild(resultsContainer.firstChild);
    //     }
    //     if (displayedKarma < 10) {
    //         displayedKarma += 1;
    //         displayKarma(karmas[displayedKarma], displayedKarma, karmas);
    //     }
    //     else {
    //         displayThumbnails(karmas);
    //         resultsContainer.setAttribute("onclick", "backHome()");
    //     }
    //     // if (!karmas[displayedKarma]) {
    //     //     displayThumbnails(karmas);
    //     //     resultsContainer.setAttribute("onclick", "backHome()");
    //     // }
    // }
}

function backHome() {
    let resultsContainer = document.getElementById("resultsContainer");
    while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.firstChild);
    }

    resultsContainer.style.height = null;
    resultsContainer.style.width = null;
    resultsContainer.setAttribute("onclick", null);

}

function displayThumbnails(karmas) {
    let resultsContainer = document.getElementById("resultsContainer");
    while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.firstChild);
    }

    // resultsContainer.setAttribute("onclick", "backHome()");


    let karmaHeader = document.createElement("div");
    karmaHeader.setAttribute("id", "karmaHeader");
    // karmaHeader.setAttribute("class", "karmaHeader level");
    karmaHeader.setAttribute("class", "level");
    resultsContainer.appendChild(karmaHeader);
    // karmaHeader.style.width = "200px";

    let karmaHeaderText = document.createElement("div");
    karmaHeaderText.setAttribute("id", "karmaHeaderText");
    karmaHeaderText.textContent = "You Got";
    karmaHeaderText.style.width = "150px";
    karmaHeader.appendChild(karmaHeaderText);
    // karmaHeader.style.width = "50%";

    let summaryBox = document.createElement("div");
    summaryBox.setAttribute("id", "summaryBox");
    summaryBox.setAttribute("class", "summaryBox");
    resultsContainer.appendChild(summaryBox);
    resultsContainer.style.height = "100%";

    for (let i = 0; i < karmas.length; i++) {
        let rarity = karmas[i].rarity;
        let character = karmas[i].character;
        let title = karmas[i].title;
        let stat = karmas[i].stat;

        let summaryKarma = document.createElement("div");
        summaryKarma.setAttribute("class", "summaryKarma");
        summaryBox.appendChild(summaryKarma);

        let summaryKarmaBox = document.createElement("div");
        summaryKarmaBox.setAttribute("class", "summaryKarmaBox " + stat.toLowerCase());
        // summaryKarmaBox.setAttribute("class", karmas[i].stat.toLowerCase());
        summaryKarma.appendChild(summaryKarmaBox);

        let summaryRarity = document.createElement("img");
        summaryRarity.setAttribute("class", "summaryRarity");
        let rarityURL = "../assets/rarity/" + rarity + "-icon.png";
        summaryRarity.setAttribute("src", rarityURL);
        summaryRarity.setAttribute("alt", rarity);
        summaryKarmaBox.appendChild(summaryRarity);

        let summaryKarmaImg = document.createElement("img");
        summaryKarmaImg.setAttribute("class", "summaryKarmaImg");
        let karmaURL = "../assets/karma-tb/" + character.toLowerCase() + "-" + title.replace(/\s+/g, '-').toLowerCase() + ".png";
        summaryKarmaImg.setAttribute("src", karmaURL);
        summaryKarmaImg.setAttribute("alt", character + "-" + title);
        summaryKarmaBox.appendChild(summaryKarmaImg);

        let starBox = document.createElement("div");
        starBox.setAttribute("class", "starBox");
        starBox.setAttribute("class", "starBox " + stat.toLowerCase());
        summaryKarmaBox.appendChild(starBox);

        let summaryStars = document.createElement("img");
        summaryStars.setAttribute("class", "summaryStars");
        summaryStars.setAttribute("src", "../assets/resources/stars.png");
        summaryStars.setAttribute("alt", "1star");
        starBox.appendChild(summaryStars);

        let LVtext = document.createElement("div");
        LVtext.setAttribute("class", "LVtext");
        starBox.appendChild(LVtext);

        let LV = document.createElement("div");
        LV.setAttribute("class", "LV");
        LV.textContent = "LV";
        LVtext.appendChild(LV);

        let num = document.createElement("div");
        num.setAttribute("class", "num");
        num.textContent = "1";
        LVtext.appendChild(num);

        let summaryTitle = document.createElement("div");
        summaryTitle.setAttribute("class", "summaryTitle");
        summaryTitle.textContent = character + ": " + title;
        summaryKarma.appendChild(summaryTitle);

        summaryBox.appendChild(summaryKarma);
    }

    responsiveAppSize();
    let stringKarmas = JSON.stringify(karmas);
    resultsContainer.setAttribute("onclick", "removeDisplayedKarma(" + stringKarmas + ")");
}

function removeSummaryResults() {
    let resultsContainer = document.getElementById("resultsContainer");

    while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.firstChild);
    }
    resultsContainer.removeAttribute("onclick");
}


responsiveAppSize();
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

        // if (document.getElementsByClassName("summaryKarma")) {
        //     let summaryKarma = document.getElementsByClassName("summaryKarma");
        //     summaryKarma.style.width = appWidth / 6;
        // }
    }
}



// Symmary Karma
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
        // element.style.margin = "0px";
        element.style.marginBottom = "-" + width / 20 + "px";
        element.style.marginTop = width / 21 + "px";
        // element.style.marginTop = "0px";
        element.style.marginRight = "-" + width / 20 + "px";
    });

    elements = document.querySelectorAll('.LVtext');
    elements.forEach(element => {
        // element.style.margin = "0px";
        element.style.marginTop = "-" + width / 12 + "px";
        element.style.marginLeft = width / 5.7 + "px";
    });

    elements = document.querySelectorAll('.LV');
    elements.forEach(element => {
        // element.style.margin = "0px";
        element.style.fontSize = width / 70 + "px";
        element.style.marginTop = width / 18.5 + "px";
    });

    elements = document.querySelectorAll('.num');
    elements.forEach(element => {
        // element.style.margin = "0px";
        element.style.fontSize = width / 60 + "px";
        element.style.marginLeft = width / 300 + "px";
    });
}