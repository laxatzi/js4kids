
//replace heading text using the DOM.

var headingOne = document.getElementById('main_heading');
var headingText = "This is the new heading text!";

headingOne.innerHTML = headingText;

// create new elements and add them to the DOM tree

var newParText = document.createTextNode("This is a new paragraph"); // paragraph text
var newP = document.createElement('p'); // paragraph element

newP.appendChild(newParText);// 'fill in' paragraph element with text
document.querySelector('body').appendChild(newP); // 'place' the paragraph into the body

