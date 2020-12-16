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

// Loop through the filtered tableData
button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(timeFrame => timeFrame.datetime === inputValue);
    
    tbody.html("");

    filteredData.forEach(ufo => {
        var tableRow = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
        var cell = tableRow.append("td");
        cell.text(value);
        }); 
    });
 });



