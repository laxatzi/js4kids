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

var num1 = [3, 8, 9];
var num2 = [3, 8, 9];
var num3 = [7, 0, 1];

var areArraysSame = function(arr1, arr2){
   for(var i =0; i<arr1.length; i++){ // for loop to check objects in first array
      for(var j=0; j<arr2.length; j++) { // for loop to check objects in second array
           // conditional statement for comparing the two arrays object to object
        if (arr1[i] !== arr2[j]) {
           return false;
        }
          return true;
      }
   }
}

console.log(
   areArraysSame(num1,num2)  // true
); 
console.log(
   areArraysSame(num1,num3) // false
);