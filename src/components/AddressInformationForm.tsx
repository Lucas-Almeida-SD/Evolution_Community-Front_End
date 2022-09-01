import React, { Dispatch, SetStateAction } from 'react';
import {
  validateAddress,
  validateCEP,
  validateCity,
  validateDistrict,
  validateHouseNumber,
  validatePublicPlace,
  validateComplement,
  validateState,
} from '../helpers/userValidations';
import { UserInfo } from '../interfaces/User.interface';
import '../styles/AddressInformationForm.scss';
import Input from './Input';
import StateSelect from './StateSelect';

type Props = {
  setFinishedStep: Dispatch<SetStateAction<number>>
  createUser: UserInfo
  setCreateUser: Dispatch<SetStateAction<UserInfo>>
  indexForm: number;
  finishedStep: number;
};

function AddressInformationForm(props: Props) {
  const {
    setFinishedStep,
    createUser,
    setCreateUser,
    indexForm,
    finishedStep,
  } = props;

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = target;
    setCreateUser((currentValue) => ({ ...currentValue, [name]: value }));
  };

  const handleClickPreviousBtn = () => {
    setFinishedStep((currentValue) => currentValue - 1);
  };

  const handleClickNextBtn = () => {
    setFinishedStep((currentValue) => currentValue + 1);
  };

  const fieldsIsValid = () => (
    validateAddress(createUser)
    && validateCEP(createUser)
    && validateCity(createUser)
    && validateDistrict(createUser)
    && validateHouseNumber(createUser)
    && validatePublicPlace(createUser)
    && validateComplement(createUser)
  );

  return (
    (indexForm === finishedStep) ? (
      <form id="address-information-form">
        <h2>Informações de Endereço</h2>
        <Input
          htmlFor="publicPlace"
          spanContent="Logradouro"
          id="publicPlace"
          type="text"
          name="publicPlace"
          value={createUser.publicPlace}
          isValid={validatePublicPlace(createUser)}
          onChange={handleChange}
        />
        <Input
          htmlFor="address"
          spanContent="Endereço"
          id="address"
          type="text"
          name="address"
          value={createUser.address}
          isValid={validateAddress(createUser)}
          onChange={handleChange}
        />
        <Input
          htmlFor="houseNumber"
          spanContent="Número"
          id="houseNumber"
          type="number"
          name="houseNumber"
          value={createUser.houseNumber}
          isValid={validateHouseNumber(createUser)}
          onChange={handleChange}
        />
        <Input
          htmlFor="complement"
          spanContent="Complemento"
          id="complement"
          type="text"
          name="complement"
          value={createUser.complement}
          isValid={validateComplement(createUser)}
          onChange={handleChange}
        />
        <Input
          htmlFor="district"
          spanContent="Bairro"
          id="district"
          type="text"
          name="district"
          value={createUser.district}
          isValid={validateDistrict(createUser)}
          onChange={handleChange}
        />
        <Input
          htmlFor="city"
          spanContent="Cidade"
          id="city"
          type="text"
          name="city"
          value={createUser.city}
          isValid={validateCity(createUser)}
          onChange={handleChange}
        />
        <Input
          htmlFor="cep"
          spanContent="CEP"
          id="cep"
          type="text"
          name="CEP"
          value={createUser.CEP}
          isValid={validateCEP(createUser)}
          onChange={handleChange}
        />
        <StateSelect
          isValid={validateState(createUser)}
          value={createUser.state}
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

export default AddressInformationForm;
