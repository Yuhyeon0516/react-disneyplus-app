// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLf5Ju-KYdfGz_SyvbGCtZ0N2n3DVMOR8",
  authDomain: "react-disneyplus-app.firebaseapp.com",
  projectId: "react-disneyplus-app",
  storageBucket: "react-disneyplus-app.appspot.com",
  messagingSenderId: "434550716613",
  appId: "1:434550716613:web:9ddb8881254afed47a58ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
