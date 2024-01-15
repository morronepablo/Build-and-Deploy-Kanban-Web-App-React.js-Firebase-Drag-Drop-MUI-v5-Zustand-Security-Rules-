/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyD0J2ZkBwPizm9kXgVBc-kB-Ee_mvx1y3k",
  authDomain: "flowboard-4fb8e.firebaseapp.com",
  projectId: "flowboard-4fb8e",
  storageBucket: "flowboard-4fb8e.appspot.com",
  messagingSenderId: "148284974045",
  appId: "1:148284974045:web:896d6a5725414f6d3b4c34",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectFunctionsEmulator(fbFunctions, "localhost", 5001);
}
