function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

let oLastModif = new Date(document.lastModified);

let optionsMonth = { month: 'long', };
let optionsDay = { weekday: 'long', };

let day = oLastModif.toLocaleDateString("en-US", optionsDay);
let date = oLastModif.getDate();
let month = oLastModif.toLocaleDateString("en-US", optionsMonth);
let year = oLastModif.getFullYear();

let dateString = day + ", " + date + " " + month + " " + year;

document.getElementById('lastUpdated').innerHTML = dateString;


const today = new Date();
// console.log(today);

const dayNumber = today.getDay();
// console.log(dayNumber);

const element = document.getElementById("message")

if (element) {
    if (dayNumber == 5) {
        element.classList.add("showme")
    } else {
        element.classList.add("hideme")
    }
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

// Cards from JSON
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        console.table(jsonObject);// temporary checking for valid response and data parsing
        for (let i = 0; i < towns.length; i++) {
            if (i == 0 || i == 2 || i == 6) {
            let card = document.createElement('section');
            let text = document.createElement('div');
            let name = document.createElement('h2');
            let motto = document.createElement('h3');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p');
            let photo = document.createElement('img');

            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
            averageRainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

            photo.setAttribute('src', 'images/town/' + towns[i].photo);
            photo.setAttribute('alt', towns[i].name);

            // card.towns[2].setAttribute('id', "center");

            card.appendChild(text);
            text.appendChild(name);
            text.appendChild(motto);
            text.appendChild(yearFounded);
            text.appendChild(currentPopulation);
            text.appendChild(averageRainfall);
            card.appendChild(photo);

            document.querySelector('div.cards').appendChild(card);

            if (i == 2 ) {
                card.setAttribute('id', "center");
                document.querySelector('div.cards').appendChild(card);
            }

            if (i == 0 ) {
                card.setAttribute('id', "left");
                document.querySelector('div.cards').appendChild(card);
            }
        }
        }
    });


/*
    if (element) {
        if (dayNumber == 5 ) {
            element.classList.add("showme")
        } else {
            element.classList.add("hideme")
        }
        }
*/
// let options = { year: '2-digit', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
// var options = { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
// console.log(today.toLocaleDateString("en-US")); // 9/17/2016
// console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
// document.getElementById("year").innerHTML = new Date().getFullYear();