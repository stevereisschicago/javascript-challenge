// from data.js
var tableData = data;

// check that the import works (WORKS)
console.log(tableData)
console.log("we got the info!!!")

//variable for the table - tie into "tbody" - on line 64 
var tbody = d3.select("tbody");

//populate the table (WORKS)
data.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

//listen for activity


var button = d3.select("#filter-btn");

button.on("click", runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputCityElement = d3.select("#city");
    var inputStateElement = d3.select("#state");
    var inputCountryElement = d3.select("#country");
    var inputShapeElement = d3.select("#shape");

    var inputValue = inputElement.property("value");
    var inputCityValue = inputCityElement.property("value");
    var inputStateValue = inputStateElement.property("value");
    var inputCountryValue = inputCountryElement.property("value");
    var inputShapeValue = inputShapeElement.property("value");

    console.log(inputValue)
    // console.log(tableData)
    console.log(tableData[0]);

    var filterData = tableData

    if (inputValue.length > 0) {
        filterData = filterData.filter(d => d.datetime === inputValue);
    }

    if (inputCityValue.length > 0) {
        filterData = filterData.filter(d => d.city === inputCityValue);
    }
    
    if (inputStateValue.length > 0) {
        filterData = filterData.filter(d => d.state === inputStateValue);
    }

    if (inputCountryValue.length > 0) {
        filterData = filterData.filter(d => d.country === inputCountryValue);
    }

    if (inputShapeValue.length > 0) {
        filterData = filterData.filter(d => d.shape === inputShapeValue);
    }

    console.log(filterData);

    // empty out the table
        tbody.html("");

    // add the new data from the search 
    filterData.forEach(alien => {
        var row = tbody.append("tr");
        Object.entries(alien).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
