import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC3TYbpUf3jkSbl83QlQr-iC-35eO_Ctn8",
  authDomain: "single-scholar-255319.firebaseapp.com",
  projectId: "single-scholar-255319",
  storageBucket: "single-scholar-255319.appspot.com",
  messagingSenderId: "890162232189",
  appId: "1:890162232189:web:246b1909d50a644210aa14",
  measurementId: "G-71YWV4WKFG"
   
  }


  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  

  export const firestore = firebase.firestore();
  // creating a povider from a class GoogleAuthProvider
  const provider = new firebase.auth.GoogleAuthProvider(); 

  provider.setCustomParameters({ prompt: "select_account" });

  

  export const signInWithGoogle = () => auth.signInWithPopup(provider);



  
export default fire;