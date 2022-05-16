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
        appHeight = 1.8 * appWidth;

        appDiv.style.width = appWidth + "px";
        appDiv.style.height = appHeight + "px";

        if (appHeight > windowHeight) {
            // calculate by height
            appHeight = windowHeight;
            appWidth =appHeight / 1.8;

            appDiv.style.width = appWidth + "px";
            appDiv.style.height = appHeight + "px";
        }
    } else {
        // Calculate by height (desktop)
        appHeight = windowHeight;
        appWidth = appHeight / 1.8;

        appDiv.style.width = appWidth + "px";
        appDiv.style.height = appHeight + "px";
    }
    placeGrids(appWidth);
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


// Standard Karma
let standardSP = ["Gavin: Dream Traveler", "Kiro: Gorgeous Lights", "Lucien: Law of Gravity", "Victor: Only Tonight"];

let standardKingSSR = ["Kiro: Visage", "Gavin: Hot-Blooded", "Lucien: Memory Lapse", "Victor: Loving Stare"];
let standardSSR = ["Gavin: Unforgettable Time", "Gavin: Summer Loving", "Gavin: Seize", "Gavin: Starstruck", "Kiro: No Man's Land", "Kiro: Spring Sonata", "Kiro: Whisk You Away", "Kiro: Starry Sky", "Lucien: Temptation", "Lucien: Autumn Whisper", "Lucien: Drowning in Love", "Lucien: Sound of Silence", "Victor: Music of the Night", "Victor: Winter Infatuation", "Victor: Sentimental Attachment", "Victor: Marauder"];

let standardKingSR = ["Kiro: Found You", "Gavin: Late Autumn", "Lucien: Deeper Than Ocean", "Victor: Tender Moment"];
let standardSR = ["Gavin: You Are Mine", "Gavin: Sincere Instruction", "Gavin: Childlike", "Gavin: Fierce Battle", "Gavin: Source of Strength", "Kiro: Together with You", "Kiro: Together with You", "Kiro: Sweet Dreams", "Kiro: Snowfall", "Kiro: Lingering Glance", "Kiro: Albatross", "Lucien: Midnight Beacon", "Lucien: Tender Mood", "Lucien: Capture the Moment", "Lucien: Arm-in-Arm", "Lucien: Fireflies", "Victor: Our Own World", "Victor: Soft Encouragement", "Victor: Making a Move", "Victor: Late Night Thoughts", "Victor: Rainfall Rendezvous"];

let standardKingR = ["Kiro: Flustered", "Gavin: Cold Shower", "Lucien: Cherish the Memory", "Victor: At Leisure"];
let standardR = ["Gavin: Upwind", "Gavin: Rock and a Hard Place", "Gavin: Investigation", "Gavin: Whetstone", "Gavin: Deduction", "Gavin: Bullseye", "Gavin: Warming Up", "Kiro: Your Existence", "Kiro: Masterpiece", "Kiro: Loving Mood", "Kiro: Source of Joy", "Kiro: Perfect Figure", "Kiro: Custom Made", "Kiro: Singing for You", "Lucien: Detailed Narration", "Lucien: Destined", "Lucien: Support", "Lucien: Archive", "Lucien: Hard Choice", "Lucien: Read You Like a Book", "Lucien: Indelible Taste", "Victor: Self-Entertaining", "Victor: Unbridled Passion", "Victor: Taste", "Victor: Reluctance", "Victor: Time Control", "Victor: Special Assignment", "Victor: Heartstring"];

// Standard Drop Rates
// SP and SSR 1%
// SR 10%
// R 89%
// Buying 10 ar a time guarentees 1 SR or above

let karmas = [];
let timesWished = 0;

// Random decimal from 0 to 1
function randomDeci() {
    console.log(Math.random());
}

