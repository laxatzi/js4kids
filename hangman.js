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




