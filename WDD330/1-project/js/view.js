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
// Hard Coded Default Set
let setName = "Big 3"
let setPokemon = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise"];
// The user created sets will be in another array
localStorage.setItem(setName, setPokemon);
console.log(localStorage);
// localStorage.clear();

getThumbnail(setName, setPokemon)

async function getThumbnail(setName, setPokemon) {
    const pokemonAPIurlBase = "//pokeapi.co/api/v2/pokemon/";
    // Note this will only work one time, so I will need to make it into a for loop so that it will make more than one thumbnail
    let tempURL = pokemonAPIurlBase + setPokemon[0];
    await fetch(tempURL)
        .then((response) => response.json())
        .then((imageInfo) => {
            let artURL = imageInfo.sprites.other["official-artwork"].front_default;
            let type = imageInfo.types[0].type.name;
            buildThumbnails(setName, setPokemon, artURL, type);
        });
}

function buildThumbnails(setName, setPokemon, artURL, type) {
    let container = document.getElementById("viewSets");

    let thumbnail = document.createElement("div");
    thumbnail.setAttribute("class", "thumbnail-container" + " " + type);

    let setTitle = document.createElement("h3");
    setTitle.textContent = setName;

    let thumbnailImage = document.createElement("img")
    thumbnailImage.setAttribute('src', artURL);
    thumbnailImage.setAttribute('alt', setPokemon[0]);


    thumbnail.appendChild(thumbnailImage);
    thumbnail.appendChild(setTitle);

    let plusSvgHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>'

    let newSetIcon = document.createElement("div");
    newSetIcon.setAttribute("class", "thumbnail-container new");
    newSetIcon.setAttribute("onclick", "chooseNewSet()");

    let svgContainer = document.createElement("div");
    svgContainer.setAttribute("class", "new-set-icon-container");
    svgContainer.innerHTML = plusSvgHTML;

    newSetIcon.appendChild(svgContainer);

    container.appendChild(thumbnail);
    container.appendChild(newSetIcon);
}




// if (document.getElementById("viewSets")) {
//     let container = document.getElementById("viewSets");
//     let thumbnail = document.createElement("div");
//     thumbnail.setAttribute("class", "thumbnail");
//     let thumbnailImage = document.createElement("img")

//     // thumbnailImage.setAttribute('src', artURL);
//     // thumbnailImage.setAttribute('alt', name);
// }
