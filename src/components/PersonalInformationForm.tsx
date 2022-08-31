import React, { Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';
import {
  validateBirthDate,
  validateCPF,
  validateEmail,
  validateFullname,
  validatePassword,
  validatePhone,
  validateRG,
} from '../helpers/userValidations';
import { UserInfo } from '../interfaces/User.interface';
import '../styles/PersonalInformationForm.scss';
import Input from './Input';

type Props = {
  setFinishedStep: Dispatch<SetStateAction<number>>
  createUser: UserInfo
  setCreateUser: Dispatch<SetStateAction<UserInfo>>
  goTo: string
  isRegistrationRoute: boolean
  indexForm: number
  finishedStep: number
};

function PersonalInformationForm(props: Props) {
  const history = useHistory();

  const {
    setFinishedStep,
    createUser,
    setCreateUser,
    goTo,
    isRegistrationRoute,
    indexForm,
    finishedStep,
  } = props;

  const handleClickPreviousBtn = () => {
    history.push(goTo);
  };

  const handleClickNextBtn = () => {
    setFinishedStep((currentValue) => currentValue + 1);
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setCreateUser((currentValue) => ({ ...currentValue, [name]: value }));
  };

  const fieldsIsValid = () => (
    validateBirthDate(createUser)
      && validateCPF(createUser)
      && validateEmail(createUser)
      && validateFullname(createUser)
      && validatePassword(createUser)
      && validatePhone(createUser)
      && validateRG(createUser)
  );

  return (
    (indexForm === finishedStep) ? (
      <form id="personal-information-form">
        <h2>Informações Pessoais</h2>
        <Input
          htmlFor="fullname"
          spanContent="Nome completo"
          id="fullname"
          type="text"
          name="fullname"
          value={createUser.fullname}
          isValid={validateFullname(createUser)}
          onChange={handleChange}
        />
        <Input
          htmlFor="birthDate"
          spanContent="Data de Nascimento"
          id="birthDate"
          type="date"
          name="birthDate"
          value={createUser.birthDate}
          isValid={validateBirthDate(createUser)}
          onChange={handleChange}
        />
        <Input
          htmlFor="rg"
          spanContent="RG"
          id="rg"
          type="text"
          name="RG"
          value={createUser.RG}
          isValid={validateRG(createUser)}
          onChange={handleChange}
        />
        <Input
          htmlFor="cpf"
          spanContent="CPF"
          id="cpf"
          type="text"
          name="CPF"
          value={createUser.CPF}
          isValid={validateCPF(createUser)}
          onChange={handleChange}
        />
        <Input
          htmlFor="phone"
          spanContent="Telefone"
          id="phone"
          type="text"
          name="phone"
          value={createUser.phone}
          isValid={validatePhone(createUser)}
          onChange={handleChange}
        />
        {(isRegistrationRoute) && (
        <Input
          htmlFor="email"
          spanContent="Email"
          id="email"
          type="text"
          name="email"
          value={createUser.email}
          isValid={validateEmail(createUser)}
          onChange={handleChange}
        />
        )}
        <Input
          htmlFor="password"
          spanContent="Senha"
          id="password"
          type="password"
          name="password"
          value={createUser.password}
          isValid={validatePassword(createUser)}
          onChange={handleChange}
        />
        <div className="change-step">
          <button
            type="button"
            className="back"
            onClick={handleClickPreviousBtn}
          >
            Voltar
          </button>
          <button
            type="button"
            className="next"
            disabled={!fieldsIsValid()}
            onClick={handleClickNextBtn}
          >
            Próximo
          </button>
        </div>
      </form>
    ) : null
  );
}

export default PersonalInformationForm;
