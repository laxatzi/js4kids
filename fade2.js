document.addEventListener('click', function(ev){
     
   
   // store the toggling content value as a var
      var togglingContent =  document.querySelector(event.target.hash);
      // if event target doesn't include a hash 
      if (!togglingContent) return;
      // the toggling function
      toggle(togglingContent);

}, {capture:false});