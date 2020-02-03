/**
 * POSSIBLE IMPLEMENTATION:
 *    EVENT LISTENER TO WATCH FOR A CLICK ON 'START' BUTTON
 *      DRAW A FULL BORDER AROUND THE TIMER
 *      START COUNTING DOWN THE TIMER
 *      EACH TIME THE TIMER COUNTS DOW,, UPDATE THE BORDER
 *      IF WE COUNTED DOWN AND TIMER REACHES 0
 *         EMIT AN EVENT THAT THE TIMER IS DONE
 *         RESET INTERNAL TIMER TO GET READY FOR ANOTHER RUN
 *
 *
 * POSSIBLE IMPLEMENTATION: BETTER OPTION
 *    EVENT LISTENER TO WATCH FOR A CLICK ON 'START' BUTTON
 *        EMIT AN EVENT STATING THAT THE TIMER HAS STARTED
 *        START COUNTING DOWN THE TIMER
 *        EMIT AN EVENT THAT THE TIMER HAS "TICKED"
 *        EACH TIME THE TIMER COUNTS DOWN, UPDATE THE TEXT
 *        IF WE COUNTED DOWN AND TMER REACHER 0
 *            EMIT AN EVENT THAT THE TIMER IS DONE
 *            RESET INTERNAL TIMER GET READY FOR ANOTHER RUN
 *
 * lETS HAVE 1 BLOCK OF CODE THAT IS 100% FOCUSED ON ONE ASPECT OF OUR APP
 *
 *
 *
 *
 *
 * CLASS BASED IMPLEMENTATION, HOW TO USE CLASS AROUND THE DOM ELEMENTS AND HOW TO DO IT EFFECTIVELY
 *
 * class Timer:
 *    //       (time number, play bt, pause button) on wheel
 *    constructor(duration, startBtn, pauseBtn)
 *    start()
 *    pause()
 *    onDurationChange()
 *    tick()
 *
 *
 *
 * Using "this" inside classes is weird... in order to use the this of the class and not the DOM when we addEventListener we need to make sure that the value of "this" inside the start() is what we expect it to be
 *
 * To determine the value inside of a class/method. It always has to refer to the instance of the class. Right now when we try to call this.startBtn with an eventListener the value of "this" is not what we expect it to be. It has been overriden and the value of "this" inside our method is istead = to our button and not class
 *
 *
 * 
 * The Value of 'this':
 * Did you define the function with () =>{}?    write log(this)
 * 
 * Did you call 'bind', 'call', 'apply' when invoked? 'this' = to the first argument of 'bind','call','apply'
 * 
 * All other casses     'this' is equal to whatever is to the left of the '.' in the method call
 * 
 * We need to do it with a () => {} function or apply() call() bind() so we can set the "this" keyword where we want it.
 * 
 * 
 * In babel or es5 the () => {} we did inside the class Timer gets moved into the constructor()
 * 
 *
 * 
 * with .bind() we attach it to the eventListener('click', this.start.bind(this))... so that means the start() {this.impor()} will be forced to = the value of "this" of the constructor
 *
 *
 * Storing data inside DOM is better than listening to event for the timer but its the old way
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


class Timer {
  constructor(durationInput, startButton, pausebButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // callbacks are optional not required to run
    if (callbacks) {
      // when we startup timer we're going to call this.onStart
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  // we can use class properties to make "this" = windw.obj and then target the class Timer
  start = () => {
    // calling the callbacks
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }

    // DEMO CODE NOT IMPORTANT
    // this.importantMethodToCall();

    // call tick right away cause the setInterval makes you wait 1sec before starting
    this.tick();

    // we want to make responsible for updating text in timer
    // run tick every 1 second
    this.interval = setInterval(this.tick, 20);
    // console.log(timer);

    // To make the timer stop we need to pass in the id of the interval that we can see with with console.log(timer);
    // clearInterval();

  };

  // pause
  pause = () => {
    clearInterval(this.interval);
  };

  // DEMO NOT IMPORTANT
  // importantMethodToCall() {
  //   console.log("IMPORTANT THING WAS DONE");
  // }

  // Decrease timer
  tick = () => {
    // console.log('tick');

    // stop the timer when it reaches 0
    if (this.timeRemaining <= 0) {
      // stop tick method from continuing to be invoked
      this.pause();

      // check if its completed
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      // // get value of input and convert with parse float... parseInt will give a number that doesnt have a decnimal and parseFloat will... parseInt('10.1') -> 10.... parseFloat('10.1') -> 10.1
      // const timeRemaining = parseFloat(this.durationInput.value);

      // // after we get time remaining
      // this.durationInput.value = timeRemaining - 1;

      // // A better way to do the above code is... with getter setter... we dont need the () after timeRemaining cause we're using "get"
      // const timeRemaining = this.timeRemaining;

      // // setter
      // this.timeRemaining = timeRemaining - 1;


      // even after the setter and getter we can shrink it more by
      this.timeRemaining = this.timeRemaining - .02;

      // tick down timer
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  // Helper methods
  // getTime() {
  //   return parseFloat(this.durationInput.value);
  // }

  // setTime(time) {
  //   this.durationInput.value = time;
  // }

  // Better methods than the above code is getter and setter
  // getter for time reamining
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  // setter to change the value inside the input.. pass in time
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }

}
