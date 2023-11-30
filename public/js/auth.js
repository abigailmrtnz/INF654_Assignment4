import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, 
    createUserWithEmailAndPassword, 
    signOut, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-aauth.js";



  // Your web app's Firebase configurationsignIn
  const firebaseConfig = {
    apiKey: "AIzaSyAnCt6lyaFvXFt_Cy0x7bn7uqJgC3DPhpY",
    authDomain: "mealplanner-84727.firebaseapp.com",
    projectId: "mealplanner-84727",
    storageBucket: "mealplanner-84727.appspot.com",
    messagingSenderId: "658872106757",
    appId: "1:658872106757:web:386b2caa65d37e086b016c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);