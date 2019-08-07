
// REFACTORING THE HANGMAN GAME CODE

// We’re going to rewrite it using functions.

// 1. Will "feed" the game with some words and then let it "choose" one randomly. This is gonna be our hangman word

var words = [
    "thessaloniki",
    "livorno",
    "salerno",
    "venice",
    "athens",
    "heraklion",
    "istanbul",
    "smyrna",
    "alexandria",
    "salonika"
 ]
 // picking a random word
var pickWord = function() {
   var word = words[Math.floor(Math.random()* words.length)];
   return word;
}
// display the answer
var setUpAnswerArr = function(selectedWord) {
   var answerArray = [];
   for(var i =0; i<selectedWord.length; i++){
         answerArray[i] = "__";
       }
       return answerArray;
}
// update game status
var updateGameState = function(guess, selectedWord, answerArray) {
  
      // update game with the guess
      // ensure that is lowercase
            guess = guess.toLowerCase();
      // remove one attempt
            guessTry--;
      // loop
            for(var j = 0; j<selectedWord.length; j++){
               if(selectedWord[j] === guess && answerArray[j] === "__"){
                  // if guess is right AND if answer is NOT already given(thus empty) =>
               answerArray[j] = guess; // replace bland with guess
               lettersToFind--;
               }
            }
}
    // show player their progress
    var showPlayerProgress = function(answerArray){
         alert(answerArray.join(" "));
      };

      var getGuess = function(){
       return  prompt("Guess a letter or choose to quit!");
      };

var selectedWord = pickWord();
var answerArray = setUpAnswerArr(selectedWord);
var guessTry = selectedWord.length+2;
var lettersToFind = selectedWord.length;

// While the word has not been guessed 
  while(lettersToFind>0 && guessTry>0){ // no more letters to find => letterToFind = 0 means the word is guessed
      // show player their progress
      showPlayerProgress(answerArray);

      var guess = getGuess();
      // 4 if player wants quitting 
          if(guess === null) { // when canceling prompt value converted to null 
             break; // stopping the loop
            }
      // 5. check if valid
           else if(guess.length !== 1) {
              alert("Please enter a single letter");
             }
      // if valid 
           else {
          updateGameState(guess, selectedWord, answerArray);
         
         }
   } // end of game loop
             
              // show answer
   alert(answerArray.join(" "));
       if (guessTry === 0 ){
          alert("Sorry no more attempts are allowed! The answer is " +selectedWord+ " !");
         }

    else if (guessTry>0){
         alert("Congrats! The answer is " +selectedWord+ " !");      
         }
         else {
            alert("Sorry you have lost!");
         }