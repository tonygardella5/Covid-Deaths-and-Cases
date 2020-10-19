
d3.csv("/Project2/data/final_data.csv", d3.autoType).then(function(allData) {
  var deathAxis = [];
  var casesAxis = [];
  var xAxis = [];
  var chosenCounty = "Madison";
  var chosenState = "TN"
  var allState = [];
  var allCounty = [];
  var uniqueState = [];
  var uniqueCounty = [];
  
  for (var i=0; i < allData.length; i++) {
    allState.push(allData[i].state);    
    if( allData[i].state == chosenState)
    { allCounty.push(allData[i].county);
       if (allData[i].county == chosenCounty){
      deathAxis.push(allData[i].deaths);
      casesAxis.push(allData[i].cases);
      xAxis.push(allData[i].date);
  }}};

  var uniqueState = [...new Set(allState)];
    uniqueState.sort();
  var uniqueCounty = [...new Set(allCounty)];
    uniqueCounty.sort();

function createState() {
  var select = document.getElementById("state");
var options = uniqueState;
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.append(el);
}
}
function updateState(){
 
  var e = document.getElementById("state");
    chosenState = e.options[e.selectedIndex].text;
  var allCounty = [];
  for (var i=0; i < allData.length; i++) {
     
    if( allData[i].state == chosenState)
    { allCounty.push(allData[i].county);
       if (allData[i].county == chosenCounty){
      deathAxis.push(allData[i].deaths);
      casesAxis.push(allData[i].cases);
      xAxis.push(allData[i].date);
  }}}
  var uniqueCounty = [...new Set(allCounty)];
    uniqueCounty.sort();
    removeOptions(document.getElementById("county"));
    var select = document.getElementById("county");
  var options = uniqueCounty;
  for(var i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.append(el);
  }
    deathAxis=[];
    casesAxis=[];
    xAxis=[];
  var e = document.getElementById("county");
    chosenCounty = e.options[e.selectedIndex].text;
    var allCounty = [];
    for (var i=0; i < allData.length; i++) {
       
      if( allData[i].state == chosenState)
      { allCounty.push(allData[i].county);
         if (allData[i].county == chosenCounty){
        deathAxis.push(allData[i].deaths);
        casesAxis.push(allData[i].cases);
        xAxis.push(allData[i].date);
    }}};
  chosenCounty = uniqueCounty[0];
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
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();  
  }
function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
 }
function createCounty(uniqueCounty) {
 var select = document.getElementById("county");
  var options = uniqueCounty;
  for(var i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.append(el);
  }
  }
function updateCounty(){
  deathAxis=[];
  casesAxis=[];
  xAxis=[];
var e = document.getElementById("county");
  chosenCounty = e.options[e.selectedIndex].text;
  var allCounty = [];
  for (var i=0; i < allData.length; i++) {
     
    if( allData[i].state == chosenState)
    { allCounty.push(allData[i].county);
       if (allData[i].county == chosenCounty){
      deathAxis.push(allData[i].deaths);
      casesAxis.push(allData[i].cases);
      xAxis.push(allData[i].date);
  }}};
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
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render(); 
};
createCounty(uniqueCounty);
createState();
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
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render(); 
function destroyChart(){
 chart.destroy();
};
    d3.select("#state").on("change", function(d){destroyChart(d);updateState(d);});
    d3.select("#county").on("change", function(d){destroyChart(d);updateCounty(d);});
});