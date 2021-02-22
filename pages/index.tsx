<<<<<<< HEAD
import React, { useEffect, useCallback } from "react";
import Link from "next/link";
import { useAuth } from "../auth";
import { ReactNode } from "react";

const Home: ReactNode = () => {
  const { user } = useAuth();

  return (
    <>
      <p>{`User ID: ${user ? user.uid : "no user signed in"}`}</p>
=======
import React, { useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useAuth } from '../auth';

export default () => {
  const { user } = useAuth();

  return (
    <div style={{ padding: '40px' }}>
      <p>{`User ID: ${user ? user.uid : 'no user signed in'}`}</p>
>>>>>>> 0eb7c262f8bbc6ab3858d7926e3cda2452af7026

      <p>
        <Link href="/authenticated">
          <a>Go to authenticated route</a>
        </Link>
      </p>
      <p>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </p>
<<<<<<< HEAD
    </>
  );
};

export default Home;
=======
    </div>
  );
};
>>>>>>> 0eb7c262f8bbc6ab3858d7926e3cda2452af7026
