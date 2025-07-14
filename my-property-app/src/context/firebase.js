import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCSpp8ziMFVEKfQqd5JE209zP8oNNDNPCg",
    authDomain: "heaven-hunt-0410.firebaseapp.com",
    projectId: "heaven-hunt-0410",
    storageBucket: "heaven-hunt-0410.firebasestorage.app",
    messagingSenderId: "692737266789",
    appId: "1:692737266789:web:78f437e70d8b6d5a2ca28c",
    measurementId: "G-NKN5KFMDFD"
  };

const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
