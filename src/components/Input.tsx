import React, { useState } from 'react';
import correctImg from '../assets/correct.png';
import incorrectImg from '../assets/incorrect.svg';
import formInputErrorMessage from '../helpers/formInputErrorMessage';
import formInputPlaceholders from '../helpers/formInputPlaceholders';
import UserAttr from '../helpers/UserAttr.type';
import openEye from '../assets/open_eye.png';
import closedEye from '../assets/closed_eye.png';

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
  const [showPassword, setShowPassword] = useState(false);

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

  const showAndHidePassword = () => {
    if (showPassword) return { type: 'text', src: openEye, alt: 'Senha visível' };
    return { type: 'password', src: closedEye, alt: 'Senha escondida' };
  };

  return (
    <div className="input-div">
      <span>{spanContent}</span>
      <div className="content-div">
        <label htmlFor={htmlFor}>
          <input
            id={id}
            type={(type === 'password') ? showAndHidePassword().type : type}
            name={name}
            value={value}
            placeholder={formInputPlaceholders[name as UserAttr]}
            onChange={onChange}
          />
          {(type === 'password') && (
            <img
              src={showAndHidePassword().src}
              alt={showAndHidePassword().alt}
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-hidden
            />
          )}
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
