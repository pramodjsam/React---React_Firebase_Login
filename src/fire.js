import firebase from 'firebase';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDWqPSX19zgIRxT2onpU-wJWHc2xOfAETk",
    authDomain: "webtut-react-login.firebaseapp.com",
    databaseURL: "https://webtut-react-login.firebaseio.com",
    projectId: "webtut-react-login",
    storageBucket: "webtut-react-login.appspot.com",
    messagingSenderId: "639272991275",
    appId: "1:639272991275:web:f4a8be0dc6cce02a4e086e"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;