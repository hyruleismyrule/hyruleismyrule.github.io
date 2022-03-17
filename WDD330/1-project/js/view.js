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
    
    container.appendChild(thumbnail);
}




// if (document.getElementById("viewSets")) {
//     let container = document.getElementById("viewSets");
//     let thumbnail = document.createElement("div");
//     thumbnail.setAttribute("class", "thumbnail");
//     let thumbnailImage = document.createElement("img")

//     // thumbnailImage.setAttribute('src', artURL);
//     // thumbnailImage.setAttribute('alt', name);
// }
