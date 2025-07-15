const API_KEY = `7192874cc244d413b77103cc3b6cdf90`;
const input = document.querySelector('input');
const cityName = document.querySelector(".name");
const temp = document.querySelector(".temp");
const condition = document.querySelector(".condition");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherCard = document.querySelector('.weather-card');
document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(input.value);

})


async function getWeather(input) {

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`);
    const data = await res.json();
    console.log(data);

    if (data.cod == 404) {

        cityName.innerHTML = "--";
        temp.innerHTML = "--°C";
        condition.innerHTML = "Condition: --";
        humidity.innerHTML = "Humidity: --%";
        wind.innerHTML = "Wind: -- km/h";

    }
    else {
        cityName.innerHTML = data.name;
        temp.innerHTML = `${data.main.temp}°C`;
        condition.innerHTML = `Condition: ${data.weather[0].main}`;
        humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
        wind.innerHTML = `Wind: ${data.wind.speed} km/h`;

    }

}


