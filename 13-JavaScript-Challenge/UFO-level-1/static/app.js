// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

var form = d3.select("#from");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(timeFrame => timeFrame.datetime === inputValue);

    console.log(filteredData);
}




// var tbody = d3.select("tbody");

// console.log(tableData);

// tableData.forEach(function(ufoReport) {
//     console.log(ufoReport);
//     var row = tbody.append("tr");
//     Object.defineProperties(ufoReport).forEach(function([key, value]) {
//     console.log(key, value);

//     var cell = row.append("td");
//     cell.text(value);
//     });
// });


