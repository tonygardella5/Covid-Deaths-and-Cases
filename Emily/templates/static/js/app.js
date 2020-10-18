
d3.csv("/../../../../data/final_data.csv", d3.autoType).then(function(allData) {
  var deathAxis = [];
  var casesAxis = [];
  var xAxis = [];
  var chosenCounty = "Sussex";
  var chosenState = "DE"
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
/*function newCountyList(){
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
    //console.log(uniqueCounty);

}*/
  var uniqueState = [...new Set(allState)];
    uniqueState.sort();
    //console.log(uniqueState);
  var uniqueCounty = [...new Set(allCounty)];
    uniqueCounty.sort();
    //console.log(uniqueCounty);

  /*var select = document.getElementById("state"); 
     
  for(var i = 0; i < uniqueState.length; i++) {
      var opt = uniqueState[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
  }​
*/


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
  chart.destroy();
  var e = document.getElementById("state");
    chosenState = e.options[e.selectedIndex].text;
    //console.log(chosenState);
    
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
    //console.log(uniqueCounty);

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
  //chart.destroy();
  deathAxis=[];
  casesAxis=[];
  xAxis=[];
  //chart.destroy();
var e = document.getElementById("county");
  chosenCounty = e.options[e.selectedIndex].text;
  //console.log(chosenCounty);
  var allCounty = [];
  for (var i=0; i < allData.length; i++) {
     
    if( allData[i].state == chosenState)
    { allCounty.push(allData[i].county);
       if (allData[i].county == chosenCounty){
      deathAxis.push(allData[i].deaths);
      casesAxis.push(allData[i].cases);
      xAxis.push(allData[i].date);
  }}};
  //console.log(casesAxis);
//reset chart
//var chart = new ApexCharts(document.querySelector("#chart"), options);
//chart.destroy();
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
//chart.updateSeries([]);
var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render(); 
/*chart.updateOptions({
  title: {
    text: `COVID-19 Cases and Deaths for ${chosenCounty}, ${chosenState}`
  }
});
chart.updateSeries([{
  name:"Cases",
  data: casesAxis
  
}]);

chart.updateSeries([{
  name:"Deaths",
  data: deathAxis
  
}]);
*/
/*chart.updateSeries([{
  series: [{
    name: 'Deaths',
    type: 'column',
    data: deathAxis
  }, {
    name: 'Cases',
    type: 'line',
    data: casesAxis
  }]
  
}]);*/

};



createCounty(uniqueCounty);
//updateCounty();
createState();
//updateState();
//create functions for updating. you are going to need to append the dropdown lists with unique
//lists.
//render chart
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


   
    d3.select("#state").on("change", updateState);
   // d3.select("#county").on("change", chart.destroy());
    d3.select("#county").on("change", updateCounty);
    



   


});