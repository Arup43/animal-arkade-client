// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhqQiDPrRbC7ZoWhnAizQIFR-h8euJ6xA",
    authDomain: "animal-arkade.firebaseapp.com",
    projectId: "animal-arkade",
    storageBucket: "animal-arkade.appspot.com",
    messagingSenderId: "625528452303",
    appId: "1:625528452303:web:e539eb10aa01ff27cf73ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;