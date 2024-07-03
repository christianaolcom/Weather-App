async function getWeather(city) {
    const apiKey = 'a3b8d6fb17f68e5be7796cea40bdfb96';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('disps').innerText = error.message;
    }
}

function displayWeather(data) {
    document.getElementById('location').innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById('description').innerText = `${data.weather[0].description}`;
    document.getElementById('humidity').innerText = `${data.main.humidity}%`;
    document.getElementById('wind').innerText = `${data.wind.speed} m/s`;
    
    document.getElementById('temperature').innerText = `${data.main.temp}°C`;
    document.getElementById('minTemp').innerText = `${data.main.temp_min}°C`;
    document.getElementById('maxTemp').innerText = `${data.main.temp_max}°C`;
    document.getElementById('feelsLike').innerText = `${data.main.feels_like}°C`;
    document.getElementById('pressure').innerText = `${data.main.pressure} hPa`;
}

async function checkWeather() {
    const city = document.getElementById('check').value;
    const disps = document.getElementById('disps');

    if (city === '') {
        disps.innerHTML = `<p class="mx-auto alert alert-info w-75 mx-5 fw-bold">Please enter a city name.</p>`;
        return;
    }

    await getWeather(city);
}

window.onload = function() {
    getWeather('Lagos');
}




















