/*{
    "id": 5604473,
    "name": "Preston",
    "state": "ID",
    "country": "US",
    "coord": {
        "lon": -111.876617,
        "lat": 42.09631
    }
},
*/

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=28e498ae581a0633cfff6d7d29104fdb&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    const imagesrc = 'images/day-and-night-icons/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });
  

/*
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
*/