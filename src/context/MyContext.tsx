import { createContext, Dispatch, SetStateAction } from 'react';
import { User } from '../interfaces/User.interface';

type Context = {
  user: User | undefined,
  setUser: Dispatch<SetStateAction<User | undefined>>,
  isFetching: boolean
  setIsFetching: Dispatch<SetStateAction<boolean>>,
};

const MyContext = createContext({} as Context);

export default MyContext;
