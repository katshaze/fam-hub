// Show as Monday, 17 April 2026
const dateOptions = {
  weekday: 'long', // "Monday"
  day: 'numeric',   // "17"
  month: 'long',   // "April"
  year: 'numeric',  // "2026"
};

// Show as 08:57
const timeOptions = {
  hour: '2-digit',  // "08"
  minute: '2-digit', // "57"
};

const secondsOptions = {
  second: '2-digit', // "57"
};

let greeting = 'Good Evening!';
let date = new Date().toLocaleDateString('en-UK', dateOptions);
let time = new Date().toLocaleTimeString('en-UK', timeOptions);
let seconds = new Date().toLocaleTimeString('en-US', secondsOptions);
const nowHour = new Date().getHours();
if (nowHour < 12) {
  greeting = 'Good Morning!';
} else if (nowHour < 18) {
  greeting = 'Good Afternoon!';
}

const weather = fetch('https://api.openweathermap.org/data/2.5/weather?lat=-33.83746790022109&lon=151.21235160829795&appid=0bddbf144589d3ef349e5228d96c4f94&units=metric');
console.log('weather: -33.83746790022109, 151.21235160829795 ', weather);
weather.then(response => response.json()).then(data => {
  console.log('data: ', data);
  document.getElementById('temperature').textContent = `${data.main.temp}, feels like ${data.main.feels_like}`;
  document.getElementById('weather').textContent = `Today's weather is ${data.weather[0].description}`;
});

const timeElement = document.getElementById('time');
const secondsElement = document.getElementById('seconds');

function updateTime() {
  let time = new Date().toLocaleTimeString('en-UK', timeOptions);
  let seconds = new Date().toLocaleTimeString('en-UK', secondsOptions);
  timeElement.textContent = time;
  secondsElement.textContent = seconds;
}

updateTime();
setInterval(updateTime, 1000);

document.getElementById('greeting').textContent = greeting;
document.getElementById('date').textContent = date;
