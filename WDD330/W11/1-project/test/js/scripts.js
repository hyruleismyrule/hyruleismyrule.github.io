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