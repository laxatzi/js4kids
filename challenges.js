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


