import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDGAiLoPDDachdsnnoeCurR2FxZSYtKh3U",
  authDomain: "netflix-clone-7428a.firebaseapp.com",
  projectId: "netflix-clone-7428a",
  storageBucket: "netflix-clone-7428a.appspot.com",
  messagingSenderId: "728538801980",
  appId: "1:728538801980:web:a8c0e5a1f4d428450ce039",
};
const firebaseApp = firebase.initilizeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };
