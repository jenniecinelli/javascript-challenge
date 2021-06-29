var tableData = data;

// create and append table

var tbody = d3.select("tbody");

console.log(tableData);

// tableData.forEach(function(ufoSightings) {
//   console.log(ufoSightings);
//   var row = tbody.append("tr");
//   Object.entries(ufoSightings).forEach(function([key, value]) {
//     console.log(key, value);
//     var cell = row.append("td");
//     cell.text(value);
//   })
// })

tableData.forEach((ufoSightings) => {
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  tr = table.getElementsByTagName("tr");


  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(date => date.datetime === inputValue);

  console.log(filteredData);

  inputValue.addEventListener("keyup", function(event) {
    console.log(event)
    const q = event.target.value;
    tableData.forEach(row => {
      console.log(row);
      row.querySelector('td')
    })
  })

};