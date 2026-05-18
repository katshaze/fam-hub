const dateOptions = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

const timeOptions = {
  hour: '2-digit',
  minute: '2-digit',
};

export function formatDate(date) {
  return date.toLocaleDateString('en-GB', dateOptions);
}

export function formatWeekday(date) {
  return date.toLocaleDateString('en-GB', { weekday: 'long' });
}

/** Full markup for the left column: calendar date + clock (updates cheaply every second). */
export function renderDatetimeHTML(now) {
  const dateStr = formatDate(now);
  const timeStr = now.toLocaleTimeString('en-GB', timeOptions);
  const secondsStr = String(now.getSeconds()).padStart(2, '0');

  return `
    <div class="date-line">${dateStr}</div>
    <div class="timeContainer">
      <span class="clock-time">${timeStr}</span>
      <span class="clock-seconds">${secondsStr}</span>
    </div>
  `;
}

export function mountDatetime(root) {
  function tick() {
    root.innerHTML = renderDatetimeHTML(new Date());
  }
  tick();
  setInterval(tick, 1000);
}
