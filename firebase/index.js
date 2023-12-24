// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 2024 Ekledim
// https://firebase.google.com/docs/firestore/quickstart?hl=en
// addDoc: Firebase Veri Eklemek
// getDocs: firebase Veri Çekmek
import { getFirestore,collection,addDoc,getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoSClT2xQQefNHSHBr5wi6rGTLx2wzVhI",
  authDomain: "formapp-1c22d.firebaseapp.com",
  projectId: "formapp-1c22d",
  storageBucket: "formapp-1c22d.appspot.com",
  messagingSenderId: "810967235082",
  appId: "1:810967235082:web:f2925b291e55fb0b853df3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// 2024 Ekledim 
export{app,db,getFirestore,collection,addDoc,getDocs}