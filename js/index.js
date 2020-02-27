//set up constants to manipulate the DOM
const loggedIn = document.querySelectorAll('.logged-in');
const loggedOut = document.querySelectorAll('.logged-out');

//create the conditional menu
const setupUI = (user) => {
  //menu items will change depending on if a user is logged in or not
  if(user) {
    loggedIn.forEach(item => item.style.display = 'inline-block');
    loggedOut.forEach(item => item.style.display = 'none');
  } else {
    loggedIn.forEach(item => item.style.display = 'none');
    loggedOut.forEach(item => item.style.display = 'inline-block');
  }
};

//Materialize-css intiialisation
$(document).ready(function(){
  $('.modal').modal();
  $('.collapsible').collapsible();
});