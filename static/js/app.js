var tableData = data;

// create and append table

var tbody = d3.select("tbody");

console.log(tableData);

tableData.forEach(function(ufoSightings) {
  console.log(ufoSightings);
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  })
})

// Select the button
var button = d3.select("#button");

var inputField = d3.select("#datetime");



// Create the function to run for both events
function handleClick() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
}