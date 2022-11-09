import firebase from "firebase/compat/app"
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJscse54hx1mG1bvjU8kZfmxWrZ7hjVhA",
  authDomain: "voting-app-1aacb.firebaseapp.com",
  projectId: "voting-app-1aacb",
  storageBucket: "voting-app-1aacb.appspot.com",
  messagingSenderId: "260743462747",
  appId: "1:260743462747:web:e3f162c74ce840c600247e"
}
if (!getApps.length) {
    initializeApp(firebaseConfig);
    if (typeof window !== "undefined") {
      if ("measurementId" in firebaseConfig) {
        getAnalytics();
      }
    }
  
  }

  const app = initializeApp(firebaseConfig)

  export const auth = getAuth(app)
  export const db = getFirestore(app)



