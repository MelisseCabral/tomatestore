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
  TomateAuth();
  dbTomateStore();

}());
