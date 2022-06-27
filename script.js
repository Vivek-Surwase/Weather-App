var weather_btn = document.getElementById("Weather-btn");
var icon = document.getElementById("icon");
weather_btn.addEventListener("click", function () {
    let city = document.getElementById("city_input").value; 
    url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=af6520f9d1ca0d12f85ddf6b68b82414";
    fetch(url)
        .then((response) => { return response.json(); })
        .then((data) => {
            
            document.getElementById("city").innerHTML = data.name;
            document.getElementById("weather").innerHTML = data.weather[0].main;
            document.getElementById("des").innerHTML = data.weather[0].description;
            document.getElementById("temp").innerHTML = data.main.temp;
            document.getElementById("humidity").innerHTML = data.main.humidity;
            document.getElementById("pressure").innerHTML = data.main.pressure;
            document.getElementById("wind").innerHTML = data.wind.speed;
        })
});






  