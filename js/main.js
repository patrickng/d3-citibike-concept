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

var data = [
  {
    id: 72,
    stationName: "W 52 St & 11 Ave",
    availableDocks: 3,
    totalDocks: 39,
    latitude: 40.76727216,
    longitude: -73.99392888,
    statusValue: "In Service",
    statusKey: 1,
    availableBikes: 36,
    stAddress1: "W 52 St & 11 Ave",
    stAddress2: "",
    city: "",
    postalCode: "",
    location: "",
    altitude: "",
    testStation: false,
    lastCommunicationTime: null,
    landMark: ""
  },
  {
    id: 79,
    stationName: "Franklin St & W Broadway",
    availableDocks: 33,
    totalDocks: 33,
    latitude: 40.71911552,
    longitude: -74.00666661,
    statusValue: "In Service",
    statusKey: 1,
    availableBikes: 0,
    stAddress1: "Franklin St & W Broadway",
    stAddress2: "",
    city: "",
    postalCode: "",
    location: "",
    altitude: "",
    testStation: false,
    lastCommunicationTime: null,
    landMark: ""
  },
  {
    id: 82,
    stationName: "St James Pl & Pearl St",
    availableDocks: 20,
    totalDocks: 26,
    latitude: 40.71117416,
    longitude: -74.00016545,
    statusValue: "In Service",
    statusKey: 1,
    availableBikes: 6,
    stAddress1: "St James Pl & Pearl St",
    stAddress2: "",
    city: "",
    postalCode: "",
    location: "",
    altitude: "",
    testStation: false,
    lastCommunicationTime: null,
    landMark: ""
  },
  {
    id: 83,
    stationName: "Atlantic Ave & Fort Greene Pl",
    availableDocks: 19,
    totalDocks: 62,
    latitude: 40.68382604,
    longitude: -73.97632328,
    statusValue: "In Service",
    statusKey: 1,
    availableBikes: 42,
    stAddress1: "Atlantic Ave & Fort Greene Pl",
    stAddress2: "",
    city: "",
    postalCode: "",
    location: "",
    altitude: "",
    testStation: false,
    lastCommunicationTime: null,
    landMark: ""
  },
  {
    id: 116,
    stationName: "W 17 St & 8 Ave",
    availableDocks: 18,
    totalDocks: 39,
    latitude: 40.74177603,
    longitude: -74.00149746,
    statusValue: "In Service",
    statusKey: 1,
    availableBikes: 19,
    stAddress1: "W 17 St & 8 Ave",
    stAddress2: "",
    city: "",
    postalCode: "",
    location: "",
    altitude: "",
    testStation: false,
    lastCommunicationTime: null,
    landMark: ""
  }
]

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

svg.selectAll('circle').data(data).enter().append('circle')
    .attr("cy", function(d) { return projection([d.longitude, d.latitude])[0]; })
    .attr("cx", function(d) { return projection([d.longitude, d.latitude])[1]; })
    .attr("r", function(d) { return 5; });;













