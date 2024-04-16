const deg = 6;
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const setClock = () => {
    const day = new Date();
    const hh = day.getHours() * 30;
    const mm = day.getMinutes() * deg;
    const ss = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`; // Fix the rotation transformation here
    sec.style.transform = `rotateZ(${ss}deg)`;
};

setClock();
setInterval(setClock, 1000);

const switchTheme = (event) => {
    const switchBtn = event.target;
    if (switchBtn.textContent.toLowerCase() === 'light') {
        switchBtn.textContent = 'dark';
        localStorage.setItem('theme', 'dark');
        document
        .documentElement
        .setAttribute('data-theme', 'dark');
    } else {
        switchBtn.textContent = 'light';
        localStorage.setItem('theme', 'light');
        document
        .documentElement
        .setAttribute('data-theme', 'light');
    }
};

const switchModeBtn = document
    .querySelector('.switch-btn');
switchModeBtn
    .addEventListener('click', switchTheme);

let currentTheme = localStorage
    .getItem('theme')
    ? localStorage.getItem('theme')
    : 'light';

document
  .documentElement
  .setAttribute('data-theme', currentTheme);
 switchModeBtn.textContent = currentTheme;
