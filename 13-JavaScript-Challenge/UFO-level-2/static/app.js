// from data.js
var tableData = data;

// Reference to the table body
var tbody = d3.select("tbody");

// Loop through tableData
tableData.forEach(ufo => {
    var tableRow = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
    var row = tableRow.append("td");
    row.text(value);
    }); 
});

// Reference to the filter button
var button = d3.select("#filter-btn");

// Filter the tableData with 5 filters
button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var inputCityElement = d3.select("#city");
    var inputCityValue = inputCityElement.property("value");

    var inputStateElement = d3.select("#state");
    var inputStateValue = inputStateElement.property("value");

    var inputCountryElement = d3.select("#country");
    var inputCountryValue = inputCountryElement.property("value");

    var inputShapeElement = d3.select("#shape");
    var inputShapeValue = inputShapeElement.property("value");

    var filteredData = tableData.filter(timeFrame => timeFrame.datetime === inputValue && timeFrame.city === inputCityValue
                                && timeFrame.state === inputStateValue && timeFrame.country === inputCountryValue 
                                && timeFrame.shape === inputShapeValue);

    tbody.html("");

    filteredData.forEach(ufo => {
        var tableRow = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
        var row = tableRow.append("td");
        row.text(value);
        }); 
    });

 });
