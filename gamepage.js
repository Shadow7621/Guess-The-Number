// generation of random value
var y = Math.floor(Math.random() * 10 +1);
// count of attempts
// until hit
  if (x == y) {
    alert("Congartulations!! "+playername+"You've guessed it right in "+guess+"Guess")
  } 

  if (x>y) {
    guess++;
    alert("Oops Sorry!! Try a smaller number");
  } else {
    guess++;
    alert("Oops Sorry!! Try a bigger number");
  }
// function for the number sent by the user
var x = document.getElementById("guessField").value;

function playAgain() {
    y = Math.floor(Math.random() * 10 +1);
}