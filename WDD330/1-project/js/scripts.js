// Local Storage
let userSets = [];
function saveDefaultSets() {
    let setName = "Bulbasaur";
    let setPokemon = ["bulbasaur", "ivysaur", "venusaur"];

    localStorage.setItem(setName, setPokemon);
    userSets.push(setName);
    localStorage.setItem("setTitles", userSets);

    setName = "Charmander";
    setPokemon = ["charmander", "charmeleon", "charizard"];

    localStorage.setItem(setName, setPokemon);
    userSets.push(setName);
    localStorage.setItem("setTitles", userSets);

    setName = "Squirtle";
    setPokemon = ["squirtle", "wartortle", "blastoise"];

    localStorage.setItem(setName, setPokemon);
    userSets.push(setName);
    localStorage.setItem("setTitles", userSets);
}

console.log(localStorage);
// localStorage.clear();

checkDefaults(localStorage);

function checkDefaults(localStorage) {
    let setTitles = localStorage.getItem("setTitles");
    if (!setTitles) {
        saveDefaultSets();
    }
}

let customSetName = "";
let customSetPokemon = [];
let customSetURL = [];
let customSetType = [];

async function getThumbnail(localStorage) {
    const pokemonAPIurlBase = "//pokeapi.co/api/v2/pokemon/";
    let setTitles = localStorage.getItem("setTitles");
    setTitles = setTitles.split(",");
    for (let i = 0; i < setTitles.length; i++) {

        let setName = setTitles[i];

        let setPokemon = localStorage.getItem(setTitles[i]);
        setPokemon = setPokemon.split(",");

        let tempURL = pokemonAPIurlBase + setPokemon[0];
        await fetch(tempURL)
            .then((response) => response.json())
            .then((imageInfo) => {
                let artURL = imageInfo.sprites.other["official-artwork"].front_default;
                let type = imageInfo.types[0].type.name;
                buildThumbnails(setName, setPokemon, artURL, type);
            });
    }
    newSetButton();
}
getThumbnail(localStorage);

function buildThumbnails(setName, setPokemon, artURL, type) {
    let container = document.getElementById("viewSets");

    let thumbnail = document.createElement("div");
    thumbnail.setAttribute("class", "thumbnail-container" + " " + type);
    thumbnail.setAttribute("onclick", "viewSet()");

    let setTitle = document.createElement("h3");
    setTitle.textContent = setName;
    setTitle.setAttribute('data-code', setName);

    let thumbnailImage = document.createElement("img");
    thumbnailImage.setAttribute('src', artURL);
    thumbnailImage.setAttribute('alt', setPokemon[0]);
    thumbnailImage.setAttribute('data-code', setName);

    thumbnail.appendChild(thumbnailImage);
    thumbnail.appendChild(setTitle);

    container.appendChild(thumbnail);
}

function newSetButton() {
    let container = document.getElementById("viewSets");
    let plusSvgHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>';

    let newSetIcon = document.createElement("div");
    newSetIcon.setAttribute("class", "thumbnail-container new");
    newSetIcon.setAttribute("onclick", "createNewSet()");

    let svgContainer = document.createElement("div");
    svgContainer.setAttribute("class", "new-set-icon-container");
    svgContainer.innerHTML = plusSvgHTML;

    newSetIcon.appendChild(svgContainer);
    container.appendChild(newSetIcon);
}

// Linking thumbnails to sets
function viewSet() {
    let setCode = event.target.dataset.code;

    // Removes and Creates new title
    let changeTitle = document.getElementById("essentialTitle");
    changeTitle.removeChild(changeTitle.firstElementChild);
    changeTitle.setAttribute("class", "back-container");

    let backArrowContainer = document.createElement("div");
    backArrowContainer.setAttribute("class", "arrow");
    backArrowContainer.setAttribute("onclick", "displayThumbnails()");
    let backSvgHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z" /></svg>';
    backArrowContainer.innerHTML = backSvgHTML;
    changeTitle.appendChild(backArrowContainer);

    let newTitle = document.createElement("h1");
    newTitle.textContent = "Back";
    newTitle.setAttribute("id", "review-title");
    changeTitle.appendChild(newTitle);

    // Removes and creates new essential div
    let changeDiv = document.getElementById("essentialDivContainer");
    changeDiv.removeChild(changeDiv.firstElementChild);
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "review");
    changeDiv.appendChild(newDiv);

    setDetails(setCode);
}

