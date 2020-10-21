import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyCYtOZNI2CdYutbf1whC7nlA7shiD-6z80",
  authDomain: "react-slack-clone-41b77.firebaseapp.com",
  databaseURL: "https://react-slack-clone-41b77.firebaseio.com",
  projectId: "react-slack-clone-41b77",
  storageBucket: "react-slack-clone-41b77.appspot.com",
  messagingSenderId: "873523103931",
  appId: "1:873523103931:web:39b3f9402e41cd31b6819e",
  measurementId: "G-RNY77H6MS3"
};
firebase.initializeApp(config);

export default firebase;
