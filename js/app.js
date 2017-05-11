(function () {

    'use strict';
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB9Ro3b5hTFZTpwa2e4I-Ltxga5rsFx2hA",
    authDomain: "tomatestore-40234.firebaseapp.com",
    databaseURL: "https://tomatestore-40234.firebaseio.com",
    projectId: "tomatestore-40234",
    storageBucket: "tomatestore-40234.appspot.com",
    messagingSenderId: "193843683809"
  };
  firebase.initializeApp(config);

    //Database Tomate Store
    dbTomateStore;

    //Get Elements
    const emailLogin = document.getElementById("login-txt"),
        passLogin = document.getElementById("password-txt"),
        btnLogin = document.getElementById("btnLogin");
    btnLogin.addEventListener('click', e=> {
        //Get email and Pass
        const email = emailLogin.value,
            pass = passLogin.value,
            auth = firebase.auth(),
            promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));

        if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (pass.length < 4) {
          alert('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            console.log(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
        });
        // [END authwithemail]
      }
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
        } else {
            console.log("not logged");
        }
    });
}());
