//total recovered 
d3.json("data.json",function(data){
    var data=data;
    var countryName = data.map(row=>row.Country);
    //console.log(countryName);
    var totalRecover = data.map(row=>row.TotalRecovered);
    //console.log(totalRecover);
    var topRecover = totalRecover.slice(0,10).reverse();
    //console.log(topRecover);
    var topRecoverLabel = countryName.slice(0,10).reverse();
    //console.log(topRecoverLabel);
    //var colors = data.map(row=>row.Country);
    var hovertext = (topRecover.map(d=>d+"cases"));
    //console.log(hovertext);
    var trace1 ={
      y:topRecoverLabel,
      x:topRecover,
      name:'total recovered cases',
      orientation:'h',
      type:"bar",
      marker:{
        color:'rgb(50, 171, 96,0.6)',
        width:5
      },
      orientation:'h',
    };
    var totalDeaths = data.map(row=>row.TotalDeaths);
    var topDeaths = totalDeaths.slice(0,10).reverse();
    //console.log(topDeaths);
    var trace2 ={
      x:topDeaths,
      y:topRecoverLabel,
      name:'total death cases',
      orientation:'h',
      type:'bar',
      marker:{
        color:"rgba(255,153,51,0.6)",
        width:1
      }
    };
    var data =[trace1,trace2];
    var layout={
      title:'TOP 10 Total Recovered Per Country',
      barmode:'stack',
      margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 30
      }
    };
    Plotly.newPlot("plot3",data,layout);
  
});