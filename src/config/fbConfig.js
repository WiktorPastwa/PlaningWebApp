import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCtS3xVZwFvnfFT4IERIysgC8Vs0sYDr6o",
  authDomain: "planningwebsite-d73ac.firebaseapp.com",
  databaseURL: "https://planningwebsite-d73ac.firebaseio.com",
  projectId: "planningwebsite-d73ac",
  storageBucket: "planningwebsite-d73ac.appspot.com",
  messagingSenderId: "98858315718",
  appId: "1:98858315718:web:14656398fb12c533288cc7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
