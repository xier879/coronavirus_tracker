      d3.json("data.json", function(data) {
      var data = data;

      // Summary table values
        //  current expected value of mortality rate wordwide 
        var total_cases = data.map(column => column.TotalCases).reduce(function(a,b){
          return a + b
        }, 0);
        var total_countries = data.length;
        var weighted_mortality_per_country = data.map(row=> (row.TotalDeaths/row.TotalCases)*(row.TotalCases/total_cases)).reduce(function(a,b){
          return a + b
        }, 0);
        console.log(weighted_mortality_per_country);
        var dates = data.map(column=> (column.Date)).slice(2,3);
        var date = Date(dates);
        console.log(date);
        d3.select("#date-time").text(date)

    // New cases per country chart
      var trace1 = {
        x: data.map(row => row.Country),
        y: data.map(row => row.NewCases).slice(0,10),
        type: "bar",
        text: data.map(row => row.NewCases),
        textposition: 'auto',
        hoverinfo: 'none',
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
        title: "Top Total New Cases Per Country (Past 24 Hours)"};
      
      Plotly.newPlot("plot", plotData, layout)});

// total deaths chart
      d3.json("data.json", function(data) {
        var data = data;
        var trace1 = {
          x: data.map(row => row.Country),
          y: data.map(row => row.TotalDeaths).slice(0,10),
          type: "bar",
          text: data.map(row => row.TotalDeaths),
          textposition: 'auto',
          hoverinfo: 'none',
          marker: {
            color: 'rgb(139,0,0)',
            opacity: 0.6,
            line: {
              color: 'rgb(0,0,0)',
              width: 1.5}
            },
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
          title: "Top 10 Total Deaths Per Country"
        };
          
        Plotly.newPlot("plot2", plotData, layout);

      });
