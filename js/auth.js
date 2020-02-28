//listen for authentication state changes
auth.onAuthStateChanged(user => {
  if(user) {
    //get data from the firesotre database
    db.collection('guides').onSnapshot(snapshot => {
      setupPosts(snapshot.docs);
      //console.log(snapshot.docs);
    });
    setupUI(user);
    //console.log("User logged in:", user);
  } else {
    setupUI(user);
    setupPosts([]);
    //console.log("User logged out");
  }
});

//create post
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
  e.preventDefault();

  db.collection('guides').add({
    title: createForm['title'].value,
    content: createForm['content'].value
  }).then(() => {
    // reset form
    createForm.reset();
  });
});

//references to the HTML elements so they can be manipulated by JS
const signupForm = document.querySelector('#signup-form');
const logout = document.querySelector('#logout');
const loginForm = document.querySelector('#login-form');

//signing up users
signupForm.addEventListener('submit', function(e) {
  e.preventDefault();

  //create constants to store the details (values) from the signup form
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-pass'].value;

  //console.log(email, password);

  //sign up the user with an email and password to firestore
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    signupForm.reset();
  });
});

//logging users out
logout.addEventListener('click', function(e) {
  e.preventDefault();
  auth.signOut();
  //console.log('signed out');
});

//logging existing users in
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = loginForm['login-email'].value;
  const password = loginForm['login-pass'].value;

  //sign the user in with an existing email and password
  auth.signInWithEmailAndPassword(email, password).then(cred => {
    loginForm.reset();
    //console.log('User with email: ' + email + ' signed in');
  });
});
