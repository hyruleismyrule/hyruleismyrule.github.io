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

// Home Contact us
function toThanks() {
    window.location.href = "thanks.html";
}

// Home Join Us
function toMembership() {
    window.location.href = "membership.html";
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

// Year for Footer
document.getElementById('year').innerHTML = year;

// Weather Alert Close Button Top
function closeAlertTop() {
    document.getElementById("alert-top").setAttribute('class', "hide");
}

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

const OneCallWeatherAPIurl = "//api.openweathermap.org/data/2.5/onecall?lat=28.1614&lon=-81.601738&appid=28e498ae581a0633cfff6d7d29104fdb&units=imperial";
fetch(OneCallWeatherAPIurl)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);
        // Current Weather
        document.getElementById('current-weather').textContent = weatherInfo.current.weather[0].description;
        document.getElementById('current-temperature').textContent = Math.round(weatherInfo.current.temp) + "°";
        document.getElementById('current-humidity').textContent = Math.round(weatherInfo.current.humidity) + "%";
        document.getElementById('current-feels-like').textContent = Math.round(weatherInfo.current.feels_like) + "°";
        // Weather Forecast
        let forecastList = weatherInfo.daily;
        let forecastDayNumber = todayDayNumber;
        let forcastCount = 0;
        for (let i = 0; i < forecastList.length && forcastCount <= 2; i++) {
            let theDayName = document.createElement('h3');
            theDayName.textContent = weekday[forecastDayNumber];
            let theTemp = document.createElement('p');
            theTemp.textContent = Math.round(forecastList[i].temp.day) + '\xB0';
            let iconcode = forecastList[i].weather[0].icon;
            let iconPath = "images/home/new-forecast-icons/" + iconcode + ".png";
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
            forecastDayNumber += 1;
            if (forecastDayNumber === 7) {
                forecastDayNumber = 0;
            }
        }
        // Alert
        if (weatherInfo.alerts) {
            document.getElementById("weather-alert-top").textContent = weatherInfo.alerts[0].description;
            document.getElementById("weather-alert-bottom").textContent = weatherInfo.alerts[0].description;
        } else {
            document.getElementById("alert-top").setAttribute('class', "hide");
            document.getElementById("alert").setAttribute('class', "hide");
            document.getElementById("weather-top-row").setAttribute('class', "full-width-current");
        }
    });

// Davenport Piechart
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    let data = google.visualization.arrayToDataTable([
        ['Race', 'Percent of the Population'],
        ['White', 3612],
        ['Black or African American', 786],
        ['Two or More Races', 135],
        ['Other', 106],
        ['Asian', 43]
    ]);
    let options = {
        backgroundColor: "transparent",
        fontName: "EB Garamond",
        legend: {position: 'bottom'}
    };
    let chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}