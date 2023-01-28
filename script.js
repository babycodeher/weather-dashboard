


// $("button").on("click", function () {
//     let city =$(this).attr("search-input");
//     let queryURL = "https://api.openweathermap.org/data/2.5/forecast?" + city + "&appid=394c49c0d6d4115d71f8b7b4a45917af";

//     console.log(queryURL);

// })



fetch("https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=394c49c0d6d4115d71f8b7b4a45917af")
    .then(response => response.json())
    .then(citiesData=> {
        let firstCity =citiesData.city;

        console.log(firstCity.coord.lat);
        console.log(firstCity.coord.lon);
        
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.coord.lat}&lon=${firstCity.coord.lon}&appid=394c49c0d6d4115d71f8b7b4a45917af`)
    })

        .then(response => response.json())
        .then(data => {

            console.log(data);
        })