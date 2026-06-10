import { WEATHER_API_KEY } from '../config.local.js';

export async function fetchWeather() {
  const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-33.83746790022109&lon=151.21235160829795&appid=${WEATHER_API_KEY}&units=metric`);
  const data = await weather.json();
  return data;
}

export function formatTemperature(temp) {
  const numericTemp = Number(temp);

  if (!Number.isFinite(numericTemp)) {
    return '--°';
  }
  return `${numericTemp.toFixed(1)}°`;
}

export function renderWeatherHTML(data) {
  const name = typeof data.name === 'string' ? data.name : '';
  const temp = formatTemperature(data.main?.temp);
  const feels = formatTemperature(data.main?.feels_like);
  const icon = data.weather[0].icon || '01d';
  const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
  const iconHtml = `<img src="${iconUrl}" alt="Weather icon" class="weather-icon">`;

  return `
    <div class="flex flex-row items-center gap-2">
      <div>${iconHtml}</div>
      <div class="weather-temp">${temp}</div>
    </div>
    <div class="weather-feels">Feels like ${feels}</div>
  `;
}
