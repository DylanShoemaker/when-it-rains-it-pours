// api key 3cdd7f0cff5a4ed1af7ae0635d8af1e2
// api.openweathermap.org/data/2.5/weather?q={city name}&appid=
var cityName = document.getElementById("city-name")
var button = document.getElementById('btn');
var formEl = document.getElementById("user-form")
var cityOutput = document.getElementById("output-city")
var tempOutput = document.getElementById("output-temp")
var windOutput = document.getElementById("output-wind")
var humidityOutput = document.getElementById("output-humidity")
var uvOutput = document.getElementById("output-uv")
var weatherIcon = document.getElementById("icon")
var buttonList = document.getElementById("button-list")

formEl.addEventListener("submit",function(event){
  event.preventDefault();
  //use the name search api to search for the cities coordinates
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&units=imperial&appid=3cdd7f0cff5a4ed1af7ae0635d8af1e2' )
  .then(response => response.json())
  .then(data => {
    cityOutput.innerText = data.name;

    var listEl = document.createElement('li');
    listEl.appendChild(document.createTextNode(data.name));
    buttonList.appendChild(listEl);


    var latEl = data.coord.lat.toFixed(2);
    var lonEl = data.coord.lon.toFixed(2);
    //use the coordinate search api to pull up the data because the name search api does not include UV Index info
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ latEl +"&lon="+ lonEl +"&exclude=hourly,daily&units=imperial&appid=3cdd7f0cff5a4ed1af7ae0635d8af1e2" )
    .then(response => response.json())
    .then(data => {
      tempOutput.innerText = data.current.temp;
      windOutput.innerText = data.current.wind_speed;
      humidityOutput.innerText = data.current.humidity;
      uvOutput.innerText = data.current.uvi;
      iconCode = data.current.weather[0].icon;
      var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
      $("#icon").html("<img src='" + iconUrl  + "'>");  //https://www.reddit.com/r/FreeCodeCamp/comments/4con5s/how_do_i_use_the_icon_given_in_the_open_weather/


    })
    


  })
  




});




$("#currentDay").text(moment().format("(M/D/YYYY)"));



