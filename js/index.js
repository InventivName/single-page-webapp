//Materialize-css intiialisation
// document.addEventListener('DOMContentLoaded', function() {

//   var modals = document.querySelectorAll('.modal');
//   M.Modal.init(modals);

//   var items = document.querySelectorAll('.collapsible');
//   M.Collapsible.init(items);


// });

$(document).ready(function(){
  $('.modal').modal();
  $('.collapsible').collapsible();
});