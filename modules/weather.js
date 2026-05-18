export async function fetchWeather() {
  const weather = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=-33.83746790022109&lon=151.21235160829795&appid=0bddbf144589d3ef349e5228d96c4f94&units=metric');
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

  return `
    <div class="weather-location">${name}</div>
    <div class="weather-divider"></div>
    <div class="weather-temp">${temp}</div>
    <div class="weather-feels">Feels like ${feels}</div>
  `;
}
