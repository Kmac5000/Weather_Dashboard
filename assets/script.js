var apiKey = "29677fe20199fe6d91bf4ac066217d18";
var city = "";

var currentWeather = $(".currentWeather");
var citySearch = $("#search-focus");
var searchBtn = $("#searchBtn");
var cityList = $(".cityList");
var futureWeather = $(".futureWeather");
var currentSrch = "";

currentTemp = "";
currentHum = "";
currentWind = "";
currentUVI = "";
futureTempHigh = "";
futureTempLow = "";
futureWind = "";
futureHum = "";

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const tomorrow1 = new Date(today);
tomorrow1.setDate(tomorrow1.getDate() + 2);
const tomorrow2 = new Date(today);
tomorrow2.setDate(tomorrow2.getDate() + 3);
const tomorrow3 = new Date(today);
tomorrow3.setDate(tomorrow3.getDate() + 4);
const tomorrow4 = new Date(today);
tomorrow4.setDate(tomorrow4.getDate() + 5);

var weatherSetting = {
  async: true,
  crossDomain: true,
  url: "",
  method: "GET",
};

// creat function to get current weather conditions

// create function to get five day forcast
init();
function init() {
  currentWeather.hide();
  futureWeather.hide();
}

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
            $("#uvi").addClass("bg-primary");
          }
          // })

          // five day forcast
          // .then(function (data) {

          $("#icon").attr("src", data.daily[0].weather[0].icon);
          $("#futureDay").text(tomorrow);
          $("#fiveTempHi").text(
            "High Temp: " + data.daily[0].temp.max + "\u00B0" + "f"
          );
          $("#fiveTempLo").text(
            "Low Temp: " + data.daily[0].temp.min + "\u00B0" + "f"
          );
          $("#fiveWind").text(
            "Wind Speed: " + data.daily[0].wind_speed + "MPH"
          );
          $("#fiveHum").text("Humidity: " + data.daily[0].humidity + "%");

          $("#futureDay1").text(tomorrow1);
          $("#fiveTempHi1").text(
            "High Temp: " + data.daily[1].temp.max + "\u00B0" + "f"
          );
          $("#fiveTempLo1").text(
            "Low Temp: " + data.daily[1].temp.min + "\u00B0" + "f"
          );
          $("#fiveWind1").text(
            "Wind Speed: " + data.daily[1].wind_speed + "MPH"
          );
          $("#fiveHum1").text("Humidity: " + data.daily[1].humidity + "%");

          $("#futureDay2").text(tomorrow2);
          $("#fiveTempHi2").text(
            "High Temp: " + data.daily[2].temp.max + "\u00B0" + "f"
          );
          $("#fiveTempLo2").text(
            "Low Temp: " + data.daily[2].temp.min + "\u00B0" + "f"
          );
          $("#fiveWind2").text(
            "Wind Speed: " + data.daily[2].wind_speed + "MPH"
          );
          $("#fiveHum2").text("Humidity: " + data.daily[2].humidity + "%");

          $("#futureDay3").text(tomorrow3);
          $("#fiveTempHi3").text(
            "High Temp: " + data.daily[3].temp.max + "\u00B0" + "f"
          );
          $("#fiveTempLo3").text(
            "Low Temp: " + data.daily[3].temp.min + "\u00B0" + "f"
          );
          $("#fiveWind3").text(
            "Wind Speed: " + data.daily[3].wind_speed + "MPH"
          );
          $("#fiveHum3").text("Humidity: " + data.daily[3].humidity + "%");

          $("#futureDay4").text(tomorrow4);
          $("#fiveTempHi4").text(
            "High Temp: " + data.daily[4].temp.max + "\u00B0" + "f"
          );
          $("#fiveTempLo4").text(
            "Low Temp: " + data.daily[4].temp.min + "\u00B0" + "f"
          );
          $("#fiveWind4").text(
            "Wind Speed: " + data.daily[4].wind_speed + "MPH"
          );
          $("#fiveHum4").text("Humidity: " + data.daily[4].humidity + "%");

          // var fiveDayList = $("<div>");
          // fiveDayList.addClass("col 2 border-light");
          // futureWeather.append(fiveDayList);
          // fiveDayList.attr("id", "fiveList");
          // $("fiveList").text(futureTempHigh);
          // $("");
          createCityList();
        });
    });
}

// + currentTemp);

// coordinates(geoUrl);

function searchApi() {
  city = citySearch.val();
  console.log(city.val);
  weatherSetting.url = console.log(weatherSetting.url);

  // $.ajax(weatherSetting);
}

searchBtn.on("click", function (event) {
  event.preventDefault();
  city = citySearch.val().toUpperCase();
  console.log(city);
  localStorage.setItem("city", city);
  // add citys to list being created
  coordinates();
});
function createCityList() {
  // for (i = 0; i > 5; i++) {
  var unordLi = $("<button>");
  unordLi.addClass("col-2 border-light bg-info");
  cityList.append(unordLi);
  unordLi.attr("id", "city1");
  $("#list").text(city);

  $("#list").append(unordLi);
  unordLi.text(localStorage.getItem("city"));

  currentWeather.show();
  futureWeather.show();
}

// searchApi();

// need for loop to pull from array of five day forcast
