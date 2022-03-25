// Local Storage
let userSets = [];
function saveDefaultSets() {
    // these should be passed into the function as variables
    let setName = "Bulbasaur";
    let setPokemon = ["bulbasaur", "ivysaur", "venusaur"];

    // For efficiancy this needs to become some kind of loop
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
// saveDefaultSets();
console.log(localStorage);
// localStorage.clear();

checkDefaults(localStorage);

function checkDefaults(localStorage) {
    let setTitles = localStorage.getItem("setTitles");
    if (!setTitles.includes("Bulbasaur") && !setTitles.includes("Charmander") && !setTitles.includes("Squirtle")) {
        saveDefaultSets();
    }
}


// async function getThumbnail(setName, setPokemon) {
async function getThumbnail(localStorage) {
    const pokemonAPIurlBase = "//pokeapi.co/api/v2/pokemon/";
    // Note this will only work one time, so I will need to make it into a for loop so that it will make more than one thumbnail
    let setTitles = localStorage.getItem("setTitles");
    setTitles = setTitles.split(",");
    for (let i = 0; i < setTitles.length; i++) {
        // console.log(setTitles[i]);
        let setName = setTitles[i];
        // console.log(setName);
        let setPokemon = localStorage.getItem(setTitles[i]);
        setPokemon = setPokemon.split(",");
        // console.log(setPokemon[0]);
        let tempURL = pokemonAPIurlBase + setPokemon[0];
        await fetch(tempURL)
            .then((response) => response.json())
            .then((imageInfo) => {
                let artURL = imageInfo.sprites.other["official-artwork"].front_default;
                let type = imageInfo.types[0].type.name;
                buildThumbnails(setName, setPokemon, artURL, type);
            });
    }
    newSetButton()
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

    let thumbnailImage = document.createElement("img")
    thumbnailImage.setAttribute('src', artURL);
    thumbnailImage.setAttribute('alt', setPokemon[0]);
    thumbnailImage.setAttribute('data-code', setName);

    thumbnail.appendChild(thumbnailImage);
    thumbnail.appendChild(setTitle);

    container.appendChild(thumbnail);
}

function newSetButton() {
    let container = document.getElementById("viewSets");
    let plusSvgHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>'

    let newSetIcon = document.createElement("div");
    newSetIcon.setAttribute("class", "thumbnail-container new");
    newSetIcon.setAttribute("onclick", "chooseNewSet()");

    let svgContainer = document.createElement("div");
    svgContainer.setAttribute("class", "new-set-icon-container");
    svgContainer.innerHTML = plusSvgHTML;

    newSetIcon.appendChild(svgContainer);
    container.appendChild(newSetIcon);
}

// Linking thumbnails to sets
function viewSet() {
    setCode = event.target.dataset.code;

    // Removes and Creates new title
    let changeTitle = document.getElementById("essentialTitle");
    changeTitle.removeChild(changeTitle.firstElementChild);
    changeTitle.setAttribute("class", "back-container");

    let backArrowContainer = document.createElement("div");
    backArrowContainer.setAttribute("class", "arrow");
    backArrowContainer.setAttribute("onclick", "displayThumbnails()");
    let backSvgHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z" /></svg>'
    backArrowContainer.innerHTML = backSvgHTML;
    changeTitle.appendChild( backArrowContainer);

    let newTitle = document.createElement("h1")
    newTitle.textContent = "Back";
    newTitle.setAttribute("id", "review-title");
    changeTitle.appendChild(newTitle);

    // Removes and creates new essential div
    let changeDiv = document.getElementById("essentialDivContainer");
    changeDiv.removeChild(changeDiv.firstElementChild);
    let newDiv = document.createElement("div")
    newDiv.setAttribute("id", "review");
    changeDiv.appendChild(newDiv);

    setDetails(setCode)
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
        name = name.charAt().toUpperCase() + name.substring(1)

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
    let prevSvgHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z" /></svg>'
    prevContainer.innerHTML = prevSvgHTML;

    let nextContainer = document.createElement("div");
    nextContainer.setAttribute("class", "arrow next");
    nextContainer.setAttribute("onclick", "plusSlides(1)");
    let nextSvgHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z" /></svg>'
    nextContainer.innerHTML = nextSvgHTML;

    bottomNav.appendChild(prevContainer);
    bottomNav.appendChild(nextContainer);

    document.getElementById("review").appendChild(bottomNav);
}

// Making the slide show
let slideIndex = 1;
// showSlides(slideIndex);

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

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
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

    let newTitle = document.createElement("h1")
    newTitle.textContent = "My Sets";
    newTitle.setAttribute("id", "view-sets-title");
    changeTitle.appendChild(newTitle);

    // Removes and creates new essential div
    let changeDiv = document.getElementById("essentialDivContainer");
    changeDiv.removeChild(changeDiv.firstElementChild);
    let newDiv = document.createElement("div")
    newDiv.setAttribute("id", "viewSets");
    changeDiv.appendChild(newDiv);

    // Reinitialize display arrays
    displayTitle = "";
    displayNames = [];
    displayImages = [];
    displayTypes = [];

    getThumbnail(localStorage);
}