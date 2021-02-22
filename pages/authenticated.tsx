import React from "react";
import nookies from "nookies";
<<<<<<< HEAD
import { useRouter } from "next/router";
=======
>>>>>>> 0eb7c262f8bbc6ab3858d7926e3cda2452af7026
import { firebaseAdmin } from "../firebaseAdmin";
import { firebaseClient } from "../firebaseClient";

import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    console.log(JSON.stringify(cookies, null, 2));
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
    const { uid, email } = token;

    // the user is authenticated!
    // FETCH STUFF HERE

    return {
      props: { message: `Your email is ${email} and your UID is ${uid}.` },
    };
  } catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      // `as never` is required for correct type inference
      // by InferGetServerSidePropsType below
      props: {} as never,
    };
  }
};

const AuthenticatedPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
<<<<<<< HEAD
) => {
  const router = useRouter();
  return (
    <div>
      <p>{props.message!}</p>
      <button
        onClick={async () => {
          await firebaseClient.auth().signOut();
          router.push("/");
        }}
      >
        Sign out
      </button>
    </div>
  );
};
=======
) => (
  <div>
    <p>{props.message!}</p>
    <button
      onClick={async () => {
        await firebaseClient.auth().signOut();
        window.location.href = "/";
      }}
    >
      Sign out
    </button>
  </div>
);
>>>>>>> 0eb7c262f8bbc6ab3858d7926e3cda2452af7026

export default AuthenticatedPage;
