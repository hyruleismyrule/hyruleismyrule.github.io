
const tempNumber = parseFloat(document.getElementById("temp").textContent);
// console.log(tempNumber);

const  speedNumber = parseFloat(document.getElementById("speed").textContent);
// console.log(speedNumber);

let windChill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber,0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber,0.16));
windChill = Math.round(windChill);

if (tempNumber <= 50 && speedNumber >3) {
    document.getElementById("chill").textContent = "Wind Chill: "+windChill+"°";

} else {
    document.getElementById("chill").textContent = "No Wind Chill Today.";
}