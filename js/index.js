//set up constants to manipulate the DOM
const loggedIn = document.querySelectorAll('.logged-in');
const loggedOut = document.querySelectorAll('.logged-out');
const postList = document.querySelector('.posts');
const accountDetails = document.querySelector('.account-details');
const userCont = document.querySelector('.user-container');

//setup the content - posts
const setupPosts = (data) => {

  if(data.length) {

    let html = '';
    data.forEach(doc => {
      const post = doc.data();
      //console.log(post);
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4">${post.title}</div>
          <div class="collapsible-body white">${post.content}</div>
        </li>
      `;
      html += li;
    });

    postList.innerHTML = html;
  } else {
    postList.innerHTML = '<h5 class="center-align">Login to view posts.</h5>';
  }

};

//create the conditional menu
const setupUI = (user) => {
  //menu items will change depending on if a user is logged in or not
  if(user) {
    //displaying account info in profile modal
    db.collection('users').doc(user.uid).get().then(doc => {
      const html = `
        <div>Logged in as ${doc.data().name}</div>
        <div>Email: ${user.email}</div>
        <div>${doc.data().bio}</div>
      `;
      accountDetails.innerHTML = html;

      //displaying user details on home page
      const userDetails = `
        <h5>${doc.data().name}</h5>
      `;
      userCont.innerHTML = userDetails;
    });
    
    loggedIn.forEach(item => item.style.display = 'inline-block');
    loggedOut.forEach(item => item.style.display = 'none');
  } else {
    //hide account details if logged out
    accountDetails.innerHTML = '';
    loggedIn.forEach(item => item.style.display = 'none');
    loggedOut.forEach(item => item.style.display = 'inline-block');
  }
};



//Materialize-css intiialisation
$(document).ready(function(){
  $('.modal').modal();
  $('.collapsible').collapsible();
});