import firebaseClient from "firebase/app";
import "firebase/auth";

/*

Copy/paste your *client-side* Firebase credentials below. 

To get these, go to the Firebase Console > open your project > Gear Icon >
Project Settings > General > Your apps. If you haven't created a web app
already, click the "</>" icon, name your app, and copy/paste the snippet.
Otherwise, go to Firebase SDK Snippet > click the "Config" radio button >
copy/paste.

*/
const CLIENT_CONFIG = {
  apiKey: "AIzaSyADHRgDbFT0XNyJJYf_u710nW5y-Nv8Wb4",
  authDomain: "examiner-app-3b4f8.firebaseapp.com",
  projectId: "examiner-app-3b4f8",
  storageBucket: "examiner-app-3b4f8.appspot.com",
  messagingSenderId: "107012632133",
  appId: "1:107012632133:web:d9d1ff8943be60aec43d2c",
  measurementId: "G-288C1RDDKK",
};

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(CLIENT_CONFIG);
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
  (window as any).firebase = firebaseClient;
}

export { firebaseClient };
