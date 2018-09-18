import firebase from 'firebase';
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBy-TpXGI0GU0RoIQ8Mg9u-2PVRoHcu7qs",
    authDomain: "sense-54d59.firebaseapp.com",
    databaseURL: "https://sense-54d59.firebaseio.com",
    projectId: "sense-54d59",
    storageBucket: "sense-54d59.appspot.com",
    messagingSenderId: "441662359325"
  };
  const fire = firebase.initializeApp(config);
  export default fire;