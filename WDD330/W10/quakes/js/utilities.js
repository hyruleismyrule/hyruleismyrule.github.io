// URL for testing
const url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02"

// Code provided by the instructor
export function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const getLocation = function (options) {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};

// Working test that prints results to the console
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });