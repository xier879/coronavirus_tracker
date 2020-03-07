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

// Country data
var countries = [{
    "0": {
        "id": "0",
        "country": "China",
        "Total_Cases": 80282,
        "New Cases": "131.0",
        "Total Deaths": "2,981",
        "New Deaths": "38.0",
        "Active Cases": "27,298",
        "Total Recovered ": "50,003",
        "Serious, Critical": "6,416",
        "location": [36.5617654559, 103.81907349],
        "name_long": "China",
        "abbrev": "China",
        "Longitude": "103.81907349",
        "Latitude": "36.56176546"
    },
    "1": {
        "id": "1",
        "country": "Italy",
        "Total_Cases": 3089,
        "New Cases": "587.0",
        "Total Deaths": "107",
        "New Deaths": "28.0",
        "Active Cases": "2,706",
        "Total Recovered ": "276",
        "Serious, Critical": "295",
        "location": [42.796626414,12.0700133907],
        "name_long": "Italy",
        "abbrev": "Italy",
        "Longitude": "12.07001339",
        "Latitude": "42.79662641"
    },
    "2": {
        "id": "2",
        "country": "Iran",
        "Total_Cases": 2922,
        "New Cases": "586.0",
        "Total Deaths": "92",
        "New Deaths": "15.0",
        "Active Cases": "2,278",
        "Total Recovered ": "552",
        "Serious, Critical": "0",
        "location": [32.575032915, 54.2740700448],
        "name_long": "Iran",
        "abbrev": "Iran",
        "Longitude": "54.27407004",
        "Latitude": "32.57503292"
    }
}
];


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
