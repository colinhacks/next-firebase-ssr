import React, { useState } from 'react';
import Link from 'next/link';
import { firebaseClient } from '../firebaseClient';

export default (_props: any) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <div>
      <Link href="/">
        <a>Go back to home page</a>
      </Link>
      <br />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={'Email'}
      />
      <input
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder={'Password'}
      />
      <button
        onClick={() =>
          firebaseClient.auth().createUserWithEmailAndPassword(email, pass)
        }
      >
        Create account
      </button>
      <button
        onClick={() =>
          firebaseClient.auth().signInWithEmailAndPassword(email, pass)
        }
      >
        Log in
      </button>
    </div>
  );
};
