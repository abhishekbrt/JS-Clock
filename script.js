console.log('set date and time');

const secHand=document.querySelector(".hand-s");
const minHand=document.querySelector(".hand-m");
const hourHand=document.querySelector(".hand-h");
const digitalClock = document.getElementById('digital-clock');
const dateDisplay = document.getElementById('date-display');
const themeSwitcher = document.getElementById('theme-switcher');
const body = document.querySelector('body');

function setDate(){
    const now=new Date();
    const sec=now.getSeconds();
    const secDegree=((sec/60)*360)-90;
    secHand.style.transform=`rotate(${secDegree}deg)`;

    const min=now.getMinutes();
    const minDegree=((min/60)*360) + ((sec/60)*6) - 90;
    minHand.style.transform=`rotate(${minDegree}deg)`;


    const hour=now.getHours();
    const hourDegree=((hour/12)*360) + ((min/60)*30) -90;
    hourHand.style.transform=`rotate(${hourDegree}deg)`;

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    digitalClock.textContent = `${hours}:${minutes}:${seconds}`;

    const today = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    dateDisplay.textContent = today;
}
setInterval(setDate,1000); //calling setDate function every 1000 milli seconds.
setDate();  //used for displaying date and time on a web page in real time ,without manual refresh.

themeSwitcher.addEventListener('click', () => {
    body.classList.toggle('dark');
});