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

// Local Storage
let userSets = [];
function saveSet() {
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
console.log(localStorage);
// localStorage.clear();

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
    // thumbnail.setAttribute("onclick", "viewSet(setName)");

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
    // console.log(event.target);
    setCode = event.target.dataset.code;
    // console.log(setCode);
    // Removes and Creates new title
    let changeTitle = document.getElementById("essentialTitle");
    changeTitle.removeChild(changeTitle.firstElementChild);
    let newTitle = document.createElement("h1")
    newTitle.textContent = "Review";
    newTitle.setAttribute("id", "review-title");
    changeTitle.appendChild(newTitle);
    // Removes and creates new essential div
    let changeDiv = document.getElementById("essentialDivContainer");
    changeDiv.removeChild(changeDiv.firstElementChild);
    let newDiv = document.createElement("div")
    newDiv.setAttribute("id", "review");
    changeDiv.appendChild(newDiv);
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
        // card.setAttribute('class', "mySlides");
        card.setAttribute('class', "flash-card mySlides" + " "+displayTypes[i]);
        // card.setAttribute('class', displayTypes[i]);

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
        // document.getElementById("bottom-nav").setAttribute('id', "show");
    }

}
