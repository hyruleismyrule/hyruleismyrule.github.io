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

// Default Flash Cards
let defaultSet = []
const defaultPokemonAPIurl = "//pokeapi.co/api/v2/pokemon?limit=10";
fetch(defaultPokemonAPIurl)
    .then((response) => response.json())
    .then((pokemonInfo) => {
        console.log(pokemonInfo);
        for (let i = 0, len = pokemonInfo.results.length; i < len; i++) {
            defaultSet.push(pokemonInfo.results[i].name);
        }
        console.log(defaultSet);
        // Create Flash Cards for all 10 pokemon
        const pokemonAPIurlBase = "//pokeapi.co/api/v2/pokemon/";
        for (let i = 0, len = defaultSet.length; i < len; i++) {
            let tempURL = pokemonAPIurlBase + defaultSet[i];
            fetch(tempURL)
                .then((response) => response.json())
                .then((pokemonInfo) => {
                    // console.log(pokemonInfo);
                    let name = pokemonInfo.name;
                    // Capitalize the first letter
                    name = name.charAt().toUpperCase() + name.substring(1)
                    let artURL = pokemonInfo.sprites.other["official-artwork"].front_default;
                    let card = document.createElement("div");
                    card.setAttribute('class', "flash-card");

                    let nameElement = document.createElement("h2");
                    let imageElement = document.createElement("img");

                    nameElement.textContent = name;
                    imageElement.setAttribute('src', artURL);
                    imageElement.setAttribute('alt', name);

                    card.appendChild(nameElement);
                    card.appendChild(imageElement);

                    document.getElementById("mysets").appendChild(card);
                });
        }
    });




// // const pokemonAPIurl = "//pokeapi.co/api/v2/pokemon/charizard";
// const pokemonAPIurl = "//pokeapi.co/api/v2/pokemon/charizard";
// fetch(pokemonAPIurl)
//     .then((response) => response.json())
//     .then((pokemonInfo) => {
//         // console.log(pokemonInfo);
//         let name = pokemonInfo.name;
//         // Capitalize the first letter
//         name = name.charAt().toUpperCase() + name.substring(1)
//         let artURL = pokemonInfo.sprites.other["official-artwork"].front_default;
//         let card = document.createElement("div");
//         card.setAttribute('class', "flash-card");

//         let nameElement = document.createElement("h2");
//         let imageElement = document.createElement("img");

//         nameElement.textContent = name;
//         imageElement.setAttribute('src', artURL);
//         imageElement.setAttribute('alt', name);

//         card.appendChild(nameElement);
//         card.appendChild(imageElement);

//         document.getElementById("mysets").appendChild(card);
//     });
