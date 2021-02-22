<<<<<<< HEAD
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { firebaseClient } from "../firebaseClient";

const Login: any = (_props: any) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();

  return (
    <>
=======
import React, { useState } from 'react';
import Link from 'next/link';
import { firebaseClient } from '../firebaseClient';

export default (_props: any) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <div>
>>>>>>> 0eb7c262f8bbc6ab3858d7926e3cda2452af7026
      <Link href="/">
        <a>Go back to home page</a>
      </Link>
      <br />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
<<<<<<< HEAD
        placeholder={"Email"}
      />
      <input
        type={"password"}
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder={"Password"}
=======
        placeholder={'Email'}
      />
      <input
        type={'password'}
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder={'Password'}
>>>>>>> 0eb7c262f8bbc6ab3858d7926e3cda2452af7026
      />
      <button
        onClick={async () => {
          await firebaseClient
            .auth()
            .createUserWithEmailAndPassword(email, pass);
<<<<<<< HEAD
          router.push("/");
=======
          window.location.href = '/';
>>>>>>> 0eb7c262f8bbc6ab3858d7926e3cda2452af7026
        }}
      >
        Create account
      </button>
      <button
        onClick={async () => {
          await firebaseClient.auth().signInWithEmailAndPassword(email, pass);
<<<<<<< HEAD
          router.push("/");
=======
          window.location.href = '/';
>>>>>>> 0eb7c262f8bbc6ab3858d7926e3cda2452af7026
        }}
      >
        Log in
      </button>
<<<<<<< HEAD
    </>
  );
};

export default Login;
=======
    </div>
  );
};
>>>>>>> 0eb7c262f8bbc6ab3858d7926e3cda2452af7026
