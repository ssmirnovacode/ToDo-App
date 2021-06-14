import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDwUxxk_ce9eeG2OCgpHJnXB63LqRarWvk",
    authDomain: "todo-app-c1a38.firebaseapp.com",
    databaseURL: "https://todo-app-c1a38-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-app-c1a38",
    storageBucket: "todo-app-c1a38.appspot.com",
    messagingSenderId: "449895565577",
    appId: "1:449895565577:web:5c9aad265847e3de21abd8"
  };
  
firebase.initializeApp(firebaseConfig);
firebase.auth(); // initializing authentcation

export const db = firebase.firestore(); // now our db is an instance of firestore

export default firebase;