// Builds Cards
// Initialize display arrays
let displayTitle = "";
let displayNames = [];
let displayImages = [];
let displayTypes = [];

async function setDetails(setCode) {
    displayTitle = setCode;
    displayNames = localStorage.getItem(setCode);
    displayNames = displayNames.split(",");
    const pokemonAPIurlBase = "//pokeapi.co/api/v2/pokemon/";

    for (let i = 0, len = displayNames.length; i < len; i++) {
        let tempURL = pokemonAPIurlBase + displayNames[i];
        await fetch(tempURL)
            .then((response) => response.json())
            .then((imageInfo) => {
                let artURL = imageInfo.sprites.other["official-artwork"].front_default;
                let type = imageInfo.types[0].type.name;
                displayImages.push(artURL);
                displayTypes.push(type);
            });
    }
    await buildCards(displayNames, displayImages, displayTypes, displayTitle);
    showSlides(slideIndex);
}

// Build Set, will use whatever is in display
function buildCards(displayNames, displayImages, displayTypes, displayTitle) {

    let title = document.createElement("h1");
    title.textContent = displayTitle;
    document.getElementById("review").appendChild(title);

    for (let i = 0, len = displayNames.length; i < len; i++) {
        let name = displayNames[i];
        // Capitalize the first letter
        name = name.charAt().toUpperCase() + name.substring(1);

        let artURL = displayImages[i];

        let card = document.createElement("div");

        card.setAttribute('class', "flash-card mySlides" + " " + displayTypes[i]);

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

        document.getElementById("review").appendChild(card);
    }

    let bottomNav = document.createElement("div");
    bottomNav.setAttribute("id", "bottom-nav");
    bottomNav.setAttribute("class", "bottom-nav");

    let prevContainer = document.createElement("div");
    prevContainer.setAttribute("class", "arrow prev");
    prevContainer.setAttribute("onclick", "plusSlides(-1)");
    let prevSvgHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z" /></svg>';
    prevContainer.innerHTML = prevSvgHTML;
    bottomNav.appendChild(prevContainer);

    let editContainer = document.createElement("div");
    editContainer.setAttribute("class", "editContainer");
    let editButton = document.createElement("button");
    editButton.setAttribute("class", "editButton");
    editButton.setAttribute("onclick", "editSet()");
    editButton.setAttribute("data-code", displayTitle);
    editButton.textContent = "Edit Set";
    editContainer.appendChild(editButton);
    bottomNav.appendChild(editContainer);

    let nextContainer = document.createElement("div");
    nextContainer.setAttribute("class", "arrow next");
    nextContainer.setAttribute("onclick", "plusSlides(1)");
    let nextSvgHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z" /></svg>';
    nextContainer.innerHTML = nextSvgHTML;
    bottomNav.appendChild(nextContainer);

    document.getElementById("review").appendChild(bottomNav);
}

// Making the slide show
let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("flash-card");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// Back Button to set back up thumbnail page
function displayThumbnails() {
    // Removes and Creates new title
    let changeTitle = document.getElementById("essentialTitle");
    changeTitle.removeChild(changeTitle.firstElementChild);
    changeTitle.removeChild(changeTitle.firstElementChild);
    changeTitle.removeAttribute("class", "back-container");

    let newTitle = document.createElement("h1");
    newTitle.textContent = "My Sets";
    newTitle.setAttribute("id", "view-sets-title");
    changeTitle.appendChild(newTitle);

    // Removes and creates new essential div
    let changeDiv = document.getElementById("essentialDivContainer");
    changeDiv.removeChild(changeDiv.firstElementChild);
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "viewSets");
    changeDiv.appendChild(newDiv);

    // Reinitialize display arrays
    displayTitle = "";
    displayNames = [];
    displayImages = [];
    displayTypes = [];

    getThumbnail(localStorage);
}

