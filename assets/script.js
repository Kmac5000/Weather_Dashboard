var apiKey = "29677fe20199fe6d91bf4ac066217d18";
var city = "";

var currentWeather = $(".currentWeather");
var citySearch = $("#search-focus");
var searchBtn = $("#searchBtn");
var cityList = $(".cityList");
var currentSrch = "";
// console.log(city);
currentTemp = "";
currentHum = "";
currentWind = "";
currentUVI = "";
var weatherSetting = {
  async: true,
  crossDomain: true,
  url: "",
  method: "GET",
};

// creat function to get current weather conditions

// create function to get five day forcast

function coordinates() {
  var geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

  fetch(geoUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var lat = data[0].lat;
      var lon = data[0].lon;
      console.log(lat);
      console.log(lon);

      // call get weather function passing lat and lon as para
      var weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=imperial&appid=${apiKey}`;

      // use this call to call openweather onecall api
      fetch(weatherUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);

          $("#temp").text("Temperature: " + data.current.temp + "\u00B0" + "f");
          $("#hum").text("Humidity: " + data.current.humidity + "%");
          $("#wind").text("Wind Speed: " + data.current.wind_speed) + "MPH";
          $("#uvi").text("UV Index: " + data.current.uvi);
          if (data.current.uvi < 3) {
            $("#uvi").addClass("bg-success");
          } else if (data.current.uvi >= 6) {
            $("#uvi").addClass("bg-danger");
          } else {
            $("#uvi").addClass("bg-warning");
          }
        });
    });
}

// + currentTemp);

$("#uvi").text;

// coordinates(geoUrl);

function searchApi() {
  city = citySearch.val();
  console.log(city.val);
  weatherSetting.url = console.log(weatherSetting.url);

  // $.ajax(weatherSetting);
}

searchBtn.on("click", function (event) {
  event.preventDefault();
  city = citySearch.val().toLowerCase();
  console.log(city);
  localStorage.setItem("city", city);
  // add citys to list being created
  coordinates();
  createCityList();
});
function createCityList() {
  var unordLi = $("<div>");
  unordLi.addClass("col-2 border-light bg-danger");
  cityList.append(unordLi);
  unordLi.attr("id", "list");
  $("#list").text(city);

  $("list").append(unordLi);
  unordLi.text(localStorage.getItem("city"));
}

// searchApi();

// need for loop to pull from array of five day forcast
