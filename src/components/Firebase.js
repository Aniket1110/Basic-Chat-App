import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDT1_C6U8yOTPqkBgA3Bh8gdfiyKgn_dUI",
    authDomain: "chat-app-78512.firebaseapp.com",
    projectId: "chat-app-78512",
    storageBucket: "chat-app-78512.appspot.com",
    messagingSenderId: "813466412776",
    appId: "1:813466412776:web:ec7409f13db727be4f8b5d"
  };

const auth = firebase.initializeApp(firebaseConfig).auth();

export default auth;