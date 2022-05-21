var apiKey = "29677fe20199fe6d91bf4ac066217d18";
var city = "";

var citySearch = $("#search-focus");
var searchBtn = $("#searchBtn");
var cityList = $(".cityList");
var currentSrch = "";
console.log(city);
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

      var name = data[0].name;

      console.log(name);

      // call get weather function passing lat and lon as para
      var weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=imperial&appid=${apiKey}`;

      // use this call to call openweather onecall api
      fetch(weatherUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          console.log(response);
          var currentWeather = response[1];
          console.log(currentWeather);
        });
    });
}

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
