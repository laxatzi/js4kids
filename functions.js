
// INSULT RANDOM GENERATOR

var randomBodyParts = ["nose", "hair", "neck"];
var randomAdjectives= ["smelly", "filthy", "boring"];
var randomAnimals =["pig", "monkey", "cow"];

// pick a random body part
var aRandomBodyPart = randomBodyParts[Math.floor(Math.random()*randomBodyParts.length)];

// pick a random adjective 
var aRandomAdjective = randomAdjectives[Math.floor(Math.random()* randomAdjectives.length)];

// pick a random animal
var aRandomAnimal = randomAnimals[Math.floor(Math.random()*randomAnimals.length)];

// join into a sentence
var randomSentence = "Your "+aRandomBodyPart+" is like a "+ aRandomAdjective +" "+ aRandomAnimal +"!!!";



// REFACTORING CODE IN INSULT RANDOM GENERATOR
// create a function
var randomPicker = function(arr){
   return arr[Math.floor(Math.random()*arr.length)];
}



// Making the random insult gen into a function
var randomInsultGen = function(){
var randomBodyParts = ["nose", "hair", "neck"];
var randomAdjectives= ["smelly", "filthy", "boring"];
var randomAnimals =["pig", "monkey", "cow"];

var randomString = "Your "+randomPicker(randomBodyParts)+" is like a "+randomPicker(randomAdjectives)+" "+randomPicker(randomAnimals)+"!!!";

return randomString;  // we have to assign a value to the function(thus "return"), just saving the variable doesn't cut it
}

console.log(randomInsultGen());