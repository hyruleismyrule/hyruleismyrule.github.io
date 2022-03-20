import { getJSON, getLocation } from './utilities.js';
const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

// Trying to get the right URL
// const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

// function testGetQuakesForLocation() {
//   // call the getLocation function to get the lat/long

//   // use that information to build out the correct URL
//   const geoUrl = baseUrl + // add location information here
//   // use the url to request the correct quakes 

//   //log out the quakes for now.
// }
// getQuakesForLocation();

// getLocation()
console.log(getLocation)
navigator.geolocation.getCurrentPosition(function (position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    console.log(lat);
    console.log(long);
});

// console.log(latitude)

function testGetQuakesForLocation() {
    getLocation()
    // console.log(response)
    // call the getLocation function to get the lat/long
  
    // use that information to build out the correct URL
    // const geoUrl = baseUrl + // add location information here
    // use the url to request the correct quakes 
  
    //log out the quakes for now.
}
testGetQuakesForLocation()