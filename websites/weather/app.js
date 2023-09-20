
      
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

