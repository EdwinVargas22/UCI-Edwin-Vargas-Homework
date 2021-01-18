// Create a map object
var myMap = L.map("mapid", {
    center: [37.09, -95.71],
    zoom: 5
});

// Earthquakes GeoJSON URL 
var earthquakesURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
  
// Create the tile layer that will be the background of our map
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "light-v10",
    accessToken: API_KEY
}).addTo(myMap);

// Set Up Legend
var legend = L.control({ 
    position: "bottomright" 
});

// Add the layer control, insert a div with the class of "legend"
legend.onAdd = function() {
    var div = L.DomUtil.create("div", "legend"),
    return div;
};

// Add the legend to the map
legend.addTo(myMap);

  // Perform an API call to the all earthquakes data
d3.json(earthquakesURL, function(earthquakeData) {
    var quakeProperty  = earthquakeData.features.properties;
    var quakeGeo  = earthquakeData.features.geometry;

    // Loop through the earthquake data array
    for (var i = 0; i < quakeGeo.length; i++) {

    var color = "";
    if (quakeGeo.coordinates[2] < 11) {
        color = "green";
    }
    else if (quakeGeo.coordinates[2] >= 10 & quakeGeo.coordinates[2] <= 30) {
        color = "light green";
    }
    else if (quakeGeo.coordinates[2] >= 30 & quakeGeo.coordinates[2] <= 50) {
        color = "light orange";
    }
    else if (quakeGeo.coordinates[2] >= 50 & quakeGeo.coordinates[2] <= 70) {
        color = "orange";
    }
    else if (quakeGeo.coordinates[2] >= 70 & quakeGeo.coordinates[2] <= 90) {
        color = "dark orange";
    }
    else {
        color = "red";
    }

    L.circle((time?), quakeGeo.coordinates[1, 0], {
        fillOpacity: 0.75,
        color: "white",
        fillColor: color,
    //     radius: quakeProperty.mag * 1000
    // }).bindPopup(quakeProperty.title + "<br> Type: " + quakeProperty.type + "<br> Place: " + quakeProperty.place + "<br> Time: " + quakeProperty.time.format("h:mm:ss A") + "<br> Magnitude: " + quakeProperty.mag);
    }
  
});