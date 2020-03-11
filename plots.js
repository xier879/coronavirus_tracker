      d3.json("data.json", function(data) {
      var data = data;
      var trace1 = {
        x: data.map(row => row.Country),
        y: data.map(row => row.TotalDeaths/row.TotalCases),
        type: "bar"
      };
      var plotData = [trace1];
      
      var layout = {
        title: "Mortality Rate"
      };
      
      Plotly.newPlot("plot", plotData, layout)});
      