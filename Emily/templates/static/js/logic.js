
//  API key for Mapbox
var apiKey = API_KEY;

// Create the tile layers that will be the selectable backgrounds of the map

//Grayscale layer
var graymap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/light-v10",
  accessToken: apiKey
});

// Satellite layer
var satellitemap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/satellite-v9",
  accessToken: apiKey
});

// Outdoors layer
var outdoors = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/outdoors-v11",
  accessToken: apiKey
});

// Create the map object with options, add layers created above
var map = L.map("mapid", {
  center: [
    40.7, -94.5
  ],
  zoom: 3,
  layers: [graymap, satellitemap, outdoors]
});

// Add 'graymap' tile layer to the map
graymap.addTo(map);

// Create layers for two different sets of data, earthquakes and tectonicplates
var covidCases = new L.LayerGroup();
var covidDeaths = new L.LayerGroup();

// Define an object that contains all of the different map choices
var baseMaps = {
  Satellite: satellitemap,
  Grayscale: graymap,
  Outdoors: outdoors
};

// Define an object that contains all of the overlays
var overlays = {
  "Covid Cases": covidCases,
  "Covid Deaths": covidDeaths
};

// Add a control to the map to allow user to change which layers are visible
L
  .control
  .layers(baseMaps, overlays)
  .addTo(map);

// Get dataset by making an AJAX call that retrieves earthquake geoJSON data
d3.csv("/data/final_data.csv").then (function(data) {
    console.log(data[0]);
    )};
