let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let milliseconds = document.getElementById("milli-seconds");

let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

let hr = 0;
let min = 0;
let sec = 0;
let millisec = 0;

let timeInterval;

const timer = () => {
    millisec++;
    if(millisec < 9) 
    {
        milliseconds.innerHTML = "0" + millisec;
    }

    if(millisec > 9)
    {
        milliseconds.innerHTML = millisec;
    }

    if(millisec > 99)
    {
        sec++;
        seconds.innerHTML = "0" + sec;
        millisec = 0;
        milliseconds.innerHTML = "0" + 0;
    }

    if(sec > 9)
    {
        seconds.innerHTML = sec;
    }

    if(sec > 59)
    {
        min++;
        minutes.innerHTML = "0" + min;
        sec = 0;
        seconds.innerHTML = "0" + 0;
    }

    if(min > 9)
    {
        minutes.innerHTML = min;
    }

    if(min > 59)
    {
        hr++;
        hours.innerHTML = "0" + hr;
        min = 0;
        minutes.innerHTML = "0" + 0;
    }
}

// Start Button //
startBtn.addEventListener('click' ,()=>{
    timeInterval= setInterval(timer,10);
});

// Stop Button //
stopBtn.addEventListener('click' , ()=>{
    clearInterval(timeInterval);
});

// Reset Button //
resetBtn.addEventListener('click' , ()=>{
    clearInterval(timeInterval);
    sec = "00";
    millisec = "00";
    min = "00";
    hr = "00";
    hours.innerHTML = hr;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    milliseconds.innerHTML = millisec;
});