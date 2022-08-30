import React, { useState, FormEvent, useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { DataUser } from '../interfaces/User.interface';
import informationImg from '../assets/information.gif';
import '../styles/Login.scss';
import requestGetUser from '../helpers/requestGetUser';

function Login() {
  const { isFetching, setIsFetching, setUser } = useContext(MyContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const notifyLoginError = () => toast.error('Email ou senha inválida!');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setIsFetching(true);

    let response = await requestGetUser(email, password);
    setIsFetching(false);

    if (!response) return notifyLoginError();

    response = response as DataUser;

    if (response.error) return notifyLoginError();

    setUser({ ...response.data.user, token: response.data.token });

    return history.push('/dashboard');
  };

  return (
    <>
      <main id="login">
        <section>
          <p>
            Faça parte de uma de nossas comunidades e receba informações de
            qualidade. Concorra também a prêmios imperdíveis semanalmente!
          </p>
          <img src={informationImg} alt="Information" />
        </section>
        <section>
          <form onSubmit={handleSubmit}>
            <h2>
              <span>Evolution </span>
              <span>Community</span>
            </h2>
            <input
              type="text"
              id="email"
              value={email}
              placeholder="Email"
              onChange={({ target }) => setEmail(target.value)}
            />
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Senha"
              onChange={({ target }) => setPassword(target.value)}
            />
            <button
              type="submit"
              disabled={isFetching || !email || !password}
            >
              {(!isFetching) ? 'Entrar' : <div className="loading">{`${''}`}</div>}
            </button>
            <div>
              <span>
                Esqueci minha senha
              </span>
              <Link
                to="/registration"
                type="button"
              >
                Inscreva-se
              </Link>
            </div>
          </form>
        </section>
      </main>
      <Toaster />
    </>
  );
}

export default Login;
