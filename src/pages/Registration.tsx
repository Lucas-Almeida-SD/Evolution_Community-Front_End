import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PersonalInformationForm from '../components/PersonalInformationForm';
import AddressInformationForm from '../components/AddressInformationForm';
import CommunityForm from '../components/CommunityForm';
import checkImg from '../assets/check.png';
import { UserInfo } from '../interfaces/User.interface';
import '../styles/Registration.scss';
import TerminatedUser from '../components/TerminatedUser';

function Registration() {
  const [finishedStep, setFinishedStep] = useState<number>(0);
  const { location: { pathname } } = useHistory();

  const message = (pathname.includes('registration'))
    ? 'Usuário cadastrado com sucesso!'
    : 'Dados atualizados com sucesso!';

  const [createUser, setCreateUser] = useState<UserInfo>({
    CEP: '',
    CPF: '',
    RG: '',
    address: '',
    birthDate: '',
    city: '',
    complement: '',
    district: '',
    email: '',
    fullname: '',
    houseNumber: '',
    password: '',
    phone: '',
    community: '',
    publicPlace: '',
  });

  const renderSteps = (): JSX.Element[] => {
    const stepsNumber = 3;
    const steps = [];
    for (let index = 0; index < stepsNumber; index += 1) {
      steps.push(
        <div
          key={`step-${index + 1}`}
          className={`step${(finishedStep > index) ? ' finished' : ''}`}
        >
          {(finishedStep <= index) ? <span>{index + 1}</span>
            : <img src={checkImg} alt="Finished" />}
        </div>,
      );
    }
    return steps;
  };

  return (
    <main id="registration">
      <section id="registration-steps">
        <div className="progress-bar">
          {renderSteps()}
        </div>
        <div className="registration-forms">
          {(finishedStep === 0) && (
            <PersonalInformationForm
              setFinishedStep={setFinishedStep}
              createUser={createUser}
              setCreateUser={setCreateUser}
            />
          )}
          {(finishedStep === 1) && (
            <AddressInformationForm
              setFinishedStep={setFinishedStep}
              createUser={createUser}
              setCreateUser={setCreateUser}
            />
          )}
          {(finishedStep === 2) && (
            <CommunityForm
              setFinishedStep={setFinishedStep}
              createUser={createUser}
              setCreateUser={setCreateUser}
            />
          )}
          {(finishedStep > 2) && (
            <TerminatedUser
              message={message}
              goTo={(pathname.includes('registration') ? '/' : '/dashboard')}
            />
          )}
        </div>
      </section>
    </main>
  );
}

export default Registration;
