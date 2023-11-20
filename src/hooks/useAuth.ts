import { useContext, useDebugValue } from 'react';

import AuthContext from '../context/AuthProvider';

const useAuth = () => {
  const { auth }: any = useContext(AuthContext);
  // eslint-disable-next-line @typescript-eslint/no-shadow
  useDebugValue(auth, (auth) => {
    return auth?.user ? 'Logged In' : 'Logged Out';
  });
  return useContext(AuthContext);
};

export default useAuth;
