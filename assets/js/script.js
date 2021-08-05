// api key 3cdd7f0cff5a4ed1af7ae0635d8af1e2
// api.openweathermap.org/data/2.5/weather?q={city name}&appid=
var cityName = document.getElementById("city-name")
var button = document.getElementById('btn');
var formEl = document.getElementById("user-form")
var buttonForm = document.getElementById("button-form")
var cityOutput = document.getElementById("output-city")
var tempOutput = document.getElementById("output-temp")
var windOutput = document.getElementById("output-wind")
var humidityOutput = document.getElementById("output-humidity")
var uvOutput = document.getElementById("output-uv")
var weatherIcon = document.getElementById("icon")
var buttonList = document.getElementById("button-list")
var dayOneTemp = document.getElementById("dayOneTemp")
var dayTwo = document.getElementById("dayTwo")
var dayThree = document.getElementById("dayThree")
var dayFour = document.getElementById("dayFour")
var dayFive = document.getElementById("dayFive")



formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  //use the name search api to search for the cities coordinates
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName.value + '&units=imperial&appid=3cdd7f0cff5a4ed1af7ae0635d8af1e2')
    .then(response => response.json())
    .then(data => {
      cityOutput.innerText = data.name;
      
      var butn = document.createElement("input");
      butn.setAttribute("type", "submit");
      butn.setAttribute("value", data.name);
      butn.setAttribute("id", data.name);
      butn.setAttribute("class", "btnClass");
      buttonList.prepend(butn);
      //console.log(data);
      // button-list div children limit
      $(".btnClass").click(function (event) {    //https://www.geeksforgeeks.org/how-to-create-a-form-dynamically-with-the-javascript/

        event.preventDefault();
        //console.dir(this.id);

        //console.log(this);
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.id + '&units=imperial&appid=3cdd7f0cff5a4ed1af7ae0635d8af1e2')
          .then(response => response.json())
          .then(data => {
            cityOutput.innerText = data.name;
            //cityName 
            // this.setAttribute("placeholder", data.name);
            
            console.dir(this);
            cityName.value = "";
            cityName.setAttribute("placeholder", data.name);

            var latEl = data.coord.lat.toFixed(2); 
            var lonEl = data.coord.lon.toFixed(2);
            //use the coordinate search api to pull up the data because the name search api does not include UV Index info
            fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + latEl + "&lon=" + lonEl + "&exclude=hourly&units=imperial&appid=3cdd7f0cff5a4ed1af7ae0635d8af1e2")
              .then(response => response.json())
              .then((data) => {

                tempOutput.innerText = data.current.temp;
                windOutput.innerText = data.current.wind_speed;
                humidityOutput.innerText = data.current.humidity;
                uvOutput.innerText = data.current.uvi;
                iconCode = data.current.weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
                $("#icon").html("<img src='" + iconUrl + "'>");  //https://www.reddit.com/r/FreeCodeCamp/comments/4con5s/how_do_i_use_the_icon_given_in_the_open_weather/



              });


          })

      });

      var latEl = data.coord.lat.toFixed(2);
      var lonEl = data.coord.lon.toFixed(2);
      //use the coordinate search api to pull up the data because the name search api does not include UV Index info
      fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + latEl + "&lon=" + lonEl + "&exclude=hourly&units=imperial&appid=3cdd7f0cff5a4ed1af7ae0635d8af1e2")
        .then(response => response.json())
        .then((data) => {

          tempOutput.innerText = data.current.temp;
          windOutput.innerText = data.current.wind_speed;
          humidityOutput.innerText = data.current.humidity;
          uvOutput.innerText = data.current.uvi;
          iconCode = data.current.weather[0].icon;
          var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
          $("#icon").html("<img src='" + iconUrl + "'>");  //https://www.reddit.com/r/FreeCodeCamp/comments/4con5s/how_do_i_use_the_icon_given_in_the_open_weather/


        });
    });
});






formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  //use the name search api to search for the cities coordinates
  fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName.value + '&units=imperial&appid=3cdd7f0cff5a4ed1af7ae0635d8af1e2')
    .then(response => response.json())
    .then(data => {
      //console.log(dayOneDate);
      //moment(dayOneDate).format('MM/DD/YYYY').innerText = data.list[6].dt_txt;

      dayOneDate.innerText = tomorrow
      dayOneIcon = data.list[6].weather[0].icon;
      console.log(data);
      dayOneTemp.innerText = data.list[6].main.temp;
      dayOneWind.innerText = data.list[6].wind.speed;
      dayOneHumidity.innerText = data.list[6].main.humidity;

      var iconUrlOne = "http://openweathermap.org/img/w/" + dayOneIcon + ".png";
      $("#dayOneIcon").html("<img src='" + iconUrlOne + "'>");

      dayTwoDate.innerText = threeDay
      dayTwoIcon = data.list[14].weather[0].icon;
      dayTwoTemp.innerText = data.list[14].main.temp;
      dayTwoWind.innerText = data.list[14].wind.speed;
      dayTwoHumidity.innerText = data.list[14].main.humidity;

      var iconUrlTwo = "http://openweathermap.org/img/w/" + dayTwoIcon + ".png";
      $("#dayTwoIcon").html("<img src='" + iconUrlTwo + "'>");

      dayThreeDate.innerText = fourDay
      dayThreeIcon = data.list[22].weather[0].icon;
      dayThreeTemp.innerText = data.list[22].main.temp;
      dayThreeWind.innerText = data.list[22].wind.speed;
      dayThreeHumidity.innerText = data.list[22].main.humidity;

      var iconUrlThree = "http://openweathermap.org/img/w/" + dayThreeIcon + ".png";
      $("#dayThreeIcon").html("<img src='" + iconUrlThree + "'>");

      dayFourDate.innerText = fiveDay
      dayFourIcon = data.list[30].weather[0].icon;
      dayFourTemp.innerText = data.list[30].main.temp;
      dayFourWind.innerText = data.list[30].wind.speed;
      dayFourHumidity.innerText = data.list[30].main.humidity;

      var iconUrlFour = "http://openweathermap.org/img/w/" + dayFourIcon + ".png";
      $("#dayFourIcon").html("<img src='" + iconUrlFour + "'>");

      dayFiveDate.innerText = sixDay
      dayFiveIcon = data.list[38].weather[0].icon;
      dayFiveTemp.innerText = data.list[38].main.temp;
      dayFiveWind.innerText = data.list[38].wind.speed;
      dayFiveHumidity.innerText = data.list[38].main.humidity;


      var iconUrlFive = "http://openweathermap.org/img/w/" + dayFiveIcon + ".png";
      $("#dayFiveIcon").html("<img src='" + iconUrlFive + "'>");

      $(".btnClass").click(function (event) {
        event.preventDefault();
        //console.log(event);
        //console.log(event.target.id);
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + event.target.id + '&units=imperial&appid=3cdd7f0cff5a4ed1af7ae0635d8af1e2')
          .then(response => response.json())
          .then(data => {
            dayOneDate.innerText = tomorrow;
            dayOneIcon = data.list[6].weather[0].icon;
            dayOneTemp.innerText = data.list[6].main.temp;
            dayOneWind.innerText = data.list[6].wind.speed;
            dayOneHumidity.innerText = data.list[6].main.humidity;

            var iconUrlOne = "http://openweathermap.org/img/w/" + dayOneIcon + ".png";
            $("#dayOneIcon").html("<img src='" + iconUrlOne + "'>");

            dayTwoDate.innerText = threeDay
            dayTwoIcon = data.list[14].weather[0].icon;
            dayTwoTemp.innerText = data.list[14].main.temp;
            dayTwoWind.innerText = data.list[14].wind.speed;
            dayTwoHumidity.innerText = data.list[14].main.humidity;

            var iconUrlTwo = "http://openweathermap.org/img/w/" + dayTwoIcon + ".png";
            $("#dayTwoIcon").html("<img src='" + iconUrlTwo + "'>");

            dayThreeDate.innerText = fourDay
            dayThreeIcon = data.list[22].weather[0].icon;
            dayThreeTemp.innerText = data.list[22].main.temp;
            dayThreeWind.innerText = data.list[22].wind.speed;
            dayThreeHumidity.innerText = data.list[22].main.humidity;

            var iconUrlThree = "http://openweathermap.org/img/w/" + dayThreeIcon + ".png";
            $("#dayThreeIcon").html("<img src='" + iconUrlThree + "'>");

            dayFourDate.innerText = fiveDay
            dayFourIcon = data.list[30].weather[0].icon;
            dayFourTemp.innerText = data.list[30].main.temp;
            dayFourWind.innerText = data.list[30].wind.speed;
            dayFourHumidity.innerText = data.list[30].main.humidity;

            var iconUrlFour = "http://openweathermap.org/img/w/" + dayFourIcon + ".png";
            $("#dayFourIcon").html("<img src='" + iconUrlFour + "'>");

            dayFiveDate.innerText = sixDay
            dayFiveIcon = data.list[38].weather[0].icon;
            dayFiveTemp.innerText = data.list[38].main.temp;
            dayFiveWind.innerText = data.list[38].wind.speed;
            dayFiveHumidity.innerText = data.list[38].main.humidity;


            var iconUrlFive = "http://openweathermap.org/img/w/" + dayFiveIcon + ".png";
            $("#dayFiveIcon").html("<img src='" + iconUrlFive + "'>");

          });
       });
    });
});



$("#currentDay").text(moment().format("(M/D/YYYY)"));
let today = moment();
let tomorrow = moment().add(1, 'days').format("M/D/YYYY");
let threeDay = moment().add(2, 'days').format("M/D/YYYY");
let fourDay = moment().add(3, 'days').format("M/D/YYYY");
let fiveDay = moment().add(4, 'days').format("M/D/YYYY");
let sixDay = moment().add(5, 'days').format("M/D/YYYY");



