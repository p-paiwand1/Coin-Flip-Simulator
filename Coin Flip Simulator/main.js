// Coin Flip Simulator

// HTML variables
let outputE1 = document.getElementById("output");
let headsE1 = document.getElementById("heads-out");
let tailsE1 = document.getElementById("tails-out");

// Count Variables
let numheads = 0;
let numtails = 0;

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a Random Number
  let randNum = Math.random();
  console.log(randNum);

  //   Simulate the Coin Flip
  if (randNum < 0.5) {
    outputE1.innerHTML = "<img src='heads.png' />";
    numheads++;
    headsE1.innerHTML = numheads;
  } else {
    outputE1.innerHTML = "<img src='tails.png' />";
    numtails++;
    tailsE1.innerHTML = numtails;
  }
}
