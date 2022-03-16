// Working Old Weather api
const currentWeatherAPIurl = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=28e498ae581a0633cfff6d7d29104fdb&units=imperial";
fetch(currentWeatherAPIurl)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);
    });
// Test Api
fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then(res => res.json())
    .then(data => console.log(data))
// University Api
fetch("http://universities.hipolabs.com/search?country=United+States")
    .then(res => res.json())
    .then(data => console.log(data))
// Zip Code Api
fetch("https://api.zippopotam.us/us/33162")
    .then(res => res.json())
    .then(data => console.log(data))
// US population Api
fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then(res => res.json())
    .then(data => console.log(data))
// US population Api
fetch("https://pokeapi.co/api/v2/pokemon/charmander")
    .then(res => res.json())
    .then(data => console.log(data))

    // Old Prophets js
// const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

// fetch(requestURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (jsonObject) {
//         const prophets = jsonObject['prophets'];
//         console.table(jsonObject);// temporary checking for valid response and data parsing
//         for (let i = 0; i < prophets.length; i++) {
//             let card = document.createElement('section');
//             let h2 = document.createElement('h2');
//             let birthDate = document.createElement('p');
//             let birthPlace = document.createElement('p');
//             let image = document.createElement('img');

//             h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
//             birthDate.textContent = "Date of Birth: " + prophets[i].birthdate;
//             birthPlace.textContent = "Place of Birth: " + prophets[i].birthplace;
//             image.setAttribute('src', prophets[i].imageurl);
//             image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + " - " + i);

//             card.appendChild(h2);
//             card.appendChild(birthDate);
//             card.appendChild(birthPlace);
//             card.appendChild(image);

//             document.querySelector('div.cards').appendChild(card);
//         }
//     });



const pokemonAPIurl = "//pokeapi.co/api/v2/pokemon/charizard";
fetch(pokemonAPIurl)
    .then((response) => response.json())
    .then((pokemonInfo) => {
        console.log(pokemonInfo);
        // Data collected, time to start creating a flash card.
        let name = pokemonInfo.name;
        // let id = pokemonInfo.id;
        // let species = pokemonInfo.species.name; // Same as name
        let type = pokemonInfo.types[0].type.name;
        let artURL = pokemonInfo.sprites.other["official-artwork"].front_default;
        let firstGame = pokemonInfo.game_indices[0].version.name;
        console.log(name);
        // console.log(id);
        // console.log(species);
        console.log(type);
        console.log(artURL);
        console.log(firstGame);
        // Get evolution chain // IDs don't match
        // let evolutionURL = "https://pokeapi.co/api/v2/evolution-chain/" + id;
        // fetch(evolutionURL)
        //     .then((response) => response.json())
        //     .then((evolutionInfo) => {
        //         console.log(evolutionInfo);
        //     });
    });