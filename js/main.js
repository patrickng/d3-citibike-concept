// var margin = {top: 10, left: 10, bottom: 10, right: 10}
//   , width = parseInt(d3.select('#map').style('width'))
//   , width = width - margin.left - margin.right
//   , mapRatio = .5
//   , height = width * mapRatio;

var width = 1200
  , height = 1100;

var projection = d3.geo.mercator()
    .center([-73.94, 40.70])
    .scale(100000)
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("js/data/nybb.json", function(error, topology) {
  svg.selectAll("path")
    .attr("id", "boroughs")
    .data(topology.features)
    .enter().append("path")
    .attr("class", function(d) { 
      return "boro boro-" + d.properties.BoroName.toLowerCase().replace(/\s+/g, '');
    })
    .attr("d", path);
});