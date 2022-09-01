import React from 'react';
import brazilianStates from '../helpers/brazilianStates';
import correctImg from '../assets/correct.png';
import incorrectImg from '../assets/incorrect.svg';
import formInputErrorMessage from '../helpers/formInputErrorMessage';

type Props = {
  isValid: boolean;
  value: string;
  onChange(props: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
};

function StateSelect(props: Props) {
  const { isValid, value, onChange } = props;

  return (
    <div className="select-div">
      <span>Estado</span>
      <div className="content-div">
        <select name="state" id="state" value={value} onChange={onChange}>
          {brazilianStates.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
        <img
          src={(isValid) ? correctImg : incorrectImg}
          alt={(isValid) ? 'Correct' : 'Incorrect'}
        />
      </div>
      {(!isValid) && <p className="error-message">{formInputErrorMessage.state}</p>}
    </div>
  );
}

export default StateSelect;
