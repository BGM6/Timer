//Create a class
//Will have a start method, pause method, onDurationChange, tick method
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer has started!');
  },

  onTick() {
    console.log('Timer just ticked down');
  },

  onComplete() {
    console.log('Timer is completed');
  },
});