async function getCustomInfo() {
    // Get the image and type for the pokemon
    const customPokemonAPIurlBase = "//pokeapi.co/api/v2/pokemon/";
    for (let i = 0, len = customSetPokemon.length; i < len; i++) {
        let tempURL = customPokemonAPIurlBase + customSetPokemon[i];
        await fetch(tempURL)
            .then((response) => response.json())
            .then((imageInfo) => {
                let artURL = imageInfo.sprites.other["official-artwork"].front_default;
                let type = imageInfo.types[0].type.name;
                customSetURL.push(artURL);
                customSetType.push(type);
            });
    }
}

// results
let resultsPokemon = [];
let resultsURL = [];
let resultsType = [];

async function getResultsInfo() {
    // Get the image and type for the pokemon
    const customPokemonAPIurlBase = "//pokeapi.co/api/v2/pokemon/";
    for (let i = 0, len = resultsPokemon.length; i < len; i++) {
        let tempURL = customPokemonAPIurlBase + resultsPokemon[i];
        await fetch(tempURL)
            .then((response) => response.json())
            .then((imageInfo) => {
                let artURL = imageInfo.sprites.other["official-artwork"].front_default;
                let type = imageInfo.types[0].type.name;
                resultsURL.push(artURL);
                resultsType.push(type);
            });
    }
}

// Searches for filtered results
async function applyFilters() {
    let loading = document.getElementById("loading");
    loading.textContent = "Loading, please wait...";
    resultsPokemon = [];

    let searchInput = document.getElementById("searchInput");
    let genSelect = document.getElementById("gen");
    let genSelectedOption = genSelect.options[genSelect.selectedIndex].value;
    let typeSelect = document.getElementById("type");
    let typeSelectOption = typeSelect.options[typeSelect.selectedIndex].value;

    if (searchInput.value) {

        resultsPokemon = [];
        resultsURL = [];
        resultsType = [];
        resultsPokemon.push(searchInput.value.toLowerCase());

    }

    // If both type and gen are filtered
    else if (genSelectedOption != "All" && typeSelectOption != "All") {

        resultsPokemon = await doubbleFilterAPI(genSelectedOption, typeSelectOption);

    }
    // Only Gen was selected
    else if (genSelectedOption != "All" && typeSelectOption == "All") {
        resultsPokemon = await genFilterAPI(genSelectedOption);
    }
    // Only type was selected
    else if (typeSelectOption != "All" && genSelectedOption == "All") {
        resultsPokemon = await typeFilterAPI(typeSelectOption);
    }
    else {
        random();
    }

    await getResultsInfo();
    await refreshResults();
    console.log(resultsPokemon);
}

// Call api for gen filter 
async function genFilterAPI(genSelectedOption) {
    const filterPokemonAPIurlBase = "//pokeapi.co/api/v2/";
    console.log(genSelectedOption);
    let genAPI = filterPokemonAPIurlBase + "generation/" + genSelectedOption;

    let genFilteredPokemon = [];

    await fetch(genAPI)
        .then((response) => response.json())
        .then((info) => {

            for (let i = 0, len = info.pokemon_species.length; i < len; i++) {
                let genPokemon = info.pokemon_species[i].name;
                genFilteredPokemon.push(genPokemon);
            }

        });
    return genFilteredPokemon;
}

// Call api for type filter 
async function typeFilterAPI(typeSelectOption) {
    const filterPokemonAPIurlBase = "//pokeapi.co/api/v2/";
    // type
    let typeFilteredPokemon = [];
    let typeAPI = filterPokemonAPIurlBase + "type/" + typeSelectOption;
    await fetch(typeAPI)
        .then((response) => response.json())
        .then((info) => {

            for (let i = 0, len = info.pokemon.length; i < len; i++) {
                let typePokemon = info.pokemon[i].pokemon.name;
                typeFilteredPokemon.push(typePokemon);
            }

        });
    return typeFilteredPokemon;
}

