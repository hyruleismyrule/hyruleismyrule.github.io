// Main Nav Toggle
let primaryNav = document.getElementById("primary-nav");
let toggleNavButton = document.getElementById("primary-menu-toggle");
toggleNavButton.addEventListener("click", openMenu);
function openMenu() {
    if (primaryNav.classList.contains("open")) {
        primaryNav.classList.remove("open");
    }
    else {
        primaryNav.classList.add("open");
    }
}

// Call api
const defaultPokemonAPIurl = "//pokeapi.co/api/v2/pokemon?limit=9";
fetch(defaultPokemonAPIurl)
    .then((response) => response.json())
    .then((nameInfo) => {
        console.log(nameInfo);
        defaultSet(nameInfo);
    });
// Initialize display arrays
let displayNames = [];
let displayImages = [];
let displayTypes = [];

// Create a Default Set
// Get the names
async function defaultSet(nameInfo) {
    let defaultSet = [];
    for (let i = 0, len = nameInfo.results.length; i < len; i++) {
        defaultSet.push(nameInfo.results[i].name);
    }
    // console.log(defaultSet);
    // return defaultSet;
    await defaultImages(defaultSet);
}

// Get the Image URLS
async function defaultImages(defaultSet) {

    const pokemonAPIurlBase = "//pokeapi.co/api/v2/pokemon/";
    let defaultImages = [];
    let defaultTypes = [];
    for (let i = 0, len = defaultSet.length; i < len; i++) {
        let tempURL = pokemonAPIurlBase + defaultSet[i];
        await fetch(tempURL)
            .then((response) => response.json())
            .then((imageInfo) => {
                let artURL = imageInfo.sprites.other["official-artwork"].front_default;
                let type = imageInfo.types[0].type.name;
                defaultImages.push(artURL);
                defaultTypes.push(type);
            });
    }
    // console.log(defaultImages);
    // console.log(defaultTypes);
    displayNames = defaultSet;
    displayImages = defaultImages;
    displayTypes = defaultTypes;
    // console.log(displayImages[0]);
    buildCards(displayNames, displayImages, displayTypes);
}

// Build Set, will use whatever is in display
function buildCards(displayNames, displayImages, displayTypes) {
    // console.log(displayImages);
    // console.log(displayImages[0]);
    for (let i = 0, len = displayNames.length; i < len; i++) {
        let name = displayNames[i];
        // Capitalize the first letter
        name = name.charAt().toUpperCase() + name.substring(1)

        let artURL = displayImages[i];

        let card = document.createElement("div");
        card.setAttribute('class', "flash-card");
        card.setAttribute('id', displayTypes[i]);

        let inner = document.createElement("div");
        inner.setAttribute('class', "card-inner");

        let front = document.createElement("div");
        front.setAttribute('class', "card-front");

        let back = document.createElement("div");
        back.setAttribute('class', "card-back");

        let nameElement = document.createElement("h2");
        let imageElement = document.createElement("img");

        nameElement.textContent = name;
        imageElement.setAttribute('src', artURL);
        imageElement.setAttribute('alt', name);

        front.appendChild(imageElement);
        back.appendChild(nameElement);

        inner.appendChild(front);
        inner.appendChild(back);

        card.appendChild(inner);

        document.getElementById("mysets").appendChild(card);
    }
}