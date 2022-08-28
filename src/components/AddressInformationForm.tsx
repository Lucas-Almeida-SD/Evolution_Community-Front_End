import React, { Dispatch, SetStateAction } from 'react';
import { UserInfo } from '../interfaces/User.interface';

type Props = {
  setFinishedStep: Dispatch<SetStateAction<number>>
  setCreateUser: Dispatch<SetStateAction<UserInfo>>
};

function AddressInformationForm(props: Props) {
  const { setFinishedStep, setCreateUser } = props;

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setCreateUser((currentValue) => ({ ...currentValue, [name]: value }));
  };

  const handleClickPreviousBtn = () => {
    setFinishedStep((currentValue) => currentValue - 1);
  };

  const handleClickNextBtn = () => {
    setFinishedStep((currentValue) => currentValue + 1);
  };

  return (
    <form>
      <h2>Informações de Endereço</h2>
      <label htmlFor="publicPlace">
        <span>Logradouro</span>
        <input id="publicPlace" type="text" name="publicPlace" onChange={handleChange} />
      </label>
      <label htmlFor="address">
        <span>Endereço</span>
        <input id="address" type="text" name="address" onChange={handleChange} />
      </label>
      <label htmlFor="houseNumber">
        <span>Número</span>
        <input id="houseNumber" type="number" name="houseNumber" onChange={handleChange} />
      </label>
      <label htmlFor="complement">
        <span>Complemento</span>
        <input id="complement" type="text" name="complement" onChange={handleChange} />
      </label>
      <label htmlFor="district">
        <span>Bairro</span>
        <input id="district" type="text" name="district" onChange={handleChange} />
      </label>
      <label htmlFor="city">
        <span>Cidade</span>
        <input id="city" type="text" name="city" onChange={handleChange} />
      </label>
      <label htmlFor="cep">
        <span>CEP</span>
        <input id="cep" type="text" name="CEP" onChange={handleChange} />
      </label>
      <div className="change-step">
        <button type="button" onClick={handleClickPreviousBtn}>Voltar</button>
        <button type="button" onClick={handleClickNextBtn}>Próximo</button>
      </div>
    </form>
  );
}

export default AddressInformationForm;
