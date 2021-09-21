import firebase from 'firebase'
require('@firebase/firestore')
const firebaseConfig = {
    apiKey: "AIzaSyB2gIrZpd7C0s9D5PdNYTd3SBGdoaR1vdU",
    authDomain: "wily-83ac5.firebaseapp.com",
    databaseURL:"https://wily-83ac5.firebaseio.com",
    projectId: "wily-83ac5",
    storageBucket: "wily-83ac5.appspot.com",
    messagingSenderId: "673286284017",
    appId: "1:673286284017:web:4061d7c0930ecee803ff50"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()