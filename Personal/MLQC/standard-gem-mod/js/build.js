// Play Video
function skipVideo() {
    let videoContainer = document.getElementById("videoContainer");
    videoContainer.removeChild(videoContainer.firstChild);
}

export function wishAnimation(timesPulled, karmas) {
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

// Build 1 karma for display
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

        // Skip
        let skipContainer = document.createElement("button");
        skipContainer.setAttribute("class", "skipContainer");
        skipContainer.setAttribute("id", "skipContainer");
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
    let karmaImgURL = "../assets/karma-cg/" + character + "-" + title + ".jpg";
    return karmaImgURL;
}

// Summary Karma
function displayThumbnails(karmas) {

    let resultsContainer = document.getElementById("resultsContainer");
    while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.firstChild);
    }

    let karmaHeader = document.createElement("div");
    karmaHeader.setAttribute("id", "karmaHeader");
    karmaHeader.setAttribute("class", "level");
    resultsContainer.appendChild(karmaHeader);

    let karmaHeaderText = document.createElement("div");
    karmaHeaderText.setAttribute("id", "karmaHeaderText");
    karmaHeaderText.textContent = "You Got";
    karmaHeaderText.style.width = "150px";
    karmaHeader.appendChild(karmaHeaderText);

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
        let karmaURL = "../assets/karma-tb/" + character.toLowerCase() + "-" + title.replace(/\s+/g, '-').toLowerCase() + "-tb.jpg";
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

        summaryBox.setAttribute("onclick", "backHome()")
    }

    responsiveAppSize();
}

function removeSummaryResults() {
    let resultsContainer = document.getElementById("resultsContainer");

    while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.firstChild);
    }
    resultsContainer.removeAttribute("onclick");
    console.log("remove results")
}

function backHome() {
    console.log("home");
    if (document.getElementById("summaryBox")) {
        let resultsContainer = document.getElementById("resultsContainer");
        while (resultsContainer.firstChild) {
            resultsContainer.removeChild(resultsContainer.firstChild);
        }
    
        resultsContainer.style.height = null;
        resultsContainer.style.width = null;
        resultsContainer.setAttribute("onclick", null);
        console.log("removed");
    }
}

// Show each karma
function removeDisplayedKarma(karmas, displayedKarma) {
    let resultsContainer = document.getElementById("resultsContainer");

    if (displayKarma == 9) {
        displayThumbnails(karmas);
    }
    else if (karmas.length == 1) {
        displayThumbnails(karmas);
    }
    else {
        while (resultsContainer.firstChild) {
            resultsContainer.removeChild(resultsContainer.firstChild);
        }
        if (displayedKarma < 9) {
            displayedKarma += 1;
            displayKarma(karmas[displayedKarma], displayedKarma, karmas);
        }
        else {
            displayThumbnails(karmas);
        }
    }
}