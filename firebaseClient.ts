import firebaseClient from 'firebase/app';
import 'firebase/auth';

if (typeof window !== 'undefined' && !firebaseClient.apps.length) {
  const CLIENT_CONFIG = {
    apiKey: 'AIzaSyDWxgXXz8mFup-Jh_w_cVkiG-WoFXJGh9M',
    authDomain: 'bagel-229402.firebaseapp.com',
    databaseURL: 'https://bagel-229402.firebaseio.com',
    projectId: 'bagel-229402',
    storageBucket: 'bagel-229402.appspot.com',
    messagingSenderId: '507617380644',
    appId: '1:507617380644:web:f84fa9b35936bab9964bb1',
  };

  firebaseClient.initializeApp(CLIENT_CONFIG);
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
  (window as any).firebase = firebaseClient;
}

export { firebaseClient };
