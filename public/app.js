$(document).ready(function() {
   $.getJSON("/api/todos")
   .then(function(data) {
       console.log(data);
   });
});