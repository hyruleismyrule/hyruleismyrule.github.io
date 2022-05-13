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
        appHeight = Math.round((1.7) * appWidth);

        appDiv.style.width = appWidth + "px";
        appDiv.style.height = appHeight + "px";

        if (appHeight > windowHeight) {
            // calculate by height
            appHeight = windowHeight;
            appWidth = Math.round(appHeight / 1.8);

            appDiv.style.width = appWidth + "px";
            appDiv.style.height = appHeight + "px";
        }
    } else {
        // Calculate by height (desktop)
        appHeight = windowHeight;
        appWidth = Math.round(appHeight / 1.8);

        appDiv.style.width = appWidth + "px";
        appDiv.style.height = appHeight + "px";
    }
    placeGrids(appWidth)
}

// // Grid-placement
function placeGrids(appWidth) {
    // Top Row
    let topRow = document.getElementById("topRow");
    let TRC = Math.round(appWidth / 8);
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
}
