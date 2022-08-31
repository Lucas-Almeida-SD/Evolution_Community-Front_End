import React from 'react';
import correctImg from '../assets/correct.png';
import incorrectImg from '../assets/incorrect.svg';
import formInputErrorMessage from '../helpers/formInputErrorMessage';
import formInputPlaceholders from '../helpers/formInputPlaceholders';
import UserAttr from '../helpers/UserAttr.type';

type Props = {
  htmlFor: string;
  spanContent: string;
  id: string;
  type: string;
  name: string;
  value:string;
  isValid: boolean;
  onChange(props: React.ChangeEvent<HTMLInputElement>): void;
};

function Input(props: Props) {
  const {
    htmlFor,
    spanContent,
    id,
    type,
    name,
    value,
    isValid,
    onChange,
  } = props;

  return (
    <div className="input-div">
      <span>{spanContent}</span>
      <div className="content-div">
        <label htmlFor={htmlFor}>
          <input
            id={id}
            type={type}
            name={name}
            value={value}
            placeholder={formInputPlaceholders[name as UserAttr]}
            onChange={onChange}
          />
        </label>
        <img
          src={(isValid) ? correctImg : incorrectImg}
          alt={(isValid) ? 'Correct' : 'Incorrect'}
        />
      </div>
      {(!isValid) && <p className="error-message">{formInputErrorMessage[name as UserAttr]}</p>}
    </div>
  );
}

export default Input;
