const digits = document.querySelector(".digits");
const secondTens = document.getElementByID("secondTens");
const secondOnes = document.getElementByID("secondOnes");
const msHundreds = document.getElementByID("msHundreds");
const msTens = document.getElementByID("msTens");

timer(10);

function timer() {
  init();
  // this is called by the timer function, which is called by timer.
  // this calls the functions below.

  function init() {
    secondTens.innerHTML = "0";
    secondOnes.innerHTML = "0";
    msHundreds.innerHTML = "0";
    msTens.innerHTML = "0";

    // set an interval that calls updateTimer as well as calls endTimer after 10 seconds
    let ms = 0; // so you can keep track of how many milliseconds you are at. Has to be outside of the loop or it will be reset when its called.
    const timerInterval = window.setInterval(() => {
      // you can call setInterval without window, but window just specifies the scope at which the information can be found - aka Global/Window.
      ms += 10; // every 10 milliseconds it will increment ms by 1, which will then update the updateTimer.
      if (ms === 10000) {
        endTimer(timerInterval);
      }
      updateTimer(ms);
    }, 10);
  }

  function increment(string) {
    let number = Number(string) + 1;
    return number.toString();
  } // if you are repeating yourself, this is always a good option to avoid it.

  function endTimer(intervalId) {
    clearInterval(intervald);
    Array.from(digits.children).forEach(digit => {
      digit.classList.add("redDigit"); // can also do digit.style.color = "red"; - this sets the color rather than setting it to a class. Aka in-line styling, which is considered bad practice.
    });
  }

  function updateTimer() {
    if (ms === 10000) {
      secondTens.innerHTML = "1";
      secondsOnes.innerHTML = "0";
      msHundreds.innerHTML = "0";
      msTens.innerHTML = "0";
    } else if (ms % 1000 === 0) {
      // if we hit 10 seconds
      secondOnes.innerHTML = increment(secondOnes.innerHTML);
      msHundreds.innerHTML = "0";
      msTens.innerHTML = "0";
    } else if (ms % 100 === 0) {
      msHundreds.innerHTML = increment(msHundreds.innerHTML);
      msTens.innerHTML = "0";
    } else {
      msTens.innerHTML = increment(msTens.innerHTML);
    }
  }
}

// let myInterval = window.setInterval(() => {
//     console.log("it's been 10 ms already");
// }, 10);

// console.log(myInterval);
// clearInterval(myInterval);

// this logs the text ever 10 milliseconds until clearInterval is called.

// function increment () {
//     // helper function that gets called by updateTimer.
// }

// function endTimer() {

// }
