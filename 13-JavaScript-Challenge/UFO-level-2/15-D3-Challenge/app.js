var svgWidth = 960;
var svgHeight = 600;

var margin = {
    top: 10,
    right: 40,
    bottom: 100,
    left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper
var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// Append an SVG group and shift the latter by left and top margins
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Initial Params
var chosenXAxis = "poverty";
var chosenYAxis = "healthcare";

// function used for updating x-scale var upon click on axis label
function xScale(usCensus, chosenXAxis) {
    // create scales
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(usCensus, d => d[chosenXAxis]) * 0.8, d3.max(usCensus, d => d[chosenXAxis]) * 1.2])
        .range([0, width]);

    return xLinearScale;
}

// function used for updating y-scale var upon click on axis label
function yScale(usCensus, chosenYAxis) {

    var yLinearScale = d3.scaleLinear()
        .domain([d3.min(usCensus, d => d[chosenYAxis]) * 0.8, d3.max(usCensus, d => d[chosenYAxis]) * 1.2])
        .range([height, 0]);

    return yLinearScale;
}

// function used for updating xAxis var upon click on axis label
function renderXAxes(newXScale, xAxis) {
    var bottomAxis = d3.axisBottom(newXScale);

    xAxis.transition()
        .duration(1000)
        .call(bottomAxis);

    return xAxis;
}

// function used for updating yAxis var upon click on axis label
function renderYAxes(newYScale, yAxis) {
    var leftAxis = d3.axisLeft(newYScale);

    yAxis.transition()
        .duration(1000)
        .call(leftAxis);

    return yAxis;
}

// function used for updating circles group with a transition to new circles for x-axis and y-axis
function renderCircles(circlesGroup, newXScale, chosenXAxis, newYScale, chosenYAxis) {

    circlesGroup.transition()
        .duration(1000)
        .attr("cx", d => newXScale(d[chosenXAxis]))
        .attr("cy", d => newYScale(d[chosenYAxis]));


    return circlesGroup;
}

// function used for updating circles group with a transition to new circles for y-axis
// function renderYCircles(circlesGroup, newYScale, chosenYAxis) {

//     circlesGroup.transition()
//     .duration(1000)
//     .attr("cy", d => newYScale(d[chosenYAxis]))


//     return circlesGroup;
// }

// function used for updating text group with a transition to new text
function renderText(textGroup, newXScale, chosenXAxis, newYScale, chosenYAxis) {

    textGroup.transition()
        .duration(1000)
        .attr("x", d => newXScale(d[chosenXAxis]))
        .attr("y", d => newYScale(d[chosenYAxis]))
        .attr("text-anchor", "middle");
    
    return textGroup;
}


