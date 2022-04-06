// This function hard refreshes the results because a new filter was applied
async function refreshResults() {
    // let resultsContainer = document.getElementById("pokemonInResults");
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
    // subResultsContainer.setAttribute("id", buttonContainerID);
    resultsContainer.appendChild(subResultsContainer);
    buttonContainerID = buttonContainerID + 1;

    for (i = nowLoadingLow; i < nowLoadingHigh; i++) {
        let newSetPokemonContainer = document.createElement("div");
        newSetPokemonContainer.setAttribute("class", "new-set-pokemon-container");

        let svgContainer = document.createElement("div");
        svgContainer.setAttribute("class", "input-checked-container add");
        svgContainer.setAttribute("onclick", "addToCustom()");
        svgContainer.setAttribute('data-code', resultsPokemon[i]);
        svgContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>'
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
    loadButton.setAttribute("onclick", "loadMore()")
    loadButton.setAttribute("id", buttonContainerID);
    loadButton.textContent = "Load More";
    resultsContainer.appendChild(loadButton);

    nowLoadingLow = nowLoadingHigh;
    nowLoadingHigh = nowLoadingHigh + 10;
    let removeID = buttonContainerID - 1;
    let removeButton = document.getElementById(removeID);
    removeButton.remove();
}

