 // REFACTORING THE HANGMAN GAME CODE

// We’re going to rewrite it using functions.

// 1. Will "feed" the game with some words and then let it "choose" one randomly. This is gonna be our hangman word

// var words = [
   // "thessaloniki",
   // "livorno",
   // "salerno",
   // "venice",
   // "athens",
   // "heraklion",
   // "istanbul",
   // "smyrna",
   // "alexandria"
//   "salonika"
// ]

// var selectedWord = words[Math.floor(Math.random() * words.length)];

// 2. =>  We will show an answer array of blanks in the place of each letter __ When a letter is guessed, it wil replace a blank.
// We will also use a variable to keep tracking how many letters are still left after each correct guess. For every guess the variable will be decreased by one (--variable)

// set up answer array
// var answerArr = [];
//  set up the tracking variable
// var lettersToFind = selectedWord.length;
// var guessTry = selectedWord.length+2;
// replace each letter with __ 
      // for(var i =0; i<selectedWord.length; i++){
      //    answerArr[i] = "__";
      // }

// Game Loop starts here

// While the word has not been guessed 
 // while(lettersToFind>0 && guessTry>0){ // no more letters to find => letterToFind = 0 means the word is guessed
      // show player their progress
 //     alert(answerArr.join(" "));
      // 3 get a guess from the player
 //     var guess = prompt("Guess a letter or choose to quit");
      // 4 if player wants quitting 
//     if(guess === null) { // when canceling prompt value converted to null 
 //        break; // stopping the loop
      }
      // 5. check if valid
  //    else if(guess.length !== 1) {
  //       alert("Please enter a single letter");
      }

      // if valid 
 //     else {
         // update game with the guess
         // ensure that is lowercase
 //        guess = guess.toLowerCase();
         // remove one attempt
  //       guessTry--;
               // nested loop here
 //        for (var j = 0; j<selectedWord.length; j++){
 //           if(selectedWord[j] === guess && answerArr[j]=== "__") { // if guess is right AND if answer is NOT already given (thus empty)
//                answerArr[j] = guess;  // replace blank with guess
//                lettersToFind--; // minus one letter to find
//             }

//          }
//       }
   
//  } // end of game loop

//  // show answer
//  alert(answerArr.join(" "));

//  if (guessTry>0){
//    alert("Congrats! The answer is " +selectedWord+ " !");      
//     }
// else {
//    alert("Sorry no more tries! The answer is " +selectedWord+ " !");
//  }

 





