'use strict';

const API_URL = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = '960489e2ac5d4b61889b7668d5d369f4';
let CITY = '';

const temp = document.getElementById('temp');
const cityName = document.getElementById('city');
const summary = document.getElementById('summary');

const inputCity = document.getElementById('input-city');
inputCity.addEventListener('input', ({ target }) => {
    const value = target.value.trim();
    if (value) CITY = value;
})

window.addEventListener('keydown', ({ code }) => {
    if (code === 'Enter' && CITY) {
        fetch(`${API_URL}?q=${CITY}&units=metric&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                const description = data.weather[0].description;
                const icon = data.weather[0].icon;
                const temperature = data.main.temp;
                temp.innerHTML = `${temperature} C <i class="fas fa-temperature-high"></i>`;
                cityName.innerHTML = CITY;
                summary.innerHTML = description;
                console.log(data);
            })
            .catch(err => alert('Please enter a correct city name'));
    }
});

