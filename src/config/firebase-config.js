import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import Config from './config'

const firebaseConfig = {
    apiKey: Config.googleAuthApi,
    authDomain: "pesto-assignment1.firebaseapp.com",
    projectId: "pesto-assignment1",
    storageBucket: "pesto-assignment1.appspot.com",
    messagingSenderId: "32929151975",
    appId: "1:32929151975:web:00af65e40df704fe339b42",
    measurementId: "G-N02XX1D1GE"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)
  export default app;