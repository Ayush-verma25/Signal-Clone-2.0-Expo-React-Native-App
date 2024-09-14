import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMqyzdk72jJInSp07xrMEd6zjnQZR7kSk",
  authDomain: "signal-clone-2-6b146.firebaseapp.com",
  projectId: "signal-clone-2-6b146",
  storageBucket: "signal-clone-2-6b146.appspot.com",
  messagingSenderId: "914911050531",
  appId: "1:914911050531:web:a39286e92ff0ca1164ea96",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
