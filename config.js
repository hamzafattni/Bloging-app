import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBhrXiKQbEEhhfnkXTmm-qdBzjVYQrPGSM",
  authDomain: "mini-hackton-fac96.firebaseapp.com",
  projectId: "mini-hackton-fac96",
  storageBucket: "mini-hackton-fac96.appspot.com",
  messagingSenderId: "328655263144",
  appId: "1:328655263144:web:17acbbbefef142b127f99d",
  measurementId: "G-TRH132R869"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);