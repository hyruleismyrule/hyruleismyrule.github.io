// Code of Passionate Love Limited Karma
let eventSP = ["Victor: Preference", "Gavin: Obsession", "Lucien: Clinging", "Kiro: Tenderness"];

// Standard Karma
let standardSP = ["Gavin: Dream Traveler", "Kiro: Gorgeous Lights", "Lucien: Law of Gravity", "Victor: Only Tonight"];

let standardKingSSR = ["Kiro: Visage", "Gavin: Hot-Blooded", "Lucien: Memory Lapse", "Victor: Loving Stare"];
let standardSSR = ["Gavin: Unforgettable Time", "Gavin: Summer Loving", "Gavin: Seize", "Gavin: Starstruck", "Kiro: No Man's Land", "Kiro: Spring Sonata", "Kiro: Whisk You Away", "Kiro: Starry Sky", "Lucien: Temptation", "Lucien: Autumn Whisper", "Lucien: Drowning in Love", "Lucien: Sound of Silence", "Victor: Music of the Night", "Victor: Winter Infatuation", "Victor: Sentimental Attachment", "Victor: Marauder"];

let standardKingSR = ["Kiro: Found You", "Gavin: Late Autumn", "Lucien: Deeper Than Ocean", "Victor: Tender Moment"];
let standardSR = ["Gavin: You Are Mine", "Gavin: Sincere Instruction", "Gavin: Childlike", "Gavin: Fierce Battle", "Gavin: Source of Strength", "Kiro: Together with You", "Kiro: Together with You", "Kiro: Sweet Dreams", "Kiro: Snowfall", "Kiro: Lingering Glance", "Kiro: Albatross", "Lucien: Midnight Beacon", "Lucien: Tender Mood", "Lucien: Capture the Moment", "Lucien: Arm-in-Arm", "Lucien: Fireflies", "Victor: Our Own World", "Victor: Soft Encouragement", "Victor: Making a Move", "Victor: Late Night Thoughts", "Victor: Rainfall Rendezvous"];

let standardKingR = ["Kiro: Flustered", "Gavin: Cold Shower", "Lucien: Cherish the Memory", "Victor: At Leisure"];
let standardR = ["Gavin: Upwind", "Gavin: Rock and a Hard Place", "Gavin: Investigation", "Gavin: Whetstone", "Gavin: Deduction", "Gavin: Bullseye", "Gavin: Warming Up", "Kiro: Your Existence", "Kiro: Masterpiece", "Kiro: Loving Mood", "Kiro: Source of Joy", "Kiro: Perfect Figure", "Kiro: Custom Made", "Kiro: Singing for You", "Lucien: Detailed Narration", "Lucien: Destined", "Lucien: Support", "Lucien: Archive", "Lucien: Hard Choice", "Lucien: Read You Like a Book", "Lucien: Indelible Taste", "Victor: Self-Entertaining", "Victor: Unbridled Passion", "Victor: Taste", "Victor: Reluctance", "Victor: Time Control", "Victor: Special Assignment", "Victor: Heartstring"];

// Drop rates during the Code of Passionate Love Event are
// event SP 1.5%
// SP and SSR 1%
// SR 10%
// R 87.5%
// Buying 10 ar a time guarentees 1 SR or above

let timesWished = 0;

// This gives a decimal
function randomDecimal() {
    let precision = 10;
    return Math.floor(Math.random() * (100 * precision - 1 * precision) + 1 * precision) / (1 * precision) + 1;
}

