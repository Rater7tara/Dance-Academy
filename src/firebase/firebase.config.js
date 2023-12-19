// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtOV08jN34YGan9tL4AdckcFdK2PtW1KM",
  authDomain: "dance-academy-6c68f.firebaseapp.com",
  projectId: "dance-academy-6c68f",
  storageBucket: "dance-academy-6c68f.appspot.com",
  messagingSenderId: "566029935553",
  appId: "1:566029935553:web:463655d318e963c76dc540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;