import * as firebase from "firebase";
import "firebase/database";

let config = {
    apiKey: "AIzaSyDwUxxk_ce9eeG2OCgpHJnXB63LqRarWvk",
    authDomain: "todo-app-c1a38.firebaseapp.com",
    /* projectId: "todo-app-c1a38",
    storageBucket: "todo-app-c1a38.appspot.com",
    messagingSenderId: "449895565577",
    appId: "1:449895565577:web:f5a841fa1728bca421abd8", */
    databaseURL: "https://todo-app-c1a38-default-rtdb.europe-west1.firebasedatabase.app"
};
//firebase.initializeApp(config);
/* export const auth = firebase.auth;
export const db = firebase.database(); */

//export default firebase;
//export default firebase.database();
export default config;