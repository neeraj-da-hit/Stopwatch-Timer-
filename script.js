let minutesL = document.getElementById("mm");
let secondsL = document.getElementById("ss");
let miliSecondsL = document.getElementById("ms");
let h = document.getElementById('h');

let minute = 0;
let second = 0;
let mili = 0;
let interval;

function timeStart(){
    interval = setInterval(display,10);
   // minutesL.textContent = minute;
}
function display(){
    updateTime();
    mili++;
    if(mili===100){
        mili = 0;
        second++;
        if(second == 60){
            second = 0;
            minute++;
        }
    }
    console.log(minute+":"+second+":"+mili);
}
function updateTime(){
    minutesL.textContent = String(minute).padStart(2, '0');
    secondsL.textContent = String(second).padStart(2, '0');
    miliSecondsL.textContent = String(mili / 10).padStart(2, '0');
    //console.log(minute+":"+second+":"+mili);
}

function btnPress(v)
{
    if(v.value == 'start'){
         timeStart();
         console.log("go");
    } else if(v.value == 'stop'){
        stopTime();
    } else if(v.value == 'pause'){
        pauseTime();
    } else {
        resetTime();
    }
}
function stopTime() {
    clearInterval(interval);
}
function resetTime() {
    clearInterval(interval);
    minute = 0;
    second = 0;
    mili = 0;
    laps.innerHTML = "";
    updateTime(); // Reset display
}
function pauseTime() {
    let lapp = 0;
    let li = document.createElement("li");
    let lap = document.getElementById('laps');
    li.textContent = "Lap "+""+" "+String(minute).padStart(2, '0')+":"+String(second).padStart(2, '0')+":"+String(mili / 10).padStart(2, '0');
    lapp++;
    lap.appendChild(li);
    console.log(lapp);
}


