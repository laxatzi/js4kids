// Exercise #2
//   Make a random string generator. 
var alphabet= "abcdefghijklmnopqrstuvwxyz";
var randomString = "";

//The actual loop
for(var j = 0; j<10; j++){
   var randomIndex =  Math.floor(Math.random() * alphabet.length);
   var randomLetter = alphabet[randomIndex];
   // we add a random letter in each loop
   randomString += randomLetter;
}
// check the log to see if works
console.log(randomString);

// Exercise #3
// Turn text into h4ck3r sp34k!
// letters to replace: i=1, a=4, e=3, o=0;

var input = "javascript is awesome!";
var output= "";

// The actual loop
   for(var j =0; j<input.length; j++){
      if (input[j]=== "i"){
         output += 1;
      }
      else if(input[j] === "a"){
         output += 4;
      }
      else if (input[j] === "e"){
         output += 3;
      }
      else if (input[j]=== "o"){
         output += 0;
      }
      else{
      output += input[j];
   }
}
//log to check
 console.log(output);
