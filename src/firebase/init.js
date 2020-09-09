import firebase from 'firebase'


    const firebaseConfig = {
    apiKey: "AIzaSyBZhyfKIab901uc1j7AL830yBZ_2TGVdJw",
    authDomain: "pruebalogin-7fc44.firebaseapp.com",
    databaseURL: "https://pruebalogin-7fc44.firebaseio.com",
    projectId: "pruebalogin-7fc44",
    storageBucket: "pruebalogin-7fc44.appspot.com",
    messagingSenderId: "151522101936",
    appId: "1:151522101936:web:624f4ff5f6c791607a8975",
    measurementId: "G-CJSGWVDHSK"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  

  export default firebaseApp.firestore();