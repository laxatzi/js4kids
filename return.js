// using return to leave from a function

var fifthLetterOfName = function(name) {
   if(name.length < 5) {
      return;
   }

   return "The fifth letter of your name is "+ name[4]+"!";
}

console.log(
            fifthLetterOfName("Stavros")
);

// return INSTEAD OF if...else
// the if...else way

var medalForScore = function(score) {
   if (score<5){
      return "You won the 'Bronze' medal!";
   }
   else if(score<10) {
      return "You won the 'Silver' medal!";
   }

   else {
      return "you won the 'Gold' medal!";
   }
}

// using return instead
var scoreForMedal = function(score){
   if (score<5){
      return "You won the 'Bronze' medal!";
   }

   if(score <10) {
      return "You won the 'Silver' medal!";
   }
       return "You won the 'Gold' medal!";

}

console.log(
            scoreForMedal(7)

);
