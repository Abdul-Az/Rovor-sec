import Rebase from "re-base";
import firebase from 'firebase';
import database from "firebase/database";
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDtPmqZu8BkTZ843CK70NHtazRFba3mlXU",
    authDomain: "sense-54d59.firebaseapp.com",
    databaseURL: "https://sense-54d59.firebaseio.com",
    projectId: "sense-54d59",
    storageBucket: "sense-54d59.appspot.com",
    messagingSenderId: "441662359325"
  });
 
  const base = Rebase.createClass(firebaseApp.database());
  var db = firebaseApp.database();
 
  export  {firebaseApp} 
  export {db};

  export default base;