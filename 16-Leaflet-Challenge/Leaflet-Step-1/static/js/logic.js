// Create a map object
var myMap = L.map("mapid", {
    center: [37.09, -95.71],
    zoom: 5
  });

// Earthquakes GeoJSON URL 
var earthquakesURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
  
  // Create the tile layer that will be the background of our map
   var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "light-v10",
    accessToken: API_KEY
  }).addTo(myMap);



  // Perform an API call to the all earthquakes data
  d3.json(earthquakesURL, function(earthquakeData) {

    // Function to determine the size of the marker based on the magnitude of the earthquake
    function markerSize(magnitude) {
        
        if (magnitude === 0) {
            return 1;
        }
        return magnitude * 3;
    }

    // Function to determine the style of the marker based on the magnitude of the earthquake
    function styleInfo(feature) {

        return {
            opacity: 1,
            fillOpacity: 1,
            fillColor: chooseColor(feature.properties.mag),
            color: "#000000",
            radius: markerSize(feature.properties.mag),
            stroke: true,
            weight: 0.5
        };
    }

    // function to determine the color of the marker based on the magnitude of the earthquake
    function chooseColor(magnitude) {
        switch (true) {
            case magnitude > 5:
                return "#581845";
            case magnitude > 4:
                return "#900C3F";
            case magnitude > 3:
                return "#C70039";
            case magnitude > 2:
                return "#FF5733";
            case magnitude > 1:
                return "#FFC300";
            default:
                return "#DAF7A6";
        }
    }

    // Create a GeoJSON layer containing the features array on the earthquakeData object
    L.geoJSON(earthquakeData, {
        poinToLayer: function(feature, latlng) {
            return L.circleMarker(latlng);
        },
        style: styleInfo,

        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h4>Location: " + feature.properties.place + 
            "</h4><hr><p>Date & Time: " + new Date(feature.properties.time) +
            "</p><hr><p>Magnitude: " + feature.properties.mag + "</p>")
        }

    }).addTo(myMap);


    // Set Up Legend
    var legend = L.control({ position: "bottomright" });
    legend.onAdd = function() {
        var div = L.DomUtil.create("div", "info legend"),
        magnitudeLevels = [0, 1, 2, 3, 4, 5];

        div.innerHTML += "<h3>Magnitude</h3>"

        for (var i = 0; i < magnitudeLevels.length; i++) {
            div.innerHTML +=

                '<i style="background: ' + chooseColor(magnitudeLevels[i] + 1) + '"></i> ' +
                magnitudeLevels[i] + (magnitudeLevels[i + 1] ? '&ndash;' + magnitudeLevels[i + 1] + '<br>' : '+');
        }
        return div;
    };

    // Add legend to the map
    legend.addTo(myMap);
  });