// Random number from 1 to 100 if called with
// console.log(getRandomInt(1, 101));
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function buy1() {
    let timesPulled = 1;
    karmas = [];
    let rarity = checkRarity();
    let king = kingCheck(rarity);
    let karma = getKarmaName(rarity, king);
    while (!karma) {
        karma = getKarmaName(rarity, king);
    }
    karmas.push(karma);
    console.log(karmas);
    timesWished = timesWished + 1;
    wishAnimation(timesPulled, karmas);
    // document.getElementById("redeemNum").textContent = timesWished;
}

function pull1() {
    let rarity = checkRarity();
    let king = kingCheck(rarity);
    let karma = getKarmaName(rarity, king);
    while (!karma) {
        karma = getKarmaName(rarity, king);
    }
    return karma;
}

function guarenteedSRPlus() {
    let rarity = checkRarityGuarenteed();
    let king = kingCheck(rarity);
    let karma = getKarmaName(rarity, king);
    while (!karma) {
        karma = getKarmaName(rarity, king);
    }
    return karma;
}

function buy10() {
    let timesPulled = 10;
    karmas = [];
    let gIndex = getRandomInt(0, 11);
    for (let i = 0; i < 10; i++) {
        if (i == gIndex) {
            karmas.push(guarenteedSRPlus());
        } else {
            karmas.push(pull1());
        }
    }
    console.log(karmas);
    timesWished = timesWished + 10;
    wishAnimation(timesPulled, karmas);
    // document.getElementById("redeemNum").textContent = timesWished;
}

function getKarmaName(rarity, king) {
    let karmaArray = "";
    let arrayNum = 0;
    let maxArray = 0;
    if (rarity == "SP") {
        karmaArray = standardSP;
    } else if (king == true) {
        if (rarity == "SSR") {
            karmaArray = standardKingSSR;
        } else if (rarity == "SR") {
            karmaArray = standardKingSR;
        } else {
            karmaArray = standardKingR;
        }
    } else {
        if (rarity == "SSR") {
            karmaArray = standardSSR;
        } else if (rarity == "SR") {
            karmaArray = standardSR;
        } else {
            karmaArray = standardR;
        }
    }

    maxArray = karmaArray.length + 1;
    arrayNum = getIndex(maxArray);

    return karmaArray[arrayNum];
}

function getIndex(max) {
    arrayNum = getRandomInt(0, max);
    return arrayNum;
}

function checkRarity() {
    let check = getRandomInt(1, 101);
    if (check == 100) {
        // if (check >= 90) {
        return spCheck();
    } else if (check >= 90) {
        // else if (check >= 80) {
        return "SR";
    } else {
        return "R";
    }
}

function checkRarityGuarenteed() {
    let check = getRandomInt(1, 101);
    if (check == 100) {
        // if (check >= 90) {
        return spCheck();
    } else {
        return "SR";
    }
}

function kingCheck(rarity) {
    if (rarity != "SP") {
        let check = getRandomInt(1, 101);
        if (check == 100) {
            return true;
        }
    }
}

function spCheck() {
    let check = getRandomInt(0, 21);
    if (check >= 16) {
        return "SP"
    } else {
        return "SSR"
    }
}

function wishAnimation(timesPulled, karmas) {
    let appContainer = document.getElementById("app-container");

    let videoContainer = document.getElementById("videoContainer");
    let videoElement = document.createElement("video");
    videoElement.autoplay = true;
    videoElement.muted = true;

    videoElement.setAttribute("height", appContainer.offsetHeight);
    videoElement.setAttribute("width", appContainer.offsetWidth);

    videoContainer.appendChild(videoElement);

    let sourceElement = document.createElement("source");
    sourceElement.setAttribute("type", "video/mp4");
    videoElement.appendChild(sourceElement);
    
    if (timesPulled == 1) {
        sourceElement.setAttribute("src", "assets/videos/hf-pull1.mp4");
        
    }
    else {
        sourceElement.setAttribute("src", "assets/videos/hf-pull10.mp4");
    }

    videoElement.onended = function() {
        videoElement.remove();
    };
}
