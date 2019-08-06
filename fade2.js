var show = function(element) {

}

var toggle =  function(element) {
   if(element.classList.contains('is-visible')){
      hide(element);
      return;
   }
      show(element);
}



document.addEventListener('click', function(event){

   if(!event.target.classList.contains('toggle')) return;
   event.preventDefault;

   var togglingContent = document.querySelector(event.target.hash);
   if(!togglingContent) return; 

   toggle(togglingContent);
}, false);
