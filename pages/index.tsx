import React, { useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useAuth } from '../auth';

export const useInterval = (
  _callback: (...args: any[]) => any,
  delay: number
) => {
  const callback = useCallback(_callback, []);
  useEffect(() => {
    let id = setInterval(callback, delay);
    return () => clearInterval(id);
  }, [delay]);
};

export default () => {
  const { user } = useAuth();

  return (
    <div style={{ padding: '40px' }}>
      <p>{`User ID: ${user ? user.uid : 'no user signed in'}`}</p>

      <Link href="/authenticated">
        <a>Go to authenticated route</a>
      </Link>

      <Link href="/login">
        <a>Login page</a>
      </Link>
      <p>{`Client says: ${JSON.stringify('hello.data', null, 2)}`} </p>
    </div>
  );
};
