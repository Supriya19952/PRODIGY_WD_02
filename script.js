let display = document.querySelector('.timerDisplay');
let btnStart = document.getElementById('btnStart');
let btnPause = document.getElementById('btnPause');
let btnRestart = document.getElementById('btnRestart');
let btnReset = document.getElementById('btnReset');
let laps = document.querySelector('.laps');
let btnLaps = document.getElementById('btnLaps');
let btnResetLaps = document.getElementById('btnResetLap');


let hrs = 0;
let sec = 0;
let mins = 0;
let msec = 0;
let timerID;

btnStart.addEventListener('click',function(){
   start();
});

function start(){
    if(!timerID){
        timerID = setInterval(startTimer ,10);
    }
    
}
function startTimer(){
    display.innerHTML = getTimer();
    msec++
    if(msec == 100){
        msec=0
        sec++;
        console.log(msec)
    }
    if(sec == 60){
        sec =0;
        mins++
        console.log(sec)
    }
    if(mins == 60){
        mins = 0;
        hrs++
        console.log(mins)
    }
    if(hrs == 13){
        hrs =1;
        console.log(hrs)
    }
}

function getTimer(){
    return (hrs<10 ? "0" + hrs : hrs) +  " : "  + (mins < 10 ? "0" + mins : mins) +  " : "  + (sec < 10 ? "0" + sec : sec) +  " : "  +(msec < 10 ? "0" + msec : msec);
}

btnPause.addEventListener('click', function(){
    stopTimer();
});


function stopTimer(){
    clearInterval(timerID);
    timerID =null;
}


btnRestart.addEventListener('click',function(){
    if(timerID){
        reset();
        start();
    }
});

btnReset.addEventListener('click',function(){
   reset();
})

function reset(){
    clearInterval(timerID);
    timerID = null;
    display.innerHTML = `00 : 00 : 00 : 00`;
    msec = sec = mins = hrs = 0;
}

btnLaps.addEventListener('click',function(){
    if(timerID){

        let node = document.createElement('li');
        node.innerHTML = getTimer();

        laps.appendChild(node);
    
    }
})

btnResetLaps.addEventListener('click',function(){
    laps.innerHTML = " " ; 
})