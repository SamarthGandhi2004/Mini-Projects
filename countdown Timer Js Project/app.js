
const tDate="21 jun 2025, 10:00:00 am"
const targetDate= new Date(tDate).getTime();
console.log("targetDate",targetDate);

function updateCountdown() {
    const now=new Date().getTime();
    
    const timeDiffrence=targetDate - now;
   

    if (timeDiffrence>0){
        const days=Math.floor(timeDiffrence/(1000*60*60*24));
        const hours=Math.floor((timeDiffrence%(1000*60*60*24))/(1000*60*60));
        const minutes=Math.floor((timeDiffrence%(1000*60*60))/(1000*60));
        const seconds=Math.floor((timeDiffrence%(1000*60))/1000);
        document.getElementById("daysNum").value=days;
        document.getElementById("hoursNum").value=hours;
        document.getElementById("minutesNum").value=minutes;
        document.getElementById("secondsNum").value=seconds;
        setTimeout(updateCountdown,1000);
    }
    else{
        document.getElementById("countdown").innerHTML="Countdown Finished";
        document.getElementById("daysNum").value=0;
        document.getElementById("hoursNum").value=0;
        document.getElementById("minutesNum").value=0;
        document.getElementById("secondsNum").value=0;
    }
}
updateCountdown();
document.getElementById("setDate").innerHTML=tDate;

