//Signup form - begin by getting a ref to the form
const signupForm = document.querySelector('#signup-form');

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