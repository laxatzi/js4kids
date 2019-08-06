var show = function(elem) {
   var getHeight = function(p){
      elem.style.display = "block";
      var height = elem.scrollHeight+"px"
      elem.style.display = "";
      return height;
   }

   var height = getHeight();
   elem.style.height = height;
   elem.classList.add('is-visible');

   window.setTimeout(function(){
         elem.style.height = '';
   }, 350);
}


var hide = function(elem) {
   var getHeight= function(p) {
       var height = elem.scrollHeight + "px";
       return height;
   }
   var height = getHeight();
   elem.style.height = height;

   window.setTimeout(function() {
      elem.style.height = "0";
   }, 1);

   window.setTimeout(function() {
      elem.classList.remove('is-visible');
   }, 350);
}

var toggle = function(elem) {
   if(elem.classList.contains('is-visible')){
      hide(elem);
   }
   show(elem);
}

document.addEventListener('click', function(event){
   if(!event.target.classList.contains('toggle')) return;
   
   event.preventDefault();

   var togglingContent= document.querySelector(event.target.hash);
   if (!togglingContent) return;

   toggle(togglingContent);
}, {capture: false});
