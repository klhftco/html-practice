const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');

const schoolStart = "Aug 24 2022";

function countdown() {
  const currentDate = new Date();
  const schoolDate = new Date(schoolStart);

  const totalSeconds = (schoolDate - currentDate) / 1000;
  const day = Math.floor(totalSeconds / 3600 / 24);
  const hour = Math.floor(totalSeconds / 3600) % 24;
  const min = Math.floor(totalSeconds / 60) % 60;
  const sec = Math.floor(totalSeconds) % 60;

  dayEl.innerHTML = day;
  hourEl.innerHTML = formatTime(hour);
  minEl.innerHTML = formatTime(min);
  secEl.innerHTML = formatTime(sec);
}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time;
}

countdown(); // call countdown when site launch at first
setInterval(countdown, 1000); // call countdown every 1000 ms
