// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAQETxdfR3WaAvDRzfkhafvXEzXOut28w",
    authDomain: "rhpcbuilder.firebaseapp.com",
    projectId: "rhpcbuilder",
    storageBucket: "rhpcbuilder.appspot.com",
    messagingSenderId: "425544802573",
    appId: "1:425544802573:web:0a5e1b0dc7865c59af1044"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;