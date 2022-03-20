const todayDayNumber = today.getDay();
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

// Weather Forecast
const forecastAPIurl = "//api.openweathermap.org/data/2.5/forecast?q=Preston,ID,US&appid=abbf45e289104d649c35aef8e8c97def&units=imperial";

fetch(forecastAPIurl)
    .then((response) => response.json())
    .then((forecastInfo) => {
        console.log(forecastInfo);

        let forecastList = forecastInfo.list;
        let forecastDayNumber = todayDayNumber;

        for (let i = 0; i < forecastList.length; i++) {
            let time = forecastList[i].dt_txt;
            if (time.includes('21:00:00')) {

                let theDayName = document.createElement('h3');
                theDayName.textContent = weekday[forecastDayNumber];
                console.log('>' + weekday[forecastDayNumber]);

                let theTemp = document.createElement('p');
                theTemp.textContent = forecastList[i].main.temp + '\xB0';

                let iconcode = forecastList[i].weather[0].icon;

                let iconPath = "images/day-and-night-icons/" + iconcode + ".png";
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
            } // end if

            forecastDayNumber += 1;
            if (forecastDayNumber === 7) {
                forecastDayNumber = 0;
            }

        } // end for
    }); //end of "then" fat arrow function

// CURRENT WEATHER / HERO IMAGE
const currentWeatherAPIurl = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=28e498ae581a0633cfff6d7d29104fdb&units=imperial";

fetch(currentWeatherAPIurl)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);

        document.getElementById('speed').textContent = weatherInfo.wind.speed;
        document.getElementById('temp').textContent = weatherInfo.main.temp;

        let currentWindSpeed = weatherInfo.wind.speed;
        let currentTemperature = weatherInfo.main.temp;

        let windChill = 35.74 + (0.6215 * currentTemperature) - (35.75 * Math.pow(currentWindSpeed, 0.16)) +
            (0.4275 * currentTemperature * Math.pow(currentWindSpeed, 0.16));

        windChill = Math.round(windChill);

        if (currentTemperature <= 50 && currentWindSpeed > 3) {
            document.getElementById("chill").textContent = "Wind Chill: " + windChill + "°";
        } else {
            document.getElementById("chill").textContent = "No Wind Chill Today.";
        }

    }); //end of "then" fat arrow function

    /*document.getElementById("place").innerHTML = weatherInfo.name;
    document.getElementById("currentTemp").innerHTML = Math.round(
      weatherInfo.main.temp
    );
    document.getElementById("windSpeed").innerHTML = Math.round(
      weatherInfo.wind.speed
    );
    document.getElementById("description").innerHTML =
      weatherInfo.weather[0].description;
    document.getElementById("humidity").innerHTML = weatherInfo.main.humidity;*/