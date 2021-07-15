// Web font loader
WebFont.load({
    google: {
        families: ['EB Garamond', 'Catamaran']
    }
});

// Hamburger menu toggle
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

// Last updeted
let oLastModif = new Date(document.lastModified);
let optionsMonth = { month: 'long', };
let optionsDay = { weekday: 'long', };
let day = oLastModif.toLocaleDateString("en-US", optionsDay);
let date = oLastModif.getDate();
let month = oLastModif.toLocaleDateString("en-US", optionsMonth);
let year = oLastModif.getFullYear();
let dateString = day + ", " + date + " " + month + " " + year;
document.getElementById('lastUpdated').innerHTML = dateString;

// Weather Alert Close Button Top
function closeAlertTop() {
    document.getElementById("alert-top").setAttribute('class', "hide");
}
// Weather Alert Close Button Bottom
function closeAlert() {
    document.getElementById("alert").setAttribute('class', "hide");
    // document.getElementById("weather-top-row").style.display = 'block';
    document.getElementById('weather-top-row').style.display = 'block';
    // document.getElementById("current-weather-container").setAttribute('class', "full-width-current");
}


// Home - Current Weather API
// api key
// 28e498ae581a0633cfff6d7d29104fdb
// Davenport, FL City Info
// {
//     "id": 4152805,
//     "name": "Davenport",
//     "state": "FL",
//     "country": "US",
//     "coord": {
//         "lon": -81.601738,
//         "lat": 28.1614
//     }
// }
// API Address for current weather
// api.openweathermap.org/data/2.5/weather?id=4152805&appid=28e498ae581a0633cfff6d7d29104fdb&units=imperial
// API Address for 5 day forecast weather
// api.openweathermap.org/data/2.5/forecast?id=4152805&appid=28e498ae581a0633cfff6d7d29104fdb&units=imperial

// api.openweathermap.org/data/2.5/onecall?lat=28.1614&lon=-81.601738&appid=28e498ae581a0633cfff6d7d29104fdb&units=imperial

const currentWeatherAPIurl = "//api.openweathermap.org/data/2.5/weather?id=4152805&appid=28e498ae581a0633cfff6d7d29104fdb&units=imperial";
fetch(currentWeatherAPIurl)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);
        document.getElementById('current-weather').textContent = weatherInfo.weather[0].description;
        document.getElementById('current-temperature').textContent = Math.round(weatherInfo.main.temp) + "°";
        document.getElementById('current-humidity').textContent = Math.round(weatherInfo.main.humidity) + "%";
        document.getElementById('current-feels-like').textContent = Math.round(weatherInfo.main.feels_like) + "°";
    });

// Home - Current Weather API
const today = new Date();
const todayDayNumber = today.getDay() + 1;
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const forecastAPIurl = "//api.openweathermap.org/data/2.5/forecast?id=4152805&appid=28e498ae581a0633cfff6d7d29104fdb&units=imperial";
fetch(forecastAPIurl)
    .then((response) => response.json())
    .then((forecastInfo) => {
        console.log(forecastInfo);
        let forecastList = forecastInfo.list;
        let forecastDayNumber = todayDayNumber;
        let forcastCount = 0;
        for (let i = 0; i < forecastList.length && forcastCount <= 2; i++) {
            let time = forecastList[i].dt_txt;
            if (time.includes('21:00:00')) {
                let theDayName = document.createElement('h3');
                theDayName.textContent = weekday[forecastDayNumber];
                let theTemp = document.createElement('p');
                theTemp.textContent = Math.round(forecastList[i].main.temp) + '\xB0';
                let iconcode = forecastList[i].weather[0].icon;
                let iconPath = "images/home/forecast-icons/" + iconcode + ".png";
                let theIcon = document.createElement('img');
                theIcon.src = iconPath;
                let theDay = document.createElement('div');
                theDay.appendChild(theDayName);
                theDay.appendChild(theIcon);
                theDay.appendChild(theTemp);
                theDay.setAttribute('class', "forecast-box");
                theDayName.setAttribute('class', "forecast-name");
                theTemp.setAttribute('class', "forecast-temp");
                theIcon.setAttribute('class', "forecast-icon");
                document.getElementById('forecast').appendChild(theDay);
                forcastCount++;
            }
            forecastDayNumber += 1;
            if (forecastDayNumber === 7) {
                forecastDayNumber = 0;
            }
        }
    });
