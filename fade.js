// Show an element
var show = function (elem) {
	elem.style.display = 'block';
};

// Hide an element
var hide = function (elem) {
	elem.style.display = 'none';
};

// Toggle element visibility
var toggle = function (elem) {

	// If the element is visible, hide it
	if (window.getComputedStyle(elem).display === 'block') {
		hide(elem);
		return;
	}

	// Otherwise, show it
	show(elem);

};
// Listen for click events
document.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
	if (!event.target.classList.contains('toggle')) return;

	// Prevent default link behavior
	event.preventDefault();

	// Get the content
	var content = document.querySelector(event.target.hash);
	if (!content) return;

	// Toggle the content
	toggle(content);

}, false);

//To show an element, we first need to get it’s natural height

var getHeight = function () {
	elem.style.display = 'block'; // Make it visible
	var height = elem.scrollHeight + 'px'; // Get it's height...scrollHeight tells you the height of an element’s content, and store it to a variable. This returns an integer, so we’ll need to add px to the end to use with our inline style.
	elem.style.display = ''; //  Hide it again
	return height;  //Finally, we’ll hide our element again by removing the display property, and return our height value.
};