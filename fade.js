// Show an element ...

var show = function (elem) {
   //To show an element, we first need to get it’s natural height...we use the getHeight function
   var getHeight = function () {
      elem.style.display = 'block'; // Make it visible ... this would suffice on its own (out of the function) if didn't want to animate
      var height = elem.scrollHeight + 'px'; // Get it's height...scrollHeight tells you the height of an element’s content, and store it to a variable. This returns an integer, so we’ll need to add px to the end to use with our inline style.
      elem.style.display = ''; //  Hide it again
      return height;  //Finally, we’ll hide our element again by removing the display property, and return our height value.
   };  // end of function
         // In the above function ...Even though we’re showing and then re-hiding our content, it never shows visibly for users because the function runs so quickly (just a few milliseconds) and thus never actually renders visually in the DOM.

   var height = getHeight(); // Get the natural height
	elem.classList.add('is-visible'); // Make the element visible
   elem.style.height = height; // Update the max-height
   
      // Once the transition is complete, remove the inline max-height so the content can scale responsively
      window.setTimeout(function () {
         elem.style.height = '';
      }, 350);


};

// Hide an element ==> Visible elements, once animated, have a height of auto. To animate hiding them, we need to give them a fixed height to animate down to 0.

var hide = function (elem) {
// Give the element a height to change from
   elem.style.height = elem.scrollHeight + 'px';
   //set our height back to 0. 
   window.setTimeout(function () {
		elem.style.height = '0'; // we could use without setTimeout() but...
   }, 1); //if we run it too quickly, the browser won’t detect the change at all and won’t run. We’ll use setTimeout() with a 1 millisecond delay to make sure the change registers.
   
   // When the transition is complete, hide it
	window.setTimeout(function () {
		elem.classList.remove('is-visible');
	}, 350);
};

// Toggle element visibility
var toggle = function (elem   ) {
     
   // If the element is visible, hide it
   if(elem.classList.contains('is-visible')) {
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




