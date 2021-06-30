var tableData = data;

// create and append table

var tbody = d3.select("tbody");

console.log(tableData);

tableData.forEach((ufoSightings) => {
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

var filterTable = d3.select("#filter-btn")

filterTable.on("click", runFilter);

function runFilter() {
    d3.selectAll("tr").remove()
    d3.selectAll("td").remove()
    
    var inputField = d3.select("#datetime");
    var inputValue = inputField.property("value");
    console.log(inputValue)

    tableData.forEach((ufoSightings) => {

        if (Date.parse(ufoSightings.datetime) === Date.parse(inputValue)) {
            var row = tbody.append("tr");
            Object.entries(ufoSightings).forEach(([key, value]) => {

                var cell = row.append("td");

                cell.text(value);

            });
        };
    });
};