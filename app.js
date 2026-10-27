import { mountWeather } from './modules/weather.js';
import { mountDatetime } from './modules/time.js';
import { mountMiddle } from './modules/middle.js';
import { loadReminders, renderRemindersHTML, startRemindersAutoRefresh } from './modules/reminders.js';

async function init() {
  const datetimeRoot = document.getElementById('datetime-root');
  mountDatetime(datetimeRoot);
  mountMiddle(document.getElementById('middle-root'));
  mountWeather(document.getElementById('weather-root'));
  const remindersRoot = document.getElementById('reminders-root');
  await loadReminders();
  remindersRoot.innerHTML = renderRemindersHTML();
  startRemindersAutoRefresh();
}

init();
