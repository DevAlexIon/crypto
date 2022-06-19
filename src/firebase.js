import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCGbYususYvOzowzNj5VuLI92j3ZOdSBtM",
  authDomain: "crypto-625ab.firebaseapp.com",
  projectId: "crypto-625ab",
  storageBucket: "crypto-625ab.appspot.com",
  messagingSenderId: "857452479254",
  appId: "1:857452479254:web:dac824fac2f77dbc1e8637"
});

export const auth = firebaseApp.auth()

