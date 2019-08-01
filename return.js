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

