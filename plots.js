// mortality rate per country chart      
      d3.json("data.json", function(data) {
      var data = data;
      var trace1 = {
        x: data.map(row => row.Country),
        y: data.map(row => row.TotalDeaths/row.TotalCases),
        type: "bar",
        marker: {
          color: 'rgb(192,192,192)',
          opacity: 0.6,
          line: {
            color: 'rgb(255,0,0)',
            width: 1.5
          }},
        transforms: [{
          type: 'sort',
          target: 'y',
          order: 'descending'},
          {type: 'filter',
          target: 'y',
          operation: '>',
          value: 0
        }]
        
      };
      var plotData = [trace1];
      
      var layout = {
        title: "Mortality Rate Per Country"};
      
      Plotly.newPlot("plot", plotData, layout)});

// total deaths chart
      d3.json("data.json", function(data) {
        var data = data;
        var trace1 = {
          y: data.map(row => row.Country),
          x: data.map(row => row.TotalDeaths),
          type: "bar",
          orientation: 'h',
          marker: {
            color: 'rgb(255,0,0)',
            opacity: 0.6,
            line: {
              color: 'rgb(255,0,0)',
              width: 1.5
            }},
          transforms: [{
            type: 'sort',
            target: 'x',
            order: 'ascending'},
            {type: 'filter',
            target: 'x',
            operation: '>',
            value: 0
          }]
          
        };
        var plotData = [trace1];
        
        var layout = {
          title: "Total Deaths Per Country"};
        
        Plotly.newPlot("plot2", plotData, layout)});

      