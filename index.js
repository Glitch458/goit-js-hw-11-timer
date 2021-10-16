const refs = {
  days: document.querySelector("[data-value='days']"),
  hours: document.querySelector("[data-value='hours']"),
  mins: document.querySelector("[data-value='mins']"),
  secs: document.querySelector("[data-value='secs']"),
};

function pad(value) {
  return String(value).padStart(2, "0");
}

setInterval(() => {
  const currentTime = Date.now();
  const targetDate = new Date("2022, 4, 20").getTime();
  const timer = targetDate - currentTime;

  const days = pad(Math.floor(timer / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((timer % (1000 * 60)) / 1000));

  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}, 1000);
