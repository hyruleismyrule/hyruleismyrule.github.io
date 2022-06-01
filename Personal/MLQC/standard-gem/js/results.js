// Rarity, Character, Title, Type, King
let karma = ["SP", "Lucien", "Law of Gravity", "Execution", false];

// gets image url for 1 karma
function getKarmaImgURL(karma) {
    character = karma[1];
    title = karma[2];
    character = character.toLowerCase();
    title = title.replace(/\s+/g, '-').toLowerCase();
    let karmaImgURL = "assets/standard-gem-karma-cg/" + character + title + ".png";
    return karmaImgURL;
}

// Set up the results container
function displayResultsContainer() {
    let resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.setAttribute("height", height + "px");
    resultsContainer.setAttribute("width", width + "px");
    resultsContainer.style.backgroundImage = 'url("assets/hd-floral-background.png")';

    let karmaContainer = document.createElement("div");
    karmaContainer.setAttribute("class", "karma-container");
    karmaContainer.setAttribute("id", "karmaContainer");
}

// displays 1 karma
function displayKarma(karma) {
    let rarity = karma[0];
    let character = karma[1];
    let title = karma[2];

    // Results Header "You Got"
    let karmaHeader = document.createElement("div");
    karmaHeader.setAttribute("class", "karmaHeader");
    karmaHeader.setAttribute("id", "karmaHeader");
    // karmaHeader.setAttribute("onclick", "removeDisplayedKarma()");

    let karmaHeaderText = document.createElement("div");
    karmaHeaderText.setAttribute("id", "karmaHeaderText");
    karmaHeaderText.textContent = "You got";
    karmaHeader.appendChild(karmaHeaderText);

    // Rarity Icon
    let rarityIconURL = "assets/rarity/" + rarity + "-icon.png";

    let karmaRarityIMG = document.createElement("img");
    karmaRarityIMG.setAttribute("id", "karmaRarity");
    karmaRarityIMG.setAttribute("src", rarityIconURL);
    karmaRarityIMG.setAttribute("alt", rarity);
    karmaRarityIMG.setAttribute("class", "karma-rarity");
    // karmaRarity.setAttribute("onclick", "removeDisplayedKarma()");

    // Karma Image
    let karmaImgURL = getKarmaImgURL(karma);

    let karmaImgContainer = document.createElement("div");
    karmaImgContainer.setAttribute("id", "karmaImgContainer");
    karmaImgContainer.setAttribute("class", "karmaImgContainer");
    // karmaImgContainer.setAttribute("onclick", "removeDisplayedKarma()");

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
    // nameContainer.setAttribute("onclick", "removeDisplayedKarma()");

    // Stars
    let starOverflow = document.createElement("div");
    starOverflow.setAttribute("class", "starOverflow");
    starOverflow.setAttribute("id", "starOverflow");
    // starOverflow.setAttribute("onclick", "removeDisplayedKarma()");

    let starContainer = document.createElement("div");
    starContainer.appendChild(nameContainer);
    starContainer.setAttribute("class", "star-container");
    starContainer.setAttribute("id", "starContainer");

    let starIMG = document.createElement("img");
    starIMG.setAttribute("src", "assets/stars.png");
    starIMG.setAttribute("alt", "1star");
    starIMG.setAttribute("id", "starIMG");
    starContainer.appendChild(starIMG);
    starIMG.setAttribute("class", "star-img");
    // starContainer.setAttribute("onclick", "removeDisplayedKarma()");

    // Title
    let karmaTitle = document.createElement("div");
    karmaTitle.setAttribute("class", "karmaTitle");
    karmaTitle.setAttribute("id", "karmaTitle");
    karmaTitle.textContent = title;
    // karmaTitle.setAttribute("onclick", "removeDisplayedKarma()");

    // Share
    let shareContainer = document.createElement("button");
    shareContainer.setAttribute("class", "shareContainer");
    shareContainer.setAttribute("id", "shareContainer");

    let shareIMG = document.createElement("img");
    shareIMG.setAttribute("src", "assets/share-stars.png");
    shareIMG.setAttribute("id", "shareIMG");
    shareIMG.setAttribute("alt", "stars");
    shareContainer.appendChild(shareIMG);

    let shareText = document.createElement("div");
    shareText.setAttribute("id", "shareText");
    shareText.textContent = "Share";
    shareContainer.appendChild(shareText);
    // shareContainer.setAttribute("onclick", "shareKarma()");

    // Skip
    // let skipContainer = document.createElement("button");
    // skipContainer.setAttribute("class", "skipContainer");
    // skipContainer.setAttribute("id", "skipContainer");
    // skipContainer.setAttribute("onclick", "removeDisplayedKarma()");

    // let skipText = document.createElement("div");
    // skipText.setAttribute("id", "skipText");
    // skipText.textContent = "Skip";

    // let skipSVGContainer = document.createElement("div");
    // skipSVGContainer.setAttribute("id", "skipSVGContainer");
    // let skipSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M52.51 440.6l171.5-142.9V214.3L52.51 71.41C31.88 54.28 0 68.66 0 96.03v319.9C0 443.3 31.88 457.7 52.51 440.6zM308.5 440.6l192-159.1c15.25-12.87 15.25-36.37 0-49.24l-192-159.1c-20.63-17.12-52.51-2.749-52.51 24.62v319.9C256 443.3 287.9 457.7 308.5 440.6z"/></svg>';
    // skipSVGContainer.innerHTML = skipSVG;

    // skipContainer.appendChild(skipText);
    // skipContainer.appendChild(skipSVGContainer);

    let bottomRowKarma = document.createElement("div");
    bottomRowKarma.setAttribute("class", "bottomRowKarma");
    bottomRowKarma.appendChild(shareContainer);
    bottomRowKarma.appendChild(karmaTitle);
    // bottomRowKarma.appendChild(skipContainer);

    resultsContainer.appendChild(karmaHeader);
    karmaContainer.appendChild(karmaRarity);
    karmaContainer.appendChild(karmaImgContainer);
    starOverflow.appendChild(starContainer);
    karmaContainer.appendChild(starOverflow);
    resultsContainer.appendChild(karmaContainer);
    resultsContainer.appendChild(bottomRowKarma);

    let appwidth = document.getElementById("app-container").offsetWidth;
    sizeResultsKarma(appwidth);

}