import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAw4lBHhtKwbnUSVQrFqDX6g_ip0kIYqSY",
  authDomain: "crwn-db-63e3f.firebaseapp.com",
  projectId: "crwn-db-63e3f",
  storageBucket: "crwn-db-63e3f.appspot.com",
  messagingSenderId: "97291525839",
  appId: "1:97291525839:web:1ba79a701e325fcf19e1ba",
  measurementId: "G-W70LHJRQV1",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
