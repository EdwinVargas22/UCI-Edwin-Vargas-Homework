// Earthquakes GeoJSON URL 
var earthquakesURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// Perform a GET request to the query URL
d3.json(earthquakesURL, function (data) {

    console.log("Hello");

    // Send the data.features object to the featureCreation function
    featureCreation(data.features);

    console.log("bye");

});

function featureCreation(creating) {

    // Define a function to run once for each feature in the features array
    // Give each feature a popup describing the place and time of the earthquake
    function addPopup(feature, layer) {
        layer.bindPopup(feature.properties.title + "<br> Type: " + feature.properties.type + "<br> Place: " + feature.properties.place 
    + "<br> Time: " + new Date (feature.properties.time) + "<br> Magnitude: " + feature.properties.mag);
    }

    // Define a function to run once for each feature in the features array
    // Give each feature the coordinates and radius for the circle 
    function circle(feature, coordinates) {
        console.log(coordinates);
        return new L.circle(coordinates, {
            fillOpacity: 0.75,
            color: "white",
            fillColor: "red",
            radius: feature.properties.mag * 1000
        })
    }

    // Create a GeoJSON layer containing the features array on the creating object
    var earthquake = L.geoJSON (creating, {
        onEachFeature: addPopup,
        pointLayer: circle
    });

    // Sending our earthquake layer to the mapCreation function
    mapCreation(earthquake);
}

function mapCreation(earthquake) {

    // Define lightmap layers
    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/light-v10",
        accessToken: API_KEY
    });

    console.log("heyy");

    // Create a map object, giving it the lightmap and earthquake layer to display on load
    var myMap = L.map("mapid", {
        center: [37.09, -95.71],
        zoom: 5,
        layers: [lightmap, earthquake]
    });


    function getColor(d) {
        return d > 90 ? '#800026' :
            d > 70 ? '#BD0026' :
            d > 50 ? '#E31A1C' :
            d > 30 ? '#FC4E2A' :
            d > 10 ? '#FD8D3C' :
            d > -10 ? '#FEB24C' :
                    '#FFEDA0' ;
    }

    // Set up the legend
    var legend = L.control({position: 'bottomright'});

    legend.onAdd = function (myMap) {

        var div = L.DomUtil.create('div', 'info legend'),
            grades = [-10, 10, 30, 50, 70, 90],
            labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
    };

    legend.addTo(myMap);
    
}