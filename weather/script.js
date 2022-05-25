const apikey = '85ccc1856bc3f4e91522c90cd7164428';

const APIURL = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getWeatherByLocation(city) {
  const resp = await fetch(APIURL(city));
  const respData = await resp.json();

  console.log(respData, KtoC(respData.main.temp));

  addWeather(respData);
}

function addWeather(data) {
  const temp = KtoF(data.main.temp);
  const city = data.name;

  const weather = document.createElement('div');
  weather.classList.add('weather');

  weather.innerHTML = `
    <h2>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      ${temp}°F
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    </h2>
    <small>${data.weather[0].main}</small>
  `;

  main.innerHTML = '';

  main.appendChild(weather);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = search.value;

  if (city) {
    getWeatherByLocation(city);
  }
})

function KtoC(K) {
  return (K - 273.15);
}

function CtoF(C) {
  return (C * 9 / 5) + 32;
}

function KtoF(K) {
  return CtoF(KtoC(K)).toFixed(0);
}
