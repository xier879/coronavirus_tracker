// Create a map object
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3,

});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
}).addTo(myMap);

var jsonFeatures = [];
var json_test = {};

// main.js
// const countries = import('./json_geomap_dummy01.json');
// console.log(countries); // { hello: 'world' }
// function readTextFile(file, callback) {
//   var rawFile = new XMLHttpRequest();
//   rawFile.overrideMimeType("application/json");
//   rawFile.open("GET", file, true);
//   rawFile.onreadystatechange = function() {
//       if (rawFile.readyState === 4 && rawFile.status == "200") {
//           callback(rawFile.responseText);
//       }
//   }
//   rawFile.send(null);
// }
// // Country data
// readTextFile(, function(data){
//   json_test = JSON.parse(data);
//   console.log(json_test);
// });

d3.json("data.json", function(x) {
  console.log(x);

  for ( var i = 0; i < x.length; i++) {
    var Country = x[i].Country;
    var Cases = +x[i].TotalCases;
    var Deaths = +x[i].TotalDeaths;
    var NewCases = +x[i].NewCases;
    var NewDeaths = +x[i].NewDeaths;
    var MortRate = (( +x[i].TotalDeaths / +x[i].TotalCases ) * 100).toFixed(2) + '%';
    var coords = [x[i].Latitude, x[i].Longitude]
    
      // Add circles to map
    var radius;

    if (Cases < 10) {
      radius = 200;
    }
    else if (10 <= Cases && Cases < 50) {
      radius = 500;
    }
    else if (50 <= Cases && Cases < 500) {
      radius = 1000;
    }
    else if (500 <= Cases && Cases< 5000) {
      radius = 2000;
    }
    else if (5000 <= Cases) {
      radius = 5000;
    }
    console.log(Country, Cases, radius, Deaths, NewCases, NewDeaths, MortRate, coords);
    L.circle(coords, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "red",
    // Adjust radius
    radius: radius * 100
    }).bindPopup("<h1>" + Country + "</h1> <hr> <h3>Total Cases: " + Cases + "</h3> ").addTo(myMap);
}

});

function parsethruJson(json) {
  for (var k in json) (x => {
  console.log(x[TotalCases])
  });
};

// parsethruJson(json_test);

// // Loop through the cities array and create one marker for each city object
// for (var i = 0; i < countries.length; i++) {

//   var test_coords = [Number(countries[i][i].Latitude), Number(countries[i][i].Longitude)]
//   // Conditionals for countries points
//   var color = "";
//   if (9999 > countries[i][i].Total_Cases > 2000) {
//     color = "red";
//   }
//   else if (countries[i][i].Total_Cases > 10000) {
//     color = "black";
//   }
//   else if (countries[i][i].Total_Cases > 90) {
//     color = "green";
//   }
//   else {
//     color = "purple";
//   }


