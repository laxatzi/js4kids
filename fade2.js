
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
