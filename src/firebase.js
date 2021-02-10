import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBSx_WJpzDB_ymoMp3tc90YDZ8beMrIVdk",
    authDomain: "clone-7dbb9.firebaseapp.com",
    projectId: "clone-7dbb9",
    storageBucket: "clone-7dbb9.appspot.com",
    messagingSenderId: "831169103880",
    appId: "1:831169103880:web:d7efdc791099fa80cf69bd",
    measurementId: "G-PR4DF29P7N"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);        //   this is 
  const db = firebaseApp.firestore();                                  //           4th 
  const auth = firebase.auth();                                         //                step

  export { db, auth };