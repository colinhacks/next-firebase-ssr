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
      <Link href="/">
        <a>Go back to home page</a>
      </Link>
      <br />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={"Email"}
      />
      <input
        type={"password"}
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder={"Password"}
      />
      <button
        onClick={async () => {
          await firebaseClient
            .auth()
            .createUserWithEmailAndPassword(email, pass);
          router.push("/");
        }}
      >
        Create account
      </button>
      <button
        onClick={async () => {
          await firebaseClient.auth().signInWithEmailAndPassword(email, pass);
          router.push("/");
        }}
      >
        Log in
      </button>
    </>
  );
};

export default Login;
