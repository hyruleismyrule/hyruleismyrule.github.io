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

const pokemonAPIurl = "//pokeapi.co/api/v2/pokemon/charizard";
fetch(pokemonAPIurl)
    .then((response) => response.json())
    .then((pokemonInfo) => {
        // console.log(pokemonInfo);
        let name = pokemonInfo.name;
        // Capitalize the first letter
        name = name.charAt().toUpperCase() + name.substring(1)
        // console.log(name.charAt().toUpperCase() + name.substring(1))
        let artURL = pokemonInfo.sprites.other["official-artwork"].front_default;
        // let type = pokemonInfo.types[0].type.name;
        // let firstGame = pokemonInfo.game_indices[0].version.name;
        // let typeElement = document.createElement("p");
        // console.log(name);
        // console.log(type);
        // console.log(artURL);
        // console.log(firstGame);
        let card = document.createElement("div");

        let nameElement = document.createElement("h3");
        let imageElement = document.createElement("img");

        nameElement.textContent = name;
        imageElement.setAttribute('src', artURL);
        imageElement.setAttribute('alt', name);

        card.appendChild(nameElement);
        card.appendChild(imageElement);

        document.getElementById("mysets").appendChild(card);
    });
