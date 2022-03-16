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
// Note: sometime in the future, I want the menu to slowly transition out instead of snapping

// Pokemon Api
// fetch("https://pokeapi.co/api/v2/pokemon/charmander")
//     .then(res => res.json())
//     .then(data => console.log(data));

const pokemonAPIurl = "//pokeapi.co/api/v2/pokemon/charmander";
fetch(pokemonAPIurl)
    .then((response) => response.json())
    .then((pokemonInfo) => {
        console.log(pokemonInfo);
        console.log(pokemonInfo.name);
        let pokemonName = pokemonInfo.name;
        // return pokemonInfo;
    });
console.log(pokemonName);
