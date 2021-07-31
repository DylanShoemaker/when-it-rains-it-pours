// api key 3cdd7f0cff5a4ed1af7ae0635d8af1e2
// api.openweathermap.org/data/2.5/weather?q={city name}&appid=
var cityName = document.getElementById("city-name")
var button = document.getElementById('btn');
var formEl = document.getElementById("user-form")
var cityOutput = document.getElementById("output-city")
var windOutput = document.getElementById("output-wind")
var humidityOutput = document.getElementById("output-humidity")
var uvOutput = document.getElementById("output-uv")





formEl.addEventListener("submit",function(event){
  event.preventDefault();
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&units=imperial&appid=3cdd7f0cff5a4ed1af7ae0635d8af1e2' )
  .then(response => response.json())
  .then(data => {
    
    console.log(data.name);
    console.log(cityOutput);
    cityOutput.innerText = data.name;
    console.log(data);
  })





});





