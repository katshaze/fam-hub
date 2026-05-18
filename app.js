import { fetchWeather, renderWeatherHTML } from './modules/weather.js';
import { mountDatetime } from './modules/time.js';
import { renderMiddleHTML } from './modules/middle.js';
import { loadReminders, renderRemindersHTML } from './modules/reminders.js';

async function init() {
  const now = new Date();

  const datetimeRoot = document.getElementById('datetime-root');
  mountDatetime(datetimeRoot);

  const middleRoot = document.getElementById('middle-root');
  middleRoot.innerHTML = renderMiddleHTML(now);

  const weatherRoot = document.getElementById('weather-root');
  const weather = await fetchWeather();
  weatherRoot.innerHTML = renderWeatherHTML(weather);

  const remindersRoot = document.getElementById('reminders-root');
  await loadReminders();
  remindersRoot.innerHTML = renderRemindersHTML();
}

init();
