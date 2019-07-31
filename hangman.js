// a pseudocode version of our game

 /*
     1. Pick a random word

      While the word has not been guessed {
        2. Show the player their current progress
        3. Get a guess from the player

       4.  if the player wants to quit {
            quit
         }
       5.  else if the guess is not valid {
            Tell player to pick a single letter
         }

      6.   else {
            if the guess is in the word {
               update players progress by adding the guess
            }
         }
      }
      7.   congrats the player on guessing the word
 */

// The main game takes place in a while loop in which the basic for all games structure exists, thus, 
//  a. Take input from player
//  b. Update games state
//  c. Display current state to the player


// 1. Will "feed" the game with some words and then let it "choose" one randomly. This is gonna be our hangman word

     var words = [
         "Thessaloniki",
         "Livorno",
         "Salerno",
         "Venice",
         "Athens",
         "Heraklion",
         "Istanbul"
     ]

     var selectedWord = words[Math.floor(Math.random() * words.length)];

// 2. =>  We will show an answer array of blanks in the place of each letter __ When a letter is guessed, it wil replace a blank.
// We will also use a variable to keep tracking how many letters are still left after each correct guess. For every guess the variable will be decreased by one (--variable)
    
     // set up answer array
     var answerArr = [];
     //  set up the tracking variable
     var lettersToFind = selectedWord.length;
      // replace each letter with __ 
            for(var i =0; i<selectedWord.length; i++){
               answerArr[i] = "__";
            }

// Game Loop starts here

   // While the word has not been guessed 
       while(letterToFind>0){ // no more letters to find => letterToFind = 0 means the word is guessed
            // show player their progress
            alert(answerArr.join(" "));
            // 3 get a guess from the player
            var guess = prompt("Guess a letter of choose to quit");
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
               // update game with the guess
                     // nested loop here
               for (var j = 0; j<selectedWord.length; j++){
                  if(selectedWord[j] === guess) { // if guess is right
                     answerArr[j] = guess;  // replace blank with guess
                     lettersToFind--; // minus one letter to find
                  }
               }
            }
         
       } // end of game loop

       // show answer
       alert(answerArr.join(" "));
       alert("Congrats! The answer is "+ selectedWord+ " !");
    



