import firebase from "firebase";

const config = {
    apiKey: "AIzaSyAmpWO8j5Dl4gf48vE8_8NoKXeSlpbmXjk",
    authDomain: "zkdfirebase.firebaseapp.com",
    databaseURL: "https://zkdfirebase.firebaseio.com",
    projectId: "zkdfirebase",
    storageBucket: "zkdfirebase.appspot.com",
    messagingSenderId: "907262042634"
  };
  
  const dbconfig = firebase.initializeApp(config);
  export default dbconfig;
 // firebase.initializeApp(config);