// Calls api for both filters
async function doubbleFilterAPI(genSelectedOption, typeSelectOption) {
    let genFilteredPokemon = await genFilterAPI(genSelectedOption);
    let typeFilteredPokemon = await typeFilterAPI(typeSelectOption);
    let totalFiteredPokemon = arrayMatch(genFilteredPokemon, typeFilteredPokemon);
    return totalFiteredPokemon;
}

function arrayMatch(genFilteredPokemon, typeFilteredPokemon) {
    let totalFiteredPokemon = [];
    // var arr = [];  // Array to contain match elements
    for (var i = 0; i < genFilteredPokemon.length; ++i) {
        for (var j = 0; j < typeFilteredPokemon.length; ++j) {
            if (genFilteredPokemon[i] == typeFilteredPokemon[j]) {    // If element is in both the arrays
                totalFiteredPokemon.push(genFilteredPokemon[i]);        // Push to arr array
            }
        }
    }
    return totalFiteredPokemon;
}

// User can create a new set
async function createNewSet(editSetTitle, editSetPokemon) {

    let changeTitle = document.getElementById("essentialTitle");
    changeTitle.removeChild(changeTitle.firstElementChild);
    changeTitle.setAttribute("class", "back-container");

    let backArrowContainer = document.createElement("div");
    backArrowContainer.setAttribute("class", "arrow");
    backArrowContainer.setAttribute("onclick", "displayThumbnails()");
    let backSvgHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z" /></svg>';
    backArrowContainer.innerHTML = backSvgHTML;
    changeTitle.appendChild(backArrowContainer);

    let newTitle = document.createElement("h1");
    newTitle.textContent = "Back";
    newTitle.setAttribute("id", "new-title");
    changeTitle.appendChild(newTitle);

    // Removes and creates new essential div
    let changeDiv = document.getElementById("essentialDivContainer");
    changeDiv.removeChild(changeDiv.firstElementChild);
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "newSet");
    changeDiv.appendChild(newDiv);

    // Set Title Form
    let form = document.createElement("form");
    form.setAttribute("onsubmit", "return beginSave(customSetPokemon)");

    let titleContainer = document.createElement("div");
    titleContainer.setAttribute("class", "title-container");
    let titleInput = document.createElement("input");
    titleInput.setAttribute("id", "new-set-name");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Name your Set");
    titleInput.setAttribute("required", "");
    if (editSetTitle) {
        titleInput.value = editSetTitle;
        customSetPokemon = editSetPokemon;
    }

    newDiv.appendChild(form);
    form.appendChild(titleContainer);
    titleContainer.appendChild(titleInput);

    // In Set Pokemon
    let scrollOuter = document.createElement("div");
    scrollOuter.setAttribute("id", "pokemonInList");
    scrollOuter.setAttribute("class", "scroll-outer");

    form.appendChild(scrollOuter);

    await getCustomInfo();
    await refreshCustom(scrollOuter);

    // Save Set
    let saveContainer = document.createElement("div");
    saveContainer.setAttribute("class", "save-container");
    let saveButton = document.createElement("button");
    saveButton.setAttribute("id", "saveLocal");
    saveButton.setAttribute("type", "submit");

    saveButton.textContent = "Save Set";

    saveContainer.appendChild(saveButton);
    form.appendChild(saveContainer);

    // Add Search Bar
    let setSearchDiv = document.createElement("div");
    setSearchDiv.setAttribute("id", "search-bar");
    setSearchDiv.setAttribute("class", "search-bar");
    newDiv.appendChild(setSearchDiv);

    createSearch();
    let resultsDiv = document.createElement("div");
    resultsDiv.setAttribute("id", "searchResults");

    let loading = document.createElement("div");
    loading.setAttribute("id", "loading");
    resultsDiv.appendChild(loading);

    newDiv.appendChild(resultsDiv);

    // Results
    let resultsScrollOuter = document.createElement("div");
    resultsScrollOuter.setAttribute("class", "scroll-outer");
    resultsScrollOuter.setAttribute("id", "pokemonInResults");
    resultsDiv.appendChild(resultsScrollOuter);

    await getResultsInfo();
}

