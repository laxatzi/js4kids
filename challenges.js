// CHALLENGE 1

// Create two functions, add and multiply.
// Using only these two functions, solve this simple
// mathematical problem:
// 36325 * 9824 + 777

var multiply = function(a,b){
   return a *b;
}

var add = function(a,b){
   return a+b;
}

console.log(
   add(multiply(36325, 9824),777)
);


// CHALLENGE 2

//   Write a function called areArraysSame that takes two arrays
//   of numbers as arguments. It should return true if the two
//   arrays are the same (that is, they have the same numbers
//   in the same order) and false if they’re different
