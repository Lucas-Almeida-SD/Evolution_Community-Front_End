import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import MyContext from '../context/MyContext';
import requestGetUser from '../helpers/requestGetUser';
import { DataUser } from '../interfaces/User.interface';
import '../styles/TerminatedUser.scss';

type Props = {
  message: string;
  goTo: string;
  email: string,
  password: string,
};

function TerminatedUser(props: Props) {
  const { isFetching, setIsFetching, setUser } = useContext(MyContext);
  const history = useHistory();

  const {
    message,
    goTo,
    email,
    password,
  } = props;

  const notifyLoginError = () => toast.error('Oops. Algo deu errado!');

  const handleClick = async () => {
    if (goTo.includes('dashboard')) {
      setIsFetching(true);

      let response = await requestGetUser(email, password);

      setIsFetching(false);

      if (!response) return notifyLoginError();

      response = response as DataUser;

      if (response.error) return notifyLoginError();

      setUser({ ...response.data.user, token: response.data.token });
    }

    return history.push(goTo);
  };

  return (
    <>
      <section id="completed-forms">
        <div className="information">
          <p>{message}</p>
          <button
            type="button"
            disabled={isFetching}
            onClick={handleClick}
          >
            {(!isFetching) ? 'OK' : <div className="loading">{`${''}`}</div>}
          </button>
        </div>
      </section>
      <Toaster />
    </>
  );
}

export default TerminatedUser;
