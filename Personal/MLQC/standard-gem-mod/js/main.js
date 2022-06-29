// Import functions
import {responsiveAppSize} from '/Personal/MLQC/standard-gem/js/size.js';
// import {genetateKarmas, updateStaminaGold, updateResources, updateCosts, updatePurchaseLimit, addGems, addCoupons, draw1, buy10} from '/Personal/MLQC/standard-gem/js/scripts.js';
import {wishAnimation} from '/Personal/MLQC/standard-gem/js/build.js';

// **********************
// * Standard Wish Tree *
// **********************
// Standard Drop Rates
// SP and SSR 1%
// SR 10%
// R 89%
// Buying 10 ar a time guarentees 1 SR or above

// Declare the arrays
let standardSP = [];
let standardKingSSR = [];
let standardSSR = [];
let standardKingSR = [];
let standardSR = [];
let standardKingR = [];
let standardR = [];

// call the function to populate the arrays
genetateKarmas();

// Declares the karmas and timesWished variables to be used globaly
let karmas = [];
let timesWished = 0;

// resources
// ************
// This will be changed later to get from local storage
// ************
let stamina = 150;
let gold = 100000;
let gems = 100000;
let galaxyWishCoupon = 500;
let purchasesLeftToday = 999999;
let ownLimited = 0;

// Do these once when the page loads for the first time
updateCosts();
updateStaminaGold();
responsiveAppSize();
window.addEventListener('resize', responsiveAppSize);

// Get karma list from standard.json
function genetateKarmas() {
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
}

// This updates the stamina and gold
// This doesn't really matter, but it looks nice
function updateStaminaGold() {
    let staminaNumbContainer = document.getElementById("stamina-numb");
    staminaNumbContainer.textContent = stamina + "/150";
    
    let goldNumbContainer = document.getElementById("gold-numb");
    goldNumbContainer.textContent = gold;
}

// This updates the Galaxy With Coupons and Gems
function updateResources() {
    let gemNumbContainer = document.getElementById("gems-numb");
    gemNumbContainer.textContent = gems;

    let gwcNumbContainer = document.getElementById("gwcNumb");
    gwcNumbContainer.textContent = galaxyWishCoupon;

    gwcNumbContainer.textContent = galaxyWishCoupon;
    gemNumbContainer.textContent = gems;
}

// This makes the cost of wishing dynamic based on GWC amount
function updateCosts() {
    let cost10Container = document.getElementById("cost10");
    let cost10IMGContainer = document.getElementById("cost10IMG");

    let cost1Container = document.getElementById("cost1");
    let cost1IMGContainer = document.getElementById("cost1IMG");

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

// This makes the purchase limit dynamic, although there really is no limit
function updatePurchaseLimit() {
    let ownLimitedContainer = document.getElementById("own-limited");
    ownLimitedContainer.textContent = ownLimited + "/80";

    let limitContainer = document.getElementById("limit");
    limitContainer.textContent = purchasesLeftToday;
    if (purchasesLeftToday == 0) {
        alert("You are out of purchases today, let me fix that for you!");
        purchasesLeftToday = 999999;
    }
}

// When the + icon is clicked more gems are added
function addGems() {
    gems += 10000;
    updateCosts();
    updateResources();
}

// When the + icon is clicked more GWCs are added
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

// *****************
// Wishing
// *****************

// This function is called every time a wish is made
// This determines the rarity of the karma
// King karmas are extreamly rare
// This function will use the rarity and call the pickKarma function 
// to get a specific karma and return it
// *************
// For events this will need to be changed
// Eventually I want to make the drop rates based on user choice
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

// When a 10 pull is made, one is guarenteed to be a SR or higher
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

// This takes the rarity and turns it into a karma from one of the arrays and returns it
// *****************
// For events this will need to be changed
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

// When the Buy 1 button is clicked
// This takes the payment, 
// gets the karma,
// displays it, 
// displays the summary
// returns to the main page
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
    // console.log(karmas);
    wishAnimation(timesPulled, karmas);
    timesWished = timesWished + 1;
    updateCosts();
    purchasesLeftToday -= 1;
    updatePurchaseLimit();
}

// When the Buy 10 button is clicked
// This takes the payment, 
// gets the karma,
// (one is guarenteed to be SR or above)
// displays it, 
// displays the summary
// returns to the main page
function buy10() {
    if (galaxyWishCoupon >= 10) {
        galaxyWishCoupon -= 10;
    }
    else if ((10 - galaxyWishCoupon) * 180 <= gems) {
        galaxyWishCoupon = 0;
        gems -= (10 - galaxyWishCoupon) * 180;
    }
    else {
        alert("You don't have enough gems! Let me get you some more!");
        gems += 10000;
    }
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
    // console.log(karmas);
    wishAnimation(timesPulled, karmas);
    timesWished = timesWished + 10;
    updateCosts();
    purchasesLeftToday -= 10;
    updatePurchaseLimit();
}

window.buy1 = buy1;
window.buy10 = buy10;
// window.pickKarma = pickKarma;

console.log(gems);
