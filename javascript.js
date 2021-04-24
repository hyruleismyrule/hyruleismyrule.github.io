let oLastModif = new Date(document.lastModified);

var options = { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'};


// console.log(today.toLocaleDateString("en-US")); // 9/17/2016
// console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016

document.getElementById('lastUpdated').innerHTML = oLastModif.toLocaleString("en-US", options);
