//variables of the letters
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x","y", "z"];

  //variables that hold score, guesses, and letters guessed
  var wins = 0;
  var losses = 0;
  var chances = 9;
  var usedLetters = [""]; // array to push user choices to

  //function run whenever the user presses a key.
  document.onkeyup = function(event){
//taking in userGuess and turning the letters into lower case
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//computer select random letter from the computerChoices array
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //userGuess letters get pushed into the usedLetters array
    usedLetters.push(userGuess);
    //logic: userGuess is the same as the computerGuess, win one point
    if (userGuess === computerGuess) {
    wins++;
    //message will pop up
    alert("You got it!");
    //chances will be reset to 9
    chances = 9;
    //usedLetters array will be reset to 0
    usedLetters.length = 0;
  }
  //logic: if chances run out, user will lose a point
  else if (chances == 0){
          losses++;
          //message will pop up that user didn't win and play again
          alert('You didn\'t guess the correct letter. You lost. Let\'s play again.');
          //chanes will be reset to 9
          chances = 9;
          //usedLetters array will be reset to 0
          usedLetters.length = 0;
      }
      //logic: if the userGuess doesn't equal the computerGuess, will lose a chance
      else if (userGuess !== computerGuess){
       chances--;
       //message will pop up that it's incorrect
       alert("That's incorrect. Nice try!"); //decrementing the guesses left
   };

   // displaying the scores in HTML
   document.getElementById("guessedLetters").innerHTML = usedLetters;

   document.getElementById("guessesLefts").innerHTML = chances;

   document.getElementById("wins").innerHTML = wins;

   document.getElementById("losses").innerHTML = losses;
   };

// restart button will reset game
   document.getElementById("restartBtn").addEventListener("click", refresh);

   function refresh() {
     location.reload();
   };
