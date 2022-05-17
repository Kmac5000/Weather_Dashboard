




var weatherAdd = "https://api.openweathermap.org/data/2.5/onecall"

var apiKey = ("588211c33c6b0efc0936212b7dfcb608");

var searchBtn = $(".searchBtn");
var cityInput = $(".cityInput");
var searchCity = $("#form1");
var cityList = $(".citylist");
var yourCity = "";
var previousCity = "";
var city = "";
// load most recent city on page entry

function lastCity() {
    var city = searchCity.val();
    yourCity = searchCity.val();
}

// on click, save city to local value
searchBtn.on("click", (event) => {
    event.preventDefault();
    yourCity = searchCity.val();
    localStorage.setItem('city', yourCity)
});

function renderCity() {
    var yourCity = JSON.parse(localStorage.getItem("city")) || [];

    cityList.push({ city }),
        
        cityList.innerHTML = localStorage.getItem('city');
    
    if (cityList.length === 0) {
        return cityList.text("")
    };

    for (let i = 0; i < yourCity.length; i++) {
        var cityObj = yourCity;
        var newLi = $("<li>", {
            class: "list-group-item",
            
        });

        newLi.text(cityObj);
        cityList.append(newLi);
    }
    
};

renderCity()
console.log(cityList)






