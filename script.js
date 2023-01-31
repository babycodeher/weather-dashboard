// Initial array of cities
let citiesSearch = [];
let cityHistory = document.querySelector("#history");
let cityInput = document.querySelector("#search-input");

// Function for displaying city data
function renderButton() {
   
    // Looping through array of cities
    for (let i = 0; i < citiesSearch.length; i++) {
        const city = citiesSearch[i];
        
        // generates buttons for each city in the array
        let newButton = document.createElement("button");
        newButton.textContent = city;
        cityHistory.appendChild(newButton);
    }
}

// Function handles event when the search button is clicked
$("#search-button").on("click", function(event) {

    event.preventDefault();
    if(cityInput.value.trim() !== ""){
        cityHistory.innerHTML = "";
        let newCity = cityInput.value
        citiesSearch.push(newCity);
        cityInput.value ="";
        renderButton();
        getData(newCity);
      }
})

$("#history").click(function(event) {
    // console.log(event);
    console.log("Event: ", event.target);
    //console.log("This: ", $(this));

    // capture the value (from the HTML element)
    let historyCity = event.target.textContent
    console.log(event.target.textContent)
    // send that value to our fetch method
    getData(historyCity)
})

renderButton();

function getData(cityName) {

fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=394c49c0d6d4115d71f8b7b4a45917af`)
    .then(response => response.json())
    .then(citySearchData => {

        let cityResult =citySearchData[0];
        let cityLat = cityResult.lat;
        let cityLon = cityResult.lon;
        console.log(cityResult.lon);

return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&appid=394c49c0d6d4115d71f8b7b4a45917af`);
       
    })

.then(response => response.json())
.then(cityGeoData => {
    
    console.log(cityGeoData);
    
    // Transfer content to HTML
    // add date and time content to html
    let todaysDate = moment(cityGeoData.list[0].dt, "X").format("DD/MM/YYYY");
    // add creent weather icon to html
    $("#icon").attr("src", `http://openweathermap.org/img/wn/${cityGeoData.list[6].weather[0].icon}@2x.png`);
    // add city to html
    $(".city").html("<h4> " + cityGeoData.city.name + "&nbsp &nbsp" + todaysDate, "</h4>");
    // convert and add temperature content to html
    $(".temp").text("Temp: "+ (cityGeoData.list[0].main.temp - 273.15).toFixed(2) + "°C");
    // add wind content to html
    $(".wind").text("Wind: "+ cityGeoData.list[0].wind.speed + "KPH");
    // add humidity content to html
    $(".humidity").text("Humidity: "+ cityGeoData.list[0].main.humidity + "%");

    // Day1 weather forecast html content
    let day1 = moment(cityGeoData.list[6].dt, "X").format("DD/MM/YYYY");
    $("#icon1").attr("src", `http://openweathermap.org/img/wn/${cityGeoData.list[6].weather[0].icon}@2x.png`);
    $(".forecast-day1").text(day1);
    $(".temp1").text("Temp: "+ (cityGeoData.list[6].main.temp - 273.15).toFixed(2) + "°C");
    $(".wind1").text("Wind: "+ cityGeoData.list[6].wind.speed + "KPH");
    $(".humidity1").text("Humidity: "+ cityGeoData.list[6].main.humidity + "%");

    // Day2 weather forecast html content
    let day2 = moment(cityGeoData.list[14].dt, "X").format("DD/MM/YYYY");
    $("#icon2").attr("src", `http://openweathermap.org/img/wn/${cityGeoData.list[14].weather[0].icon}@2x.png`);
    $(".forecast-day2").text(day2);
    $(".temp2").text("Temp: "+ (cityGeoData.list[14].main.temp - 273.15).toFixed(2) + "°C");
    $(".wind2").text("Wind: "+ cityGeoData.list[14].wind.speed + "KPH");
    $(".humidity2").text("Humidity: "+ cityGeoData.list[14].main.humidity + "%");
    
    // Day3 weather forecast html content
    let day3 = moment(cityGeoData.list[22].dt, "X").format("DD/MM/YYYY");
    $("#icon3").attr("src", `http://openweathermap.org/img/wn/${cityGeoData.list[22].weather[0].icon}@2x.png`);
    $(".forecast-day3").text(day3);
    $(".temp3").text("Temp: "+ (cityGeoData.list[22].main.temp - 273.15).toFixed(2) + "°C");
    $(".wind3").text("Wind: "+ cityGeoData.list[22].wind.speed + "KPH");
    $(".humidity3").text("Humidity: "+ cityGeoData.list[22].main.humidity + "%");

    // Day4 weather forecast html content
    let day4 = moment(cityGeoData.list[30].dt, "X").format("DD/MM/YYYY");
    $("#icon4").attr("src", `http://openweathermap.org/img/wn/${cityGeoData.list[30].weather[0].icon}@2x.png`);
    $(".forecast-day4").text(day4);
    $(".temp4").text("Temp: "+ (cityGeoData.list[30].main.temp - 273.15).toFixed(2) + "°C");
    $(".wind4").text("Wind: "+ cityGeoData.list[30].wind.speed + "KPH");
    $(".humidity4").text("Humidity: "+ cityGeoData.list[30].main.humidity + "%");

    // Day5 weather forecast html content
    let day5 = moment(cityGeoData.list[38].dt, "X").format("DD/MM/YYYY");
    $("#icon5").attr("src", `http://openweathermap.org/img/wn/${cityGeoData.list[38].weather[0].icon}@2x.png`);
    $(".forecast-day5").text(day5);
    $(".temp5").text("Temp: "+ (cityGeoData.list[38].main.temp - 273.15).toFixed(2) + "°C");
    $(".wind5").text("Wind: "+ cityGeoData.list[38].wind.speed + "KPH");
    $(".humidity5").text("Humidity: "+ cityGeoData.list[38].main.humidity + "%");

})

}