// Get the current number of pokemon generations
let genNames = [];
let genURLs = [];
async function getGen() {
    const genAPIurl = "//pokeapi.co/api/v2/generation";
    await fetch(genAPIurl)
        .then((response) => response.json())
        .then((info) => {

            for (let i = 0; i < info.results.length; i++) {
                genNames.push(info.results[i].name);
                genURLs.push(info.results[i].url);
            }

        });
}

// Get the current types of pokemon
let typeNames = [];
let typeURLs = [];
async function getType() {
    const genAPIurl = "//pokeapi.co/api/v2/type";
    await fetch(genAPIurl)
        .then((response) => response.json())
        .then((info) => {

            for (let i = 0; i < info.results.length; i++) {
                typeNames.push(info.results[i].name);
                typeURLs.push(info.results[i].url);
            }

        });
}

// Create Search Filter Bar
async function createSearch() {
    let searchBar = document.getElementById("search-bar");

    // Note the form varable used to be a form element, but was changed to a div
    let form = document.createElement("div");
    searchBar.appendChild(form);

    let filterContainer = document.createElement("div");
    filterContainer.setAttribute("class", "filter-container");
    form.appendChild(filterContainer);

    let nameInputContainer = document.createElement("div");
    nameInputContainer.setAttribute("class", "input-container");
    filterContainer.appendChild(nameInputContainer);

    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "searchInput");
    nameInput.setAttribute("placeholder", "Search by Name");
    nameInputContainer.appendChild(nameInput);

    let searchLabelGen = document.createElement("label");
    searchLabelGen.setAttribute("class", "search-label");
    searchLabelGen.setAttribute("for", "gen");
    searchLabelGen.textContent = "Search by Generation";
    filterContainer.appendChild(searchLabelGen);

    let selectContainerGen = document.createElement("select");
    selectContainerGen.setAttribute("id", "gen");
    selectContainerGen.setAttribute("name", "gen");
    filterContainer.appendChild(selectContainerGen);

    let genOptionAll = document.createElement("option");
    genOptionAll.setAttribute("value", "All");
    genOptionAll.textContent = "All";
    selectContainerGen.appendChild(genOptionAll);

    // Call api to get current generation info
    await getGen();

    for (let i = 0; i < genNames.length; i++) {
        let genOption = document.createElement("option");
        let number = genNames[i].slice(11);
        number = number.toUpperCase();
        let genName = "Generation" + " " + number;

        genOption.setAttribute("value", genNames[i]);
        genOption.textContent = genName;

        selectContainerGen.appendChild(genOption);

    }

    let spacerDiv = document.createElement("div");
    filterContainer.appendChild(spacerDiv);

    let searchLabelType = document.createElement("label");
    searchLabelType.setAttribute("class", "search-label");
    searchLabelType.setAttribute("for", "type");
    searchLabelType.textContent = "Search by Type";
    filterContainer.appendChild(searchLabelType);

    let selectContainerType = document.createElement("select");
    selectContainerType.setAttribute("id", "type");
    selectContainerType.setAttribute("name", "type");
    filterContainer.appendChild(selectContainerType);

    let typeOptionAll = document.createElement("option");
    typeOptionAll.setAttribute("value", "All");
    typeOptionAll.textContent = "All";
    selectContainerType.appendChild(typeOptionAll);

    // Call api to get current type info
    await getType();
    for (let i = 0; i < typeNames.length; i++) {
        let typeOption = document.createElement("option");
        let typeName = typeNames[i].charAt().toUpperCase() + typeNames[i].substring(1);

        typeOption.setAttribute("value", typeNames[i]);
        typeOption.textContent = typeName;

        selectContainerType.appendChild(typeOption);
    }

    // Buttons for searching
    let buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "filter-buttons");
    form.appendChild(buttonContainer);

    let filterButton = document.createElement("button");
    filterButton.setAttribute("class", "filter-button");
    filterButton.setAttribute("onclick", "applyFilters()");
    filterButton.textContent = "Search";
    buttonContainer.appendChild(filterButton);

    let randomButton = document.createElement("button");
    randomButton.setAttribute("class", "random-button");
    randomButton.setAttribute("onclick", "random()");
    randomButton.textContent = "Random";
    buttonContainer.appendChild(randomButton);
}

