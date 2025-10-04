import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// Firebase Config - Replace with your Firebase console config
const firebaseConfig = {
  apiKey: "AIzaSyCOaZb_iRF_PGaxGWB0iRBnjIxzQvjHTP8",
  authDomain: "smartagroapp.firebaseapp.com",
  projectId: "smartagroapp-491dc",
  storageBucket: "smartagroapp.appspot.com",
  messagingSenderId: "1008595498005",
  appId: "1:1008595498005:web:2308f7f71feb0a8c45ca1c"
};

// Init Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 
