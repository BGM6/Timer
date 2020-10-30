//create a class
// will have a start method, pause method, onDurationChange, tick method

class Timer {
  constructor(durationInput, startButton, pauseButton) {
    // THIS - start lives here
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  // Using an arrow function here allows 'THIS' to live in the class
  start = () => {
    // This will start the timer immediately instead of waiting a sec before start
    this.tick();
    this.timer = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.timer);
  };

  tick = () => {
    console.log('tick');
  };
}

const durationInput = document.querySelector('#input');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);
