
d3.csv("/../data/final_data.csv", d3.autoType).then(function(allData) {
  var deathAxis = [];
  var casesAxis = [];
  var xAxis = [];
  var chosenCounty = "Davidson";
  var chosenState = "TN"
  for (var i=0; i < allData.length; i+=1) {
    if( allData[i].state == chosenState)
    { if (allData[i].county == chosenCounty){
      deathAxis.push(allData[i].deaths);
      casesAxis.push(allData[i].cases);
      xAxis.push(allData[i].date);
    //console.log(deathAxis);
    //console.log(allData[i].deaths);
  }
}
};
  //console.log(deathAxis);
  //console.log(casesAxis);
  //console.log(allData.length);
 // var filteredData = data.filter(function(d) 

     //   });    
    //var deathAxis = (allData, function(d){return d.deaths;})

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