
      
      const apiKey = "7286b668e31a4aebb3a92629232009";

        function getWeather() {
            const locationInput = document.getElementById("location");
            const location = locationInput.value;

            // API URL
            const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

            // Make a GET request to the API
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // Display weather information
                    const weatherInfo = document.getElementById("weatherInfo");
                    weatherInfo.innerHTML = `
                        <h2><i class="fas fa-cloud"></i> Weather in ${data.location.name}, ${data.location.country}</h2>
                        <p><i class="fas fa-thermometer-half"></i> <span>Temperature: ${data.current.temp_c}°C</span></p>
                        <p><i class="fas fa-cloud-sun"></i> <span>Condition: ${data.current.condition.text}</span></p>
                        <p><i class="fas fa-tint"></i></i> <span>Humidity: ${data.current.humidity}%</span></p>
                        <p><i class="fas fa-wind"></i> <span>Wind Speed: ${data.current.wind_kph} km/h</span></p>
                    `;
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        }
                // Initialize AOS with desired options
                AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Animation easing
        });

 // Function to fetch weather data using GPS coordinates
 function fetchWeatherData(latitude, longitude) {
    // Replace 'YOUR_API_KEY' with your WeatherAPI.com API key
    const apiKey = '7286b668e31a4aebb3a92629232009';

    // Make an API request to WeatherAPI.com using GPS coordinates
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`)
        .then(response => response.json())
        .then(weatherData => {
            // Extract the relevant weather information
            const location = weatherData.location.name;
            const temperature = weatherData.current.temp_c;
            const conditionText = weatherData.current.condition.text;

            // Display the weather details
            const weatherDetails = document.querySelector('.weather-details');
            weatherDetails.innerHTML = `
                <p><i class="fas fa-map-marker-alt"></i> Location: ${location}</p>
                <p><i class="fas fa-thermometer-half"></i> Temperature: ${temperature}°C</p>
                <p><i class="fas fa-cloud"></i> Condition: ${conditionText}</p>
            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

// Function to handle successful geolocation
function handleGeolocationSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Call the fetchWeatherData function with the obtained coordinates
    fetchWeatherData(latitude, longitude);
}

// Function to handle geolocation error
function handleGeolocationError(error) {
    console.error('Geolocation error:', error.message);
}

// Check if geolocation is available in the browser
if ('geolocation' in navigator) {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(handleGeolocationSuccess, handleGeolocationError);
} else {
    console.error('Geolocation is not available in this browser.');
}