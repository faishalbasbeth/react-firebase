import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDevfOX8mGSm6i6njKNYE68axpBeQ3jE5U",
    authDomain: "simple-notes-firebase-eb02f.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-eb02f.firebaseio.com",
    projectId: "simple-notes-firebase-eb02f",
    storageBucket: "simple-notes-firebase-eb02f.appspot.com",
    messagingSenderId: "893647333021",
    appId: "1:893647333021:web:1e4745ba984c61181bd674",
    measurementId: "G-Z78N8Q6ZH7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;