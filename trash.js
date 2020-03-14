//total recovered 
d3.json("data.json",function(data){
    var data=data;
    var countryName = data.map(row=>row.Country);
    //console.log(countryName);
    var totalRecover = data.map(row=>row.TotalRecovered);
    //console.log(totalRecover);
    var hoverText = countryName;
    var sizes= data.map(row=>row.TotalRecovered);
    //var colors = data.map(row=>row.Country);
    var trace ={
      x:countryName,
      y:totalRecover,
      mode:'markers',
      marker:{
        size:sizes
      }
    };
    var data =[trace];
    var layout={
      title:'Total Recovered Per Country',
      showlegend:false,
      height:800,
      width:1000
    };
    Plotly.newPlot("plot3",data,layout);
  
  });