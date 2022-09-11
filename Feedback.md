### HOMEWORK 2 (To Do Timer)
Again, Amazing work here - I love the ambition you’re tackling these projects with and love what you’re coming away with. That hard work you’re putting into these is paying off because the code looks really clean and well written overall and the projects themselves are great for tossing into your eventual portfolio

#### HTML + CSS
The classnames in this project look a lot cleaner, not a ton to note here that wasn’t noted on the last projects feedback.
I love the way you’re setting up the mobile view - great use of the media tag

#### JS
Awesome work overall - I love how you’re setting up your timer. If you want, it might be worth taking a peek at the Date object built into Javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
I think your problem right now isn’t that you have a lot of event listeners, having that many is natural for this kind of application I think. The problem that might be kicking off your spidey senses is that you have a lot of code tossed into those event listeners without context - making them feel very bulky. Good ways to mitigate this would be either through leaving comments to separate out logical sections of your javascript functions or by breaking out similar logic into intentionally named functions
Another option you have, instead of swapping the contents of your timer section when setting the timer with something completely new you can pre-generate the contents in the HTML and toggle which is displayed depending on your state (so instead of hiding the timer, start button, and pause button you’d just hide a container with the timer, start button, or pause button in it and swap which is shown based on the state of your app)
Option 3: You can abstract away some of your inner logic into tiny helper functions. This’ll again make your file longer, but it’ll also make it both more readable and easier to chunk up into different files

Outside of the above the JS looks great - as we get further into the course we’ll come across more technologies that’ll make organizing it easier
	
	

#### Example of Reset Timer function being rewritten with comments
```
// function to reset timer and all variables
function resetTimer(){
    clearInterval(timerId);
    isPaused=false;

    // Set up hour countdown
    hoursInput.value='';
    hoursInput.classList.remove('hidden');
    hoursLeft.innerHTML='00';

    // Set up minute countdown
    minutesInput.value = '';
    minutesInput.classList.remove('hidden');
    minutesLeft.innerHTML='00';

    // Set up second countdown
    secondsLeft.innerHTML='00';

    // Swap in pause button
    pauseButton.innerHTML = 'Pause';
    pauseButton.classList.add('hidden');
    startButton.classList.remove('hidden');

    // Swap in set button
    timerTitle.innerHTML = 'Set a timer';
    timerTitle.classList.remove('hidden');
    timeNow.classList.add('hidden');
};
```

#### Example of Reset Timer being rewritten to use more functions
```
const resetCountdown = (counter, input) => {
    // If an input exists, reset it
    // (optional since seconds doesn't have an input)
    if (input) {
        input.value = '';
        input.classList.remove('hidden');
    }
    // Reset timer
    counter.innerHTML = '00';
}

const unpauseTimer = () => {
    isPaused = false;
    // Swap in start button
    pauseButton.innerHTML = 'Pause';
    pauseButton.classList.add('hidden');
    startButton.classList.remove('hidden');
    // Swap in set button
    timerTitle.innerHTML = 'Set a timer';
    timerTitle.classList.remove('hidden');
    timeNow.classList.add('hidden');
}

// function to reset timer and all variables
function resetTimer() {
    clearInterval(timerId);
    resetCountdown(hoursLeft, hoursInput);
    resetCountdown(minutesLeft, minutesInput);
    resetCountdown(secondsLeft);
    unpauseTimer();
};
```
