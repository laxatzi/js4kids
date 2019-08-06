var show = function(elem){
      var getHeight = function(){
         elem.style.display = "block";
         var height = elem.scrollHeight+"px";
         elem.style.display = "";
         return height;
      };
      var height = getHeight();
      elem.style.height= height;
      elem.classList.add('is-visible');

      window.setTimeout(function() {
            elem.style.height= '';
      }, 350);
};

var hide = function (elem) {
   // Give the element a height to change from
   var getHeight = function(){
      var height = elem.scrollHeight+ "px";
      return height;
   }
   var height = getHeight();
   elem.style.height = height;
      //set our height back to 0. 
      window.setTimeout(function () {
         elem.style.height = '0'; // we could use without setTimeout() but...
      }, 1); //if we run it too quickly, the browser won’t detect the change at all and won’t run. We’ll use setTimeout() with a 1 millisecond delay to make sure the change registers.
   
      // When the transition is complete, hide it
	window.setTimeout(function () {
            elem.classList.remove('is-visible');
         }, 350);
   };
var toggle = function(elem) {
// if element is visible => hide it
    if(elem.classList.contains('is-visible')){
       hide(elem);
       return;
    }
    // if not visible => show it
    show(elem);
 }

 document.addEventListener('click', function(event){
    // the link should contain the toggle class otherwise the function stops
if (!event.target.classList.contains("toggle")) return;
    // link here works as a button for toggling
     event.preventDefault();
    // store the toggling content value as a var
   var togglingContent =  document.querySelector(event.target.hash);
   // if event target doesn't include a hash 
   if (!togglingContent) return;
       // the toggling function      
    toggle(togglingContent);
}, {capture:false});