// Save custom list to local storage
function beginSave(customSetPokemon) {
    if (customSetPokemon.length > 0) {
        let setName = document.getElementById("new-set-name").value;
        let setPokemon = customSetPokemon;

        let userSets = localStorage.getItem("setTitles");
        userSets = userSets.split(",");

        if (userSets.includes(setName)) {
            userSets = userSets.filter(item => item != setName);

            localStorage.setItem(setName, setPokemon);
            userSets.push(setName);
            localStorage.setItem("setTitles", userSets);
        }
        else {
            localStorage.setItem(setName, setPokemon);
            userSets.push(setName);
            localStorage.setItem("setTitles", userSets);
        }
    }
    else {
        alert("Your set is empty!");
    }

}

// Add to custom
function addToCustom() {
    let setCode = "";
    if (!event.target.parentNode.dataset.code) {
        setCode = event.target.parentNode.parentNode.dataset.code;

        let addedPokemon = event.target.parentNode.parentNode.parentNode;
        addedPokemon.remove();

    }
    else {
        setCode = event.target.parentNode.dataset.code;
        let addedPokemon = event.target.parentNode.parentNode;
        addedPokemon.remove();
    }

    if (!customSetPokemon.includes(setCode)) {
        customSetPokemon.push(setCode);
    }
    else {
        alert("That pokemon is already in the set!");
    }

    refreshCustom();
}

async function refreshCustom() {
    customSetURL = [];
    customSetType = [];
    await getCustomInfo();
    let scrollOuter = document.getElementById("pokemonInList");

    while (scrollOuter.firstChild) {
        scrollOuter.removeChild(scrollOuter.firstChild);
    }

    if (customSetPokemon.length < 1) {
        let placeholder = document.createElement("div");
        placeholder.setAttribute("id", "pokemonInListPlaceholder");
        placeholder.textContent = "Pokemon in your set will apear here.";
        scrollOuter.appendChild(placeholder);
    }

    for (let i = 0; i < customSetPokemon.length; i++) {
        let newSetPokemonContainer = document.createElement("div");
        newSetPokemonContainer.setAttribute("class", "new-set-pokemon-container");
        scrollOuter.appendChild(newSetPokemonContainer);

        let pokemonLabel = document.createElement("label");
        pokemonLabel.setAttribute("for", "pokemon" + i);
        newSetPokemonContainer.appendChild(pokemonLabel);

        let checkbox = document.createElement("input");
        checkbox.setAttribute("class", "in-set-checkbox");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", "pokemon" + i);
        checkbox.setAttribute("checked", "");
        pokemonLabel.appendChild(checkbox);

        let checkedContainer = document.createElement("div");
        checkedContainer.setAttribute("class", "input-checked-container add");

        checkedContainer.setAttribute("onclick", "remove()");
        checkedContainer.setAttribute('data-code', customSetPokemon[i]);
        checkedContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" /></svg>';
        pokemonLabel.appendChild(checkedContainer);

        let newSetPokemon = document.createElement("div");
        newSetPokemon.setAttribute("class", "new-set-pokemon");
        newSetPokemonContainer.appendChild(newSetPokemon);

        let img = document.createElement("img");
        img.setAttribute("src", customSetURL[i]);
        img.setAttribute("alt", customSetPokemon[i]);
        newSetPokemon.appendChild(img);

        let name = document.createElement("h3");
        name.textContent = customSetPokemon[i].charAt().toUpperCase() + customSetPokemon[i].substring(1);
        newSetPokemon.appendChild(name);
    }

}

// Removes pokemon in the custom set
function remove() {
    let setCode = "";
    if (!event.target.parentNode.dataset.code) {
        setCode = event.target.parentNode.parentNode.dataset.code;

        let addedPokemon = event.target.parentNode.parentNode.parentNode.parentNode;
        addedPokemon.remove();

    }
    else {
        setCode = event.target.parentNode.dataset.code;
        let addedPokemon = event.target.parentNode.parentNode.parentNode;
        addedPokemon.remove();

    }
}

