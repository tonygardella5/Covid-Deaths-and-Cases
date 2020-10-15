
d3.csv("/../data/final_data.csv", d3.autoType).then(function(allData) {
  var deathAxis = [1];
  var casesAxis = [];
  var xAxis = []
  for (var i=0; i < allData.length; i+=10) {
    if( allData[i].state == "TN")
    { if (allData[i].county == "Davidson"){
      deathAxis.push(allData[i].deaths);
      casesAxis.push(allData[i].cases);
      xAxis.push(allData[i].date);
    //console.log(deathAxis);
    //console.log(allData[i].deaths);
  }}};
  console.log(deathAxis);
  console.log(casesAxis);
  console.log(allData.length);
 // var filteredData = data.filter(function(d) 

     //   });    
    //var deathAxis = (allData, function(d){return d.deaths;})

    var options = {
      series: [{
      name: 'Cases',
      type: 'column',
      data: [casesAxis]
    }, {
      name: 'Deaths',
      type: 'line',
      data: [deathAxis]
    }],
      chart: {
      height: 350,
      type: 'line',
    },
    stroke: {
      width: [0, 1]
    },
    title: {
      text: 'COVID-19 Cases and Deaths'
    },
    //dataLabels: {
    //  enabled: true,
    //  enabledOnSeries: [1]
    //},
    labels: [xAxis],
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