const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const time = document.querySelector(".time");
setInterval(() => {
  let day = new Date();
  let hh = day.getHours();
  let mm = day.getMinutes();
  let ss = day.getSeconds() * 6;
  hour.style.transform = `rotateZ(${hh * 30 + mm / 2}deg)`;
  min.style.transform = `rotateZ(${mm * 6}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
  if (mm < 10) {
    mm = `0${mm}`;
  }
  time.innerHTML = `${hh}:${mm}`;
});
