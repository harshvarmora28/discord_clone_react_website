import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC92C4I8beH8FLynCJnRjrHP2Iorxoi54U",
    authDomain: "discord-clone-harshcreations.firebaseapp.com",
    projectId: "discord-clone-harshcreations",
    storageBucket: "discord-clone-harshcreations.appspot.com",
    messagingSenderId: "376013753807",
    appId: "1:376013753807:web:21ca23c33253d04c0656ba",
    measurementId: "G-SCTXHKRTK3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;