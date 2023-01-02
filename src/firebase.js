import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2A77Zg4XQCEaWYWcBJypAXm4cV-keGdc",
  authDomain: "react-authentication-aaa03.firebaseapp.com",
  projectId: "react-authentication-aaa03",
  storageBucket: "react-authentication-aaa03.appspot.com",
  messagingSenderId: "837100672095",
  appId: "1:837100672095:web:8fa3b11d0000f316f2f7ea",
  measurementId: "G-QXPEPGB7WY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
