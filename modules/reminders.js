let remindersData = null;

export async function loadReminders() {
  const res = await fetch('/reminders.json');
  if (!res.ok) throw new Error('Missing reminders.json — copy reminders.example.json');
  remindersData = await res.json();
}

function renderReminderList(items) {
  if (!items.length) {
    return '<p class="school-reminders-empty">None for today!</p>';
  }
  return `
    <ul class="reminder-list">
      ${items.map((item) => `
        <li class="reminder-item">
          <label class="reminder-label">
            <input type="checkbox" class="reminder-checkbox" />
            <span>${item}</span>
          </label>
        </li>
      `).join('')}
    </ul>
  `;
}

export function getSchoolReminders(day, child) {
  return remindersData.schedule[day]?.[child] ?? [];
}

export function getSchoolRemindersForToday(child) {
  const today = new Date().getDay();
  return getSchoolReminders(today, child);
}

export function renderRemindersHTML() {
  const { children } = remindersData;

  return children.map(({ id, name }) => `
    <div class="school-reminders">
      <div>${name}</div>
      <div class="school-reminders-items">${renderReminderList(getSchoolRemindersForToday(id))}</div>
    </div>
  `).join('');
}
