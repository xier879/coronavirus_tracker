
d3.json("../Roaya_H_group_project2/data.json", function(x) {
    console.log(x);
  
    for ( var i = 0; i < x.length; i++) {
      var Country = x[i].Country;
      var Cases = +x[i].TotalCases;
      var Deaths = +x[i].TotalDeaths;
      var NewCases = +x[i].NewCases;
      var NewDeaths = +x[i].NewDeaths;
      var MortRate = (( +x[i].TotalDeaths / +x[i].TotalCases ) * 100).toFixed(2) + '%';
      var coords = [x[i].Latitude, x[i].Longitude]
    }}
var trace1 = {
        x: Country,
        y: [Deaths / Cases],
        type: "bar"
      };
      
      var data = [trace1];
      
      var layout = {
        title: "'Bar' Chart"
      };
      
      Plotly.newPlot("plot", data, layout);