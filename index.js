const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;

// Pass in elements to constructor in Timer
const timer = new Timer(durationInput, startButton, pauseButton, {
  // 3 lifecycle callbacks... when we can play sounds etc also.
  onStart(totalDuration) {
    // Whenever timer starts do this
    // console.log("Timer Started!");

    duration = totalDuration;
  },
  onTick(timeRemaining) {
    // make svg decrease by time
    circle.setAttribute('stroke-dashoffset',
      perimeter * timeRemaining / duration - perimeter
    );

  },
  onComplete() {
    console.log("Timer is completed");
  }
})














































































































































































































//====================== TEST CODE =============================

// Arrow function what "this" means
// const Colors = {
//   printColor() {
//     console.log(this); // {printColor}
//     const printThis = () => {
//       console.log(this); // {printColor}
//     }
//     printThis()
//   }
// }

// Colors.printColor()// {printColor}... so that means the value "this"  is going to be = what the colors object as well.







// // If we invoked "this" with BIND, CALL, APPLY... to use any of those 3, the first argument to all three is the value of "this" we want to execute the function with
// const printThis = function () {
//   console.log(this);

// }
// // invoke printThis with .call()... the its going to be the value of "this" inside of the function... the value of "this" is going to be equal to that object we made below so now the "this" in the function is colro:"red"
// // printThis.call({ color: 'red' }) // {color: "red"}

// // same with apply
// // printThis.apply({ color: 'red' }); //{color: "red"}

// // if we dont call the function with apply() nor call() if we just call it directly the value of "this" is going to be more unpredicatbale
// printThis();   // window






// // All other cases
// // In order to determine what the value of "this" is going to be inside the function.
// // "this" is equal to whatever is to the left of teh '.' in the method call colors.printColor so the "this" will equal to color
// const colors = {
//   printColor() {
//     console.log(this);
//   }
// }
// colors.printColor(); // {printColor: ƒ}

// // another example
// const randomObject = {
//   a: 1,
//   // the below is equivalent to if i copied it here
//   // printColor() {
//   //   console.log(this);
//   // }
// };
// // assign randomObject a new property named printColor with "." and assign it printColor()
// randomObject.printColor = colors.printColor;

// // call the above we made... what dictates what "this" is to whatever is to the left of the "." which is randomObject
// randomObject.printColor(); // {a: 1, printColor: ƒ}



















// console.log(this);
// const printThis = () => {
//   console.log(this);
// }
// printThis();



