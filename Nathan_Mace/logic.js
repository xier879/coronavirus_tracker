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


// main.js
// const countries = import('./json_geomap_dummy01.json');
// console.log(countries); // { hello: 'world' }
function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}
// Country data
readTextFile("../Roaya_H_group_project2/data.json", function(data){
  var json_test = JSON.parse(data);
  console.log(json_test);
});


// Loop through the cities array and create one marker for each city object
for (var i = 0; i < countries.length; i++) {

  var test_coords = [Number(countries[i][i].Latitude), Number(countries[i][i].Longitude)]
  // Conditionals for countries points
  var color = "";
  if (9999 > countries[i][i].Total_Cases > 2000) {
    color = "red";
  }
  else if (countries[i][i].Total_Cases > 10000) {
    color = "black";
  }
  else if (countries[i][i].Total_Cases > 90) {
    color = "green";
  }
  else {
    color = "purple";
  }

  // Add circles to map
  L.circle(test_coords, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust radius
    radius: countries[i][i].Total_Cases * 10
  }).bindPopup("<h1>" + countries[i][i].country + "</h1> <hr> <h3>Total Cases: " + countries[i][i].Total_Cases + "</h3>").addTo(myMap);
}