// Retrieve data from the CSV file
d3.csv("data.csv").then(function(usCensus, err) {

    if (err) throw err;

    // parse data
    usCensus.forEach(function(data) {
        data.poverty = +data.poverty;
        data.healthcare = +data.healthcare;
        data.age = +data.age;
        data.smokes = +data.smokes;
        data.income = +data.income;
        data.obesity = +data.obesity;
    });

    // xLinearScale function above csv import
    var xLinearScale = xScale(usCensus, chosenXAxis);

    // yLinearScale function above csv import
    var yLinearScale = yScale(usCensus, chosenYAxis);

    // Create initial axis functions
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // append x axis
    var xAxis = chartGroup.append("g")
        .classed("x-axis", true)
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);

    // append y axis
    var yAxis = chartGroup.append("g")
        .classed("y-axis", true)
        .call(leftAxis);

    // append initial circles
    var circlesGroup = chartGroup.selectAll("stateCircle")
    .data(usCensus)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d[chosenXAxis]))
    .attr("cy", d => yLinearScale(d[chosenYAxis]))
    .attr("class", "stateCircle")
    .attr("r", "12")
    .attr("fill", "blue")
    .attr("opacity", ".5");

    // append abbreviation
    var textGroup = chartGroup.selectAll("stateText")
        .data(usCensus)
        .enter()
        .append("text")
        .attr("x", d => xLinearScale(d[chosenXAxis]))
        .attr("y", d => yLinearScale(d[chosenYAxis]))
        .text(d => (d.abbr))
        .attr("class", "stateText")
        .attr("font-size", "10px")
        .attr("text-anchor", "middle")
        .attr("fill", "white");

    // circleLabels
    //     .attr("x", function(d) {
    //         return xLinearScale(d[chosenXAxis]);
    //     })
    //     .attr("y", function(d) {
    //         return yLinearScale(d[chosenYAxis]);
    //     })
    //     .text(function(d) {
    //         return d.abbr;
    //     })
    //     .attr("font-family", "sans-serif")
    //     .attr("font-size", "10px")
    //     .attr("text-anchor", "middle")
    //     .attr("fill", "white");

    // Create group for three y-axis labels
    var yLabelsGroup = chartGroup.append("g")
        .attr("transform", `translate(${40}, ${-25})`);

    var healthcareLabel = yLabelsGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", margin.left -230)
        .attr("x", -260)
        .attr("value", "healthcare")
        .attr("dy", "1em")
        .classed("active", true)
        .text("Lacks Healthcare (%)");

    var smokesLabel = yLabelsGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", margin.left - 210)
        .attr("x", -260)
        .attr("value", "smokes")
        .attr("dy", "1em")
        .classed("inactive", true)
        .text("Smokes (%)");

    var obesityLabel = yLabelsGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", margin.left - 190)
        .attr("x", -260)
        .attr("value", "obesity")
        .attr("dy", "1em")
        .classed("inactive", true)
        .text("Obese (%)");


    // Create group for three x-axis labels
    var xLabelsGroup = chartGroup.append("g")
        .attr("transform", `translate(${width / 2}, ${height + 5})`);

    var povertyLabel = xLabelsGroup.append("text")
        .attr("x", 0)
        .attr("y", margin.bottom - 65)
        .attr("value", "poverty")
        .classed("active", true)
        .text("In Poverty (%)");

    var ageLabel = xLabelsGroup.append("text")
        .attr("x", 0)
        .attr("y", margin.bottom - 45)
        .attr("value", "age")
        .classed("inactive", true)
        .text("Age (Median)");

    var incomeLabel = xLabelsGroup.append("text")
        .attr("x", 0)
        .attr("y", margin.bottom - 25)
        .attr("value", "income")
        .classed("inactive", true)
        .text("Household Income (Median)");

    // y axis labels event listener
    yLabelsGroup.selectAll("text")
        .on("click", function() {

            // get value of selection for y-value
            var yValue = d3.select(this).attr("value");
            if (yValue != chosenYAxis) {

                // replaces chosenYAxis with value
                chosenYAxis = yValue;

                // function here found above csv import
                // updates y scale for new data
                yLinearScale = yScale(usCensus, chosenYAxis);

                // updates y axis with transition
                yAxis = renderYAxes(yLinearScale, yAxis);

                // updates circles with new values
                circlesGroup = renderCircles(circlesGroup, xLinearScale, chosenXAxis ,yLinearScale, chosenYAxis);

                // updates text with new values
                textGroup = renderText(textGroup, xLinearScale, chosenXAxis, yLinearScale, chosenYAxis);

                // changes classes to change bold text
                if (chosenYAxis === "healthcare") {
                    healthcareLabel
                        .classed("active", true)
                        .classed("inactive", false);
                    smokesLabel
                        .classed("active", false)
                        .classed("inactive", true);
                    obesityLabel
                        .classed("active", false)
                        .classed("inactive", true);
                }
                else if (chosenYAxis === "smokes") {
                    healthcareLabel
                        .classed("active", false)
                        .classed("inactive", true);
                    smokesLabel
                        .classed("active", true)
                        .classed("inactive", false);
                    obesityLabel
                        .classed("active", false)
                        .classed("inactive", true);
                }
                else {
                    healthcareLabel
                        .classed("active", false)
                        .classed("inactive", true);
                    smokesLabel
                        .classed("active", false)
                        .classed("inactive", true);
                    obesityLabel
                        .classed("active", true)
                        .classed("inactive", false);
                }
            }
        });

    // x axis labels event listener
    xLabelsGroup.selectAll("text")
        .on("click", function() {

            // get value of selection for x-value
            var value = d3.select(this).attr("value");
            if (value != chosenXAxis) {

                // replaces chosenXAxis with value
                chosenXAxis = value;
                
                // function here found above csv import
                // updates x scale for new data
                xLinearScale = xScale(usCensus, chosenXAxis);

                // updates x axis with transition
                xAxis = renderXAxes(xLinearScale, xAxis);

                // updates circles with new values
                circlesGroup = renderCircles(circlesGroup, xLinearScale, chosenXAxis, yLinearScale, chosenYAxis);

                // updates text with new values
                textGroup = renderText(textGroup, xLinearScale, chosenXAxis, yLinearScale, chosenYAxis);

                // changes classes to change bold text
                if (chosenXAxis === "age") {
                    ageLabel
                        .classed("active", true)
                        .classed("inactive", false);
                    incomeLabel
                        .classed("active", false)
                        .classed("inactive", true);
                    povertyLabel
                        .classed("active", false)
                        .classed("inactive", true);
                }
                else if (chosenXAxis === "income") {
                    ageLabel
                        .classed("active", false)
                        .classed("inactive", true);
                    incomeLabel
                        .classed("active", true)
                        .classed("inactive", false);
                    povertyLabel
                        .classed("active", false)
                        .classed("inactive", true);
                }
                else {
                    ageLabel
                        .classed("active", false)
                        .classed("inactive", true);
                    incomeLabel
                        .classed("active", false)
                        .classed("inactive", true);
                    povertyLabel
                        .classed("active", true)
                        .classed("inactive", false);
                }
            }
        });
}).catch(function(error) {
    console.log(error);
});