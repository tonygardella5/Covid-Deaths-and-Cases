
d3.csv("/../../../../data/final_data.csv", d3.autoType).then(function(allData) {
  var deathAxis = [];
  var casesAxis = [];
  var xAxis = [];
  var chosenCounty = "Davidson";
  var chosenState = "TN"
  var allState = [];
  var allCounty = [];
  
  for (var i=0; i < allData.length; i++) {
    allState.push(allData[i].state);    
    if( allData[i].state == chosenState)
    { allCounty.push(allData[i].county);
       if (allData[i].county == chosenCounty){
      deathAxis.push(allData[i].deaths);
      casesAxis.push(allData[i].cases);
      xAxis.push(allData[i].date);
  }}};

const uniqueState = [...new Set(allState)];
    console.log(uniqueState);
const uniqueCounty = [...new Set(allCounty)];
    console.log(uniqueCounty);

function updateState() {

}
function updateCounty() {

}
//create functions for updating. you are going to need to append the dropdown lists with unique
//lists.
d3.select("state").on("change", updateState);
d3.select("county").on("change", updateCounty);
    var options = {
      series: [{
      name: 'Deaths',
      type: 'column',
      data: deathAxis
    }, {
      name: 'Cases',
      type: 'line',
      data: casesAxis
    }],
      chart: {
      height: 400,
      type: 'line',
    },
    stroke: {
      width: [0, 5]
    },
    title: {
      text: `COVID-19 Cases and Deaths for ${chosenCounty}, ${chosenState}`
    },

    labels: xAxis,
    xaxis: {
      type: 'datetime'
    },
    yaxis: [{
      title: {
        text: 'Cases',
      },
    
    }, {
      opposite: true,
      title: {
        text: 'Deaths'
      }
    }]
    };
    //console.log(deathAxis);
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();







});