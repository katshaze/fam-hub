import { formatWeekday } from './time.js';
import { getGreeting } from './greetings.js';

export function renderMiddleHTML(date) {
  const hour = date.getHours();
  const greeting = getGreeting(hour);
  const weekday = formatWeekday(date);

  return `
    <div class="greeting">${greeting}</div>
    <div class="larger-text">Today is <span class="weekday">${weekday}</span></div>
  `;
}
