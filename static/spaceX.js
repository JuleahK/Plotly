
//var sortedCities = cityGrowths.sort((a,b) =>
//a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
//var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

//var topFiveCities = sortedCities.slice(0,5);

//var topFiveCityNames = topFiveCities.map(city => city.City);
//var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

//var trace = {
    //x: topFiveCityNames,
    //y: topFiveCityGrowths,
    //type: "bar"
  //};
  //var data = [trace];
  //var layout = {
    //title: "Most Rapidly Growing Cities",
    //xaxis: { title: "City" },
    //yaxis: { title: "Population Growth, 2016-2017"}
  //};
  //Plotly.newPlot("bar-plot", data, layout);

//const url = "https://api.spacexdata.com/v2/launchpads";

//d3.json(url).then(receivedData => console.log(receivedData));

//const url = "https://api.spacexdata.com/v2/launchpads";
//d3.json(url).then();


d3.json("samples.json").then(function(data){
  console.log(data);
});

d3.json("samples.json").then(function(data){
  wfreq = data.metadata.map(person => person.wfreq);
  console.log(wfreq);
});

d3.json("samples.json").then(function(data){
  wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
  console.log(wfreq);
});

d3.json("samples.json").then(function(data){
  wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
  filteredWfreq = wfreq.filter(element => element !=
null);
  console.log(filteredWfreq);
});

d3.json("samples.json").then(function(data){
  firstPerson = data.metadata[0];
  Object.entries(firstPerson).forEach(([key, value]) =>
    {console.log(key + ': ' + value);});
});
