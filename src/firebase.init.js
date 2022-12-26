// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2ReUToHbjkDNCHeQxRH1pADL4-6ZDl_k",
  authDomain: "email-password-auth-589e6.firebaseapp.com",
  projectId: "email-password-auth-589e6",
  storageBucket: "email-password-auth-589e6.appspot.com",
  messagingSenderId: "958000993896",
  appId: "1:958000993896:web:87eb73d37fedf2a2f88ddd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;