// This function hard refreshes the results because a new filter was applied
async function refreshResults() {
    let resultsContainer = document.getElementById("searchResults");
    while (resultsContainer.firstChild) {
        resultsContainer.removeChild(resultsContainer.firstChild);
    }
    await loadMore();
}

let maxLoad = resultsPokemon.length;
let nowLoadingLow = 0;
let nowLoadingHigh = 10;
let buttonContainerID = 0;

// Only show some of the results
async function loadMore() {
    let resultsContainer = document.getElementById("searchResults");
    let subResultsContainer = document.createElement("div");
    subResultsContainer.setAttribute("class", "scroll-outer");

    resultsContainer.appendChild(subResultsContainer);
    buttonContainerID = buttonContainerID + 1;

    for (let i = nowLoadingLow; i < nowLoadingHigh; i++) {
        let newSetPokemonContainer = document.createElement("div");

        newSetPokemonContainer.setAttribute("class", "new-set-pokemon-container " + resultsType[i]);

        let svgContainer = document.createElement("div");
        svgContainer.setAttribute("class", "input-checked-container add");
        svgContainer.setAttribute("onclick", "addToCustom()");
        svgContainer.setAttribute('data-code', resultsPokemon[i]);
        svgContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>';
        newSetPokemonContainer.appendChild(svgContainer);

        let newSetPokemon = document.createElement("div");
        newSetPokemon.setAttribute("class", "new-set-pokemon");
        newSetPokemonContainer.appendChild(newSetPokemon);

        let img = document.createElement("img");
        img.setAttribute("src", resultsURL[i]);
        img.setAttribute("alt", resultsPokemon[i]);
        newSetPokemon.appendChild(img);

        let name = document.createElement("h3");

        name.textContent = resultsPokemon[i].charAt().toUpperCase() + resultsPokemon[i].substring(1);

        newSetPokemon.appendChild(name);

        subResultsContainer.appendChild(newSetPokemonContainer);

    }
    let loadButton = document.createElement("button");
    loadButton.setAttribute("class", "loadMore");
    loadButton.setAttribute("onclick", "loadMore()");
    loadButton.setAttribute("id", buttonContainerID);
    loadButton.textContent = "Load More";
    resultsContainer.appendChild(loadButton);

    let removeID = buttonContainerID - 1;
    let removeButton = document.getElementById(removeID);
    if (removeButton) {
        removeButton.remove();
    }
    if (nowLoadingHigh >= resultsPokemon.length) {
        let removeLastButton = document.getElementById(buttonContainerID);
        removeLastButton.remove();
    }

    nowLoadingLow = nowLoadingHigh;
    nowLoadingHigh = nowLoadingHigh + 10;
}

async function random() {
    let loading = document.getElementById("loading");
    loading.textContent = "Loading, please wait...";
    let min = 1;
    let max = 898;
    let resultsPokemonID = [];
    for (let i = 0; i < 50; i++) {
        resultsPokemonID.push(getRndInteger(min, max));
    }
    resultsPokemon = await idToName(resultsPokemonID);

    await getResultsInfo();
    refreshResults();
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

async function idToName(resultsPokemonID) {
    let resultsPokemonNames = [];
    const pokemonAPIurl = "//pokeapi.co/api/v2/pokemon/";
    for (let i = 0; i < resultsPokemonID.length; i++) {
        let tempURL = pokemonAPIurl + resultsPokemonID[i];
        await fetch(tempURL)
            .then((response) => response.json())
            .then((info) => {
                resultsPokemonNames.push(info.name);
            });
    }
    return resultsPokemonNames;
}

async function editSet() {
    let setCode = event.target.dataset.code;
    let editSetTitle = setCode;

    let editSetPokemon = localStorage.getItem(setCode);
    editSetPokemon = editSetPokemon.split(",");

    document.getElementById("review-title").remove();

    createNewSet(editSetTitle, editSetPokemon);
}
