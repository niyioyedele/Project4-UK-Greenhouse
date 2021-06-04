var api_url = "/api/source"

function init(year='_1990') {
  d3.json(api_url).then((data) => {
    
    sector = data.map(elem => elem.Sector)
    year_1990 = data.map(elem=>elem._1990)
    year_1991 = data.map(elem=>elem._1991)
    year_1992 = data.map(elem=>elem._1992)
    year_1993 = data.map(elem=>elem._1993)
    year_1994 = data.map(elem=>elem._1994)
    year_1995 = data.map(elem=>elem._1995)
    year_1996 = data.map(elem=>elem._1996)
    year_1997 = data.map(elem=>elem._1997)
    year_1998 = data.map(elem=>elem._1998)
    year_1999 = data.map(elem=>elem._1999)
    year_2000 = data.map(elem=>elem._2000)
    year_2001 = data.map(elem=>elem._2001)
    year_2002 = data.map(elem=>elem._2002)
    year_2003 = data.map(elem=>elem._2003)
    year_2004 = data.map(elem=>elem._2004)
    year_2005 = data.map(elem=>elem._2005)
    year_2006 = data.map(elem=>elem._2006)
    year_2007 = data.map(elem=>elem._2007)
    year_2008 = data.map(elem=>elem._2008)
    year_2009 = data.map(elem=>elem._2009)
    year_2010 = data.map(elem=>elem._2010)
    year_2011 = data.map(elem=>elem._2011)
    year_2012 = data.map(elem=>elem._2011)
    year_2013 = data.map(elem=>elem._2011)
    year_2014 = data.map(elem=>elem._2011)
    year_2015 = data.map(elem=>elem._2011)
    year_2016 = data.map(elem=>elem._2011)
    year_2017 = data.map(elem=>elem._2011)
    year_2018 = data.map(elem=>elem._2011)
    year_2019 = data.map(elem=>elem._2011)
    
    // console.log(year_1990);
    var y = sector;

    if (year=='_1990'){
    var X = year_1990;
    }
    if (year=='_1991'){
      var X = year_1991;
      }
    // console.log(X);
    if (year=='_1992'){var X = year_1992;}
    if (year=='_1993'){var X = year_1993;}
    if (year=='_1994'){var X = year_1994;}
    if (year=='_1995'){var X = year_1995;}
    if (year=='_1996'){var X = year_1996;}
    if (year=='_1997'){var X = year_1997;}
    if (year=='_1998'){var X = year_1998;}
    if (year=='_1999'){var X = year_1999;}
    if (year=='_2000'){var X = year_2000;}
    if (year=='_2001'){var X = year_2001;}
    if (year=='_2002'){var X = year_2002;}
    if (year=='_2003'){var X = year_2003;}
    if (year=='_2004'){var X = year_2004;}
    if (year=='_2005'){var X = year_2005;}
    if (year=='_2006'){var X = year_2006;}
    if (year=='_2007'){var X = year_2007;}
    if (year=='_2008'){var X = year_2008;}
    if (year=='_2009'){var X = year_2009;}
    if (year=='_2010'){var X = year_2010;}
    if (year=='_2011'){var X = year_2011;}
    if (year=='_2012'){var X = year_2012;}
    if (year=='_2013'){var X = year_2013;}
    if (year=='_2014'){var X = year_2014;}
    if (year=='_2015'){var X = year_2015;}
    if (year=='_2016'){var X = year_2016;}
    if (year=='_2017'){var X = year_2017;}
    if (year=='_2018'){var X = year_2018;}
    if (year=='_2019'){var X = year_2019;}
    

    var yticks = y.reverse();
    var barData = [
      {
        y: yticks,
        x: X,
        text: y.reverse(),
        type: "bar",
        orientation: "h",
      }
    ];

    var barLayout = {
      title: "Greenhouse gas by business sources",
      margin: { t: 40, l: 150 }
    };
    // console.log(barData)
    Plotly.newPlot("bar", barData, barLayout);
  });


    

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  console.log('hi')
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

 
 init(dataset)

}
}




// getData();  
init(); 
