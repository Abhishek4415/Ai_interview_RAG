
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "zebo-db613.firebaseapp.com",
  projectId: "zebo-db613",
  storageBucket: "zebo-db613.firebasestorage.app",
  messagingSenderId: "157460520082",
  appId: "1:157460520082:web:88c67e9d593a46d735da4b",
  measurementId: "G-9RZGW5E7FZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export{auth, provider};