// This pulls 1 karma from the event wish tree
function buy1() {
    // Please note that event SPs have a slightly higher drop rate
    let karma = "";
    let rarityCheck = randomDecimal();
    // R
    if (rarityCheck <= 87.5) {
        let kingCheck = randomDecimal();
        if (kingCheck <= 5) {
            let rarity = "King R";
            let karmaNum = Math.floor(Math.random() * 4);

            karma = standardKingR[karmaNum];
            console.log(rarity + " - " + karma + " (" + rarityCheck + ")");
        }
        else {
            let rarity = "R";
            let karmaNum = Math.floor(Math.random() * standardR.length);

            karma = standardR[karmaNum];
            console.log(rarity + " - " + karma + " (" + rarityCheck + ")");
        }
    }
    // SR
    else if (rarityCheck <= 97.5) {
        let kingCheck = randomDecimal();
        if (kingCheck <= 5) {
            let rarity = "King SR";
            let karmaNum = Math.floor(Math.random() * 4);

            karma = standardKingSR[karmaNum];
            console.log(rarity + " - " + karma + " (" + rarityCheck + ")");
        }
        else {
            let rarity = "SR";
            let karmaNum = Math.floor(Math.random() * standardSR.length);

            karma = standardSR[karmaNum];
            console.log(rarity + " - " + karma + " (" + rarityCheck + ")");
        }
    }
    // SSR / SP
    else if (rarityCheck <= 98.5) {
        let kingCheck = randomDecimal();
        if (kingCheck <= 5) {
            let rarity = "King SSR";
            let karmaNum = Math.floor(Math.random() * 4);

            karma = standardKingSSR[karmaNum];
            console.log(rarity + " - " + karma + " (" + rarityCheck + ")");
        }
        else {
            let rarity = "SSR";
            let karmaNum = Math.floor(Math.random() * (standardSSR.length + 4));

            if (standardSSR.length < karmaNum) {
                karma = standardSSR[karmaNum];
                console.log(rarity + " - " + karma + " (" + rarityCheck + ")");
            }
            else {
                let rarity = "SP";
                let karmaNum = Math.floor(Math.random() * 4);

                karma = standardSP[karmaNum];
                console.log(rarity + " - " + karma + " (" + rarityCheck + ")");
            }
        }
    }
    // Event SPs
    else {
        let rarity = "Event SP";
        let karmaNum = Math.floor(Math.random() * 4);
        karma = eventSP[karmaNum];
        console.log(rarity + " - " + karma + " (" + rarityCheck + ")");
    }
    timesWished = timesWished + 1;
    document.getElementById("redeemNum").textContent = timesWished;
    return karma;
}

// This gets a SR+ karma
function getSRorAbove() {
    // Please note that event SPs have a slightly higher drop rate
    let karma = "";
    let rarityCheck = randomDecimal();
    // SR
    if (rarityCheck <= 97.5) {
        let kingCheck = randomDecimal();
        if (kingCheck <= 5) {
            let rarity = "King SR";
            let karmaNum = Math.floor(Math.random() * 4);

            karma = standardKingSR[karmaNum];
            console.log(rarity + " - " + karma + " (" + rarityCheck + ")");
        }
        else {
            let rarity = "SR";
            let karmaNum = Math.floor(Math.random() * standardSR.length);

            karma = standardSR[karmaNum];
            console.log(rarity + " - " + karma + " (" + rarityCheck + ")");
        }
    }
    // SSR / SP
    else if (rarityCheck <= 98.5) {
        let kingCheck = randomDecimal();
        if (kingCheck <= 5) {
            let rarity = "King SSR";
            let karmaNum = Math.floor(Math.random() * 4);

            karma = standardKingSSR[karmaNum];
            console.log(rarity + " - " + karma + " (" + rarityCheck + ")");
        }
        else {
            let rarity = "SSR";
            let karmaNum = Math.floor(Math.random() * (standardSSR.length + 4));

            if (standardSSR.length < karmaNum) {
                karma = standardSSR[karmaNum];
                console.log(rarity + " - " + karma + " (" + rarityCheck + ")");
            }
            else {
                let rarity = "SP";
                let karmaNum = Math.floor(Math.random() * 4);

                karma = standardSP[karmaNum];
                console.log(rarity + " - " + karma + " (" + rarityCheck + ")");
            }
        }
    }
    // Event SPs
    else {
        let rarity = "Event SP";
        let karmaNum = Math.floor(Math.random() * 4);
        karma = eventSP[karmaNum];
        console.log(rarity + " - " + karma + " (" + rarityCheck + ")");
    }
    timesWished = timesWished + 1;
    document.getElementById("redeemNum").textContent = timesWished;
    return karma;
}

// This pulls 10 karma from the event wish tree with at least 1 SR or above
function buy10() {
    let karmasPulled = [];
    for (let i = 0; i < 9; i++) {
        karmasPulled.push(buy1());
    }
    karmasPulled.push(getSRorAbove());
    console.log(karmasPulled);
    karmasPulled = shuffleArray(karmasPulled);
    console.log(karmasPulled);
    // let random = karmasPulled.sort(() => Math.random() - 0.5);
    // console.log(random);
}

function shuffleArray(array) {
    let shuffledArray = [];
    // let arrayLength = array.length;
    for (let i = 0; i <= 10; i++) {
        let shuffleNum = Math.floor(Math.random() * 10);
        // shuffledArray.push(array[shuffleNum]);
        shuffledArray[i] = array[shuffleNum];
        delete array[shuffleNum];
    }
    return shuffledArray;
}

// Note, for some reason SSRs are not dropping