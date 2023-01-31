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
      }
    
})

renderButton();



fetch("http://api.openweathermap.org/geo/1.0/direct?q=Lagos&limit=1&appid=394c49c0d6d4115d71f8b7b4a45917af")
    .then(response => response.json())
    .then(citySearchData => {

        let cityResult =citySearchData[0];
        let cityLat = cityResult.lat;
        let cityLon = cityResult.lon;
        console.log(cityResult.lon);

return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&appid=394c49c0d6d4115d71f8b7b4a45917af`);
       
    })

.then(response => response.json())
.then(data => {
    
    console.log(data);
    
    // Transfer content to HTML
    // add date and time content to html
    let todaysDate = moment(data.list[0].dt, "X").format("DD/MM/YYYY");
    // add city to html
    $(".city").html("<h3> " + data.city.name + "&nbsp &nbsp" + todaysDate, "</h3>");
    // convert and add temperature content to html
    $(".temp").text("Temp: "+ (data.list[0].main.temp - 273.15).toFixed(2) + "°C");
    // add wind content to html
    $(".wind").text("Wind: "+ data.list[0].wind.speed + "KPH");
    // add humidity content to html
    $(".humidity").text("Humidity: "+ data.list[0].main.humidity + "%");

})




