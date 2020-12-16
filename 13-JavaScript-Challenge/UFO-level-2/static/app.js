// from data.js
var tableData = data;

//
var tbody = d3.select("tbody");

tableData.forEach(ufo => {
    var tableRow = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
    var row = tableRow.append("td");
    row.text(value);
    }); 
});

//
var button = d3.select("#filter-btn");

//
button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(timeFrame => timeFrame.datetime === inputValue);

    var inputCityElement = d3.select("#city");
    var inputCityValue = inputCityElement.property("value");
    var filteredDataCity = tableData.filter(cityFrame => cityFrame.city === inputCityValue);

    var inputStateElement = d3.select("#state");
    var inputStateValue = inputStateElement.property("value");
    var filteredDataState = tableData.filter(stateFrame => stateFrame.state === inputStateValue);

    var inputCountryElement = d3.select("#country");
    var inputCountryValue = inputCountryElement.property("value");
    var filteredDataCountry = tableData.filter(countryFrame => countryFrame.country === inputCountryValue);

    var inputShapeElement = d3.select("#shape");
    var inputShapeValue = inputShapeElement.property("value");
    var filteredDataShape = tableData.filter(shapeFrame => shapeFrame.shape === inputShapeValue);

    tbody.html("");

    filteredData.forEach(ufo => {
        var tableRow = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
        var row = tableRow.append("td");
        row.text(value);
        }); 
    });

    filteredDataCity.forEach(ufo => {
        var tableRow = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
        var row = tableRow.append("td");
        row.text(value);
        }); 
    });

    filteredDataState.forEach(ufo => {
        var tableRow = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
        var row = tableRow.append("td");
        row.text(value);
        }); 
    });

    filteredDataCountry.forEach(ufo => {
        var tableRow = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
        var row = tableRow.append("td");
        row.text(value);
        }); 
    });

    filteredDataShape.forEach(ufo => {
        var tableRow = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
        var row = tableRow.append("td");
        row.text(value);
        }); 
    });
 });
