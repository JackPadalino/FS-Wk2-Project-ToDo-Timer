/*~~~~~JS for to do list~~~~~*/
const taskInput=document.getElementById('taskInput');
const addTaskButton=document.getElementById('addTaskButton');
const taskContainer=document.getElementById('taskContainer');
const clearListButton=document.getElementById('clearListButton');
const reminderMessage=document.getElementById('reminderMessage');

reminderMessage.classList.add('hidden');

addTaskButton.addEventListener('click',function(){
    const newTask=taskInput.value;
    if(newTask){
        const newListItem=document.createElement('p');
        newListItem.classList.add('newTask');
        newListItem.innerHTML=newTask;
        newListItem.addEventListener('click',function(){
            this.classList.toggle('done');
        });
        taskContainer.appendChild(newListItem);
        taskInput.value='';
    };
    reminderMessage.classList.remove('hidden');
});

clearListButton.addEventListener('click',function(){
    while(taskContainer.firstChild){
        taskContainer.removeChild(taskContainer.firstChild);
    };
    reminderMessage.classList.add('hidden');
});

/*~~~~~JS for timer~~~~~*/
let startHours;
let startMinutes;
let startSeconds;
let timerId;
let totalSeconds;
let isPaused=false;

const timerTitle=document.getElementById('timerTitle');
const timerInputContainer=document.getElementById('timerInputContainer');
//const timeContainer=document.getElementById('timeContainer');
const timeNow=document.getElementById('timeNow');
const hoursInput=document.getElementById('hoursInput');
const minutesInput=document.getElementById('minutesInput');
const hoursLeft=document.getElementById('hoursLeft');
const minutesLeft=document.getElementById('minutesLeft');
const secondsLeft=document.getElementById('secondsLeft');
const startButton=document.getElementById('startButton');
const pauseButton=document.getElementById('pauseButton');
const resetButton=document.getElementById('resetButton');

timeNow.classList.add('hidden');
pauseButton.classList.add('hidden');

// function to reset timer and all variables
function resetTimer(){
    clearInterval(timerId);
    isPaused=false;
    hoursInput.value='';
    minutesInput.value='';
    hoursLeft.innerHTML='00';
    minutesLeft.innerHTML='00';
    secondsLeft.innerHTML='00';
    timerTitle.innerHTML='Set a timer';
    pauseButton.innerHTML='Pause';
    timerTitle.classList.remove('hidden');
    timeNow.classList.add('hidden');
    hoursInput.classList.remove('hidden');
    minutesInput.classList.remove('hidden');
    startButton.classList.remove('hidden');
    pauseButton.classList.add('hidden');
};

// display message when timer reaches 0
function finishMessage(){
    clearInterval(timerId);
    timerTitle.innerHTML='You did it! Take a break!';
    timeNow.classList.add('hidden');
    startButton.classList.add('hidden');
    pauseButton.classList.add('hidden'); 
};

// function to set the time as double digits if necessary
function setDisplayTime(time,timeLeft){
    if(time<10){
        timeLeft.innerHTML='0'+time;
    }else{
        timeLeft.innerHTML=time;
    };
};

// function to create a new time interval and countdown by 1 second
// every second - resets seconds, minutes, and hours as time counts
// down
function countDown(){
    timerId=setInterval(()=>{
        hours = parseInt(totalSeconds/3600);
        minutes = parseInt((totalSeconds-hours*3600)/60);
        seconds = totalSeconds-hours*3600-minutes*60;
        setDisplayTime(hours,hoursLeft); 
        setDisplayTime(minutes,minutesLeft);
        setDisplayTime(seconds,secondsLeft);
        if(totalSeconds<0){
            finishMessage();
        };
        totalSeconds-=1;
    },1000);
};

startButton.addEventListener('click',function(){
    startHours=hoursInput.value;
    startMinutes=minutesInput.value;
    totalSeconds=(startHours*3600)+(startMinutes*60);
    timerTitle.innerHTML='You got this!';
    timeNow.classList.remove('hidden');
    hoursInput.classList.add('hidden');
    minutesInput.classList.add('hidden');
    this.classList.add('hidden');
    pauseButton.classList.remove('hidden');
    countDown();
});

pauseButton.addEventListener('click',function(){
    if(isPaused){
        countDown();
        this.innerHTML='Pause';
        isPaused=false;
    }else{
        clearInterval(timerId);
        this.innerHTML='Resume';
        isPaused=true;
    };
})

resetButton.addEventListener('click',resetTimer);
