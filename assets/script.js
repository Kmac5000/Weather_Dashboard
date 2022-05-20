var baseUrl = "http://api.weatherapi.com/v1/";
var apiKey = "key=25992b2ec8a74f02ad1222121221805";
var citySearch = $("#search-focus");
var searchBtn = $("#searchBtn");
var currentSrch = "";

var weatherSetting = {
  async: true,
  crossDomain: true,
  url: "",
  method: "GET",
};

function searchApi() {
  city = citySearch.val();
  localStorage.setItem("city", city);
  console.log(city.val);
  weatherSetting.url =
    "https://api.weatherapi.com/v1/current.json?key=25992b2ec8a74f02ad1222121221805&q=" +
    city +
    "&aqi=yes";
  console.log(weatherSetting.url);

  // $.ajax(weatherSetting);
}

searchBtn.on("click", searchApi());
