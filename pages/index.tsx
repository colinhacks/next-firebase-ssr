import React, { useEffect, useCallback } from "react";
import Link from "next/link";
import { useAuth } from "../auth";
import { ReactNode } from "react";

const Home: ReactNode = () => {
  const { user } = useAuth();

  return (
    <>
      <p>{`User ID: ${user ? user.uid : "no user signed in"}`}</p>

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
    </>
  );
};

export default Home;
