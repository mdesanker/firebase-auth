import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD067ePgMCrS6pyk3_wnNGooAoBwGKC3dk",
  authDomain: "fir-auth-792c8.firebaseapp.com",
  projectId: "fir-auth-792c8",
  storageBucket: "fir-auth-792c8.appspot.com",
  messagingSenderId: "348012322756",
  appId: "1:348012322756:web:36a1e9d01f4ff7675f0e91",
};

// Initialize app
initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth();
