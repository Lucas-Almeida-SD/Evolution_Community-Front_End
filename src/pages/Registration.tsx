import React, { useState } from 'react';
import PersonalInformationForm from '../components/PersonalInformationForm';
import AddressInformationForm from '../components/AddressInformationForm';
import CommunityForm from '../components/CommunityForm';
import checkImg from '../assets/check.png';
import { UserInfo } from '../interfaces/User.interface';
import '../styles/Registration.scss';

function Registration() {
  const [finishedStep, setFinishedStep] = useState<number>(0);
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
          <PersonalInformationForm
            setFinishedStep={setFinishedStep}
            setCreateUser={setCreateUser}
          />
          <AddressInformationForm
            setFinishedStep={setFinishedStep}
            setCreateUser={setCreateUser}
          />
          <CommunityForm
            setFinishedStep={setFinishedStep}
            createUser={createUser}
            setCreateUser={setCreateUser}
          />
        </div>
      </section>
    </main>
  );
}

export default Registration;
