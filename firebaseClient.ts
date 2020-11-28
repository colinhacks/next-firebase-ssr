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
  apiKey: "AIzaSyAoonOmu_H1Bksv7378GKcKdrExuj-On14",
  authDomain: "fir-nextjs-ssr.firebaseapp.com",
  databaseURL: "https://fir-nextjs-ssr.firebaseio.com",
  projectId: "fir-nextjs-ssr",
  storageBucket: "fir-nextjs-ssr.appspot.com",
  messagingSenderId: "364051821923",
  appId: "1:364051821923:web:658516ef4516511223cf56",
};

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(CLIENT_CONFIG);
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
  (window as any).firebase = firebaseClient;
}

export { firebaseClient };
