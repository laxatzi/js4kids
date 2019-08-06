var toggle = function(elem) {
   if(elem.classList.contains('is-visible')){
      hide(elem);
   }
   show(elem);
}

document.addEventListener('click', function(event){
   if(!document.event.target.classList.contains('toggle')) return;
   
   event.preventDefault();

   var togglingContent= document.querySelector(event.target.hash);
   if (!togglingContent) return;

   toggle(togglingContent);
}, {capture: false});
