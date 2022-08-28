import React, { ReactNode, useState } from 'react';
import { User } from '../interfaces/User.interface';
import MyContext from './MyContext';

type ProviderProps = {
  children: ReactNode,
};

function Provider(props: ProviderProps) {
  const { children } = props;
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isFetching, setIsFetching] = useState(false);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const values = {
    user,
    setUser,
    isFetching,
    setIsFetching,
  };

  return (
    <MyContext.Provider value={values}>
      {children}
    </MyContext.Provider>
  );
}

export default Provider;
