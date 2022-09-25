import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCkyjgNXdF2cKEJGm0FML5PiWq1ENaYxi8",
  authDomain: "mymoney-419c3.firebaseapp.com",
  projectId: "mymoney-419c3",
  storageBucket: "mymoney-419c3.appspot.com",
  messagingSenderId: "1055976588313",
  appId: "1:1055976588313:web:167ffe216fd80411401688"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
// time stamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}


