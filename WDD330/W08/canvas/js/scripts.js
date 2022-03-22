// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");
// // context.strokeStyle = "red";
// // context.fillStyle = "rgba(0, 0, 255, 0.5)";
// // context.fillRect(10, 10, 100, 100);   
// // context.strokeRect(10, 10, 100, 100);

// function drawPattern() {
//     // …
//     let img = new Image();
//     img.src = "/Users/valentine/Desktop/hyruleismyrule.github.io/WDD330/W08/canvas/images/bg-bike.png";
//     img.onload = function() {
//     let pattern = context.createPattern(img, "repeat"); 
//     context.fillStyle = pattern;                        
//     context.fillRect(10, 10, 100, 100);                  
//     context.strokeRect(10, 10, 100, 100);             
//     };
// }
// 
var canvas = document.getElementById("myCanvas"); 
var context = canvas.getContext("2d"); 
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
// context.fillRect(10, 10, 100, 100);   
// context.strokeRect(10, 10, 100, 100);
// function drawPattern() {
//     var canvas = document.getElementById("demo2");
//     var context = canvas.getContext("2d");
//     context.strokeStyle = "red";
    
//     var img = new Image();
//     img.src = "images/bg-bike.png";
//     img.onload = function() { 
//     };            
// }
function drawPattern() {
    // …
    var img = new Image();
    img.src = "images/bg-bike.png";
    img.onload = function() {
    var pattern = context.createPattern(img, "repeat"); 
    context.fillStyle = pattern;                        
    context.fillRect(10, 10, 100, 100);                  
    context.strokeRect(10, 10, 100, 100);             
    };
}
function drawGradient() {
    // …
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue"); 
    gradient.addColorStop(1, "white"); 
    context.fillStyle = gradient; 
    context.fillRect(10, 10, 100, 100); 
    context.strokeRect(10, 10, 100, 100); 
}s