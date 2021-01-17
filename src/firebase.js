import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDe8bV-2bxKnpOgYKb6GXwqpDWHl4yzCTU",
    authDomain: "clone-48f00.firebaseapp.com",
    projectId: "clone-48f00",
    storageBucket: "clone-48f00.appspot.com",
    messagingSenderId: "557117984813",
    appId: "1:557117984813:web:a307ce0d598749203da8a4",
    measurementId: "G-TG0B57CYEN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth};