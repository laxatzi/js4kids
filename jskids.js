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

