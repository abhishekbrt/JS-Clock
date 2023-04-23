console.log('set date and time');

const secHand=document.querySelector(".hand-s");
const minHand=document.querySelector(".hand-m");
const hourHand=document.querySelector(".hand-h");

function setDate(){
    const now=new Date();
    const sec=now.getSeconds();
    const secDegree=((sec/60)*360)-90;
    secHand.style.transform=`rotate(${secDegree}deg)`;

    const min=now.getMinutes();
    const minDegree=((min/60)*360)-90;
    minHand.style.transform=`rotate(${minDegree}deg)`;


    const hour=now.getHours();
    const hourDegree=((hour/12)*360)-90;
    hourHand.style.transform=`rotate(${hourDegree}deg)`;
}
setInterval(setDate,1000); //calling setDate function every 1000 milli seconds.
setDate();  //used for displaying date and time on a web page in real time ,without manual refresh.  