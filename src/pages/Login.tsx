import React, { useState, FormEvent, useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import MyContext from '../context/MyContext';
import { DataUser } from '../interfaces/User.interface';

function Login() {
  const { isFetching, setIsFetching, setUser } = useContext(MyContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const URL = 'https://evolution-community.herokuapp.com/users/login';

  const request = async (): Promise<DataUser> => (
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((result) => result.json())
      .then((json) => json));

  const notifyLoginError = () => toast.error('Email ou senha inválida!');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setIsFetching(true);

    const response = await request();

    if (response.error) return notifyLoginError();

    setUser({ ...response.data.user, token: response.data.token });
    setIsFetching(false);
    return null;
  };

  return (
    <main>
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
          Entrar
        </button>
        <div>
          <button
            type="button"
            disabled={isFetching}
          >
            Esqueci minha senha
          </button>
          <button
            type="button"
            disabled={isFetching}
          >
            Inscreva-se
          </button>
        </div>
      </form>
      <Toaster />
    </main>
  );
}

export default Login;
