import React, { Dispatch, SetStateAction } from 'react';
import { UserInfo } from '../interfaces/User.interface';
import '../styles/PersonalInformationForm.scss';

type Props = {
  setFinishedStep: Dispatch<SetStateAction<number>>
  setCreateUser: Dispatch<SetStateAction<UserInfo>>
};

function PersonalInformationForm(props: Props) {
  const { setFinishedStep, setCreateUser } = props;

  const handleClick = () => {
    setFinishedStep((currentValue) => currentValue + 1);
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setCreateUser((currentValue) => ({ ...currentValue, [name]: value }));
  };

  return (
    <form id="personal-information-form">
      <h2>Informações Pessoais</h2>
      <label htmlFor="fullname">
        <span>Nome completo</span>
        <input id="fullname" type="text" name="fullname" onChange={handleChange} />
      </label>
      <label htmlFor="birthDate">
        <span>Data de Nascimento</span>
        <input id="birthDate" type="date" name="birthDate" onChange={handleChange} />
      </label>
      <label htmlFor="rg">
        <span>RG</span>
        <input id="rg" type="text" name="RG" onChange={handleChange} />
      </label>
      <label htmlFor="cpf">
        <span>CPF</span>
        <input id="cpf" type="text" name="CPF" onChange={handleChange} />
      </label>
      <label htmlFor="phone">
        <span>Telefone</span>
        <input id="phone" type="text" name="phone" onChange={handleChange} />
      </label>
      <label htmlFor="email">
        <span>Email</span>
        <input id="email" type="text" name="email" onChange={handleChange} />
      </label>
      <label htmlFor="password">
        <span>Senha</span>
        <input id="password" type="password" name="password" onChange={handleChange} />
      </label>
      <button type="button" onClick={handleClick}>Próximo</button>
    </form>
  );
}

export default PersonalInformationForm;
