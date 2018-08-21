function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

//Total possible numbers to guess from
var max_length = 10000;
var arr = Array.from({length: max_length}, (v, k) => ++k);
var allGuesses = "";
function guess() {
  //If we've exhausted our guesses
  //   then set the array back to being full size
  if(arr.length < 1)
    resetTheArray();

  //Guesses an answer and prints it to the page
  //   then removes that answer from the array
  var guessIndex = randomNumber(arr.length)-1;
  var theGuess = arr[guessIndex];
  arr.splice(guessIndex, 1);

  return theGuess;
}

function resetTheArray() {
    arr = Array.from({length: max_length}, (v, k) => ++k);
}
//This is how many attempt the computer took to guess it
var counter = 0;
//This is the number the computer is trying to guess
var correctAnswer = randomNumber(10000);

//ATTEMPT 1
while( guess() != correctAnswer ) {
  counter++;
}
document.write("<h2>ATTEMPT 1</h2>");
document.write("<p>ARRAY LENGTH (pre-reset): " + arr.length + " --- ");
resetTheArray();
document.write("ARRAY LENGTH (post-reset): " + arr.length + "</p>");
document.write("<p>IT TOOK THE COMPUTER " + counter + " GUESSES TO ACHIEVE THE CORRECT ANSWER! </p>");
counter = 0;

//ATTEMPT 2
while( guess() != correctAnswer ) {
  counter++;
}
document.write("<h2>ATTEMPT 2</h2>");
document.write("<p>ARRAY LENGTH (pre-reset): " + arr.length + " --- ");
resetTheArray();
document.write("ARRAY LENGTH (post-reset): " + arr.length + "</p>");
document.write("<p>IT TOOK THE COMPUTER " + counter + " GUESSES TO ACHIEVE THE CORRECT ANSWER! </p>");
counter = 0;

//ATTEMPT 3
while( guess() != correctAnswer ) {
  counter++;
}
document.write("<h2>ATTEMPT 3</h2>");
document.write("<p>ARRAY LENGTH (pre-reset): " + arr.length + " --- ");
resetTheArray();
document.write("ARRAY LENGTH (post-reset): " + arr.length + "</p>");
document.write("<p>IT TOOK THE COMPUTER " + counter + " GUESSES TO ACHIEVE THE CORRECT ANSWER! </p>");
counter = 0;
