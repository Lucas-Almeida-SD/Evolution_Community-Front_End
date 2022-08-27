import React, { ReactNode, useState, useMemo } from 'react';
import { User } from '../interfaces/User.interface';
import MyContext from './MyContext';

type ProviderProps = {
  children: ReactNode,
};

function Provider(props: ProviderProps) {
  const { children } = props;
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isFetching, setIsFetching] = useState(false);

  const values = useMemo(() => ({
    user,
    setUser,
    isFetching,
    setIsFetching,
  }), []);

  return (
    <MyContext.Provider value={values}>
      {children}
    </MyContext.Provider>
  );
}

export default Provider;
