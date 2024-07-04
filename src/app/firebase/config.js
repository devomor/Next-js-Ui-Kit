import { getAuth } from "firebase/auth";
import { getApp, getApps, initializeApp } from "firebase/app";
 const firebaseConfig = {
   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_BUCKET,
   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
 };
//  const app = initializeApp(firebaseConfig);
const app=!getApps().lenght ?  initializeApp(firebaseConfig):getApp()
const auth = getAuth(app)
export{app,auth} 
