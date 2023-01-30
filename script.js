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

// This is the .on(click) function to trigger a fetch call
$("button").on("click", function (event) {

    // Prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Grabs a text from the input box
    let city =$("#search-input").val();

    let queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=394c49c0d6d4115d71f8b7b4a45917af";

    console.log(queryURL.city);

})


fetch("https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=394c49c0d6d4115d71f8b7b4a45917af")
.then(response => response.json())
.then(citiesData=> {
    let firstCity = citiesData.city;
    let firstCityLat = firstCity.coord.lat;
    let firstCityLon = firstCity.coord.lon;
    
    console.log(firstCity.coord.lat);
    console.log(firstCity.coord.lon);
    console.log(firstCity);
    
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCityLat}&lon=${firstCityLon}&appid=394c49c0d6d4115d71f8b7b4a45917af`);
})

.then(response => response.json())
.then(data => {
    
    console.log(data);
    
    // Transfer content to HTML
    // add date and time content to html
    let todaysDate = moment(data.list[0].dt, "X").format("DD/MM/YYYY HH:mm");
    // add city to html
    $(".city").html("<h3> " + data.city.name + "&nbsp &nbsp" + todaysDate, "</h3>");
    // convert and add temperature content to html
    $(".temp").text("Temp: "+ (data.list[0].main.temp - 273.15).toFixed(2) + "°C");
    // add wind content to html
    $(".wind").text("Wind: "+ data.list[0].wind.speed + "KPH");
    // add humidity content to html
    $(".humidity").text("Humidity: "+ data.list[0].main.humidity + "%");

        })

