import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PersonalInformationForm from '../components/PersonalInformationForm';
import AddressInformationForm from '../components/AddressInformationForm';
import CommunityForm from '../components/CommunityForm';
import checkImg from '../assets/check.png';
import { User, UserInfo } from '../interfaces/User.interface';
import '../styles/Registration.scss';
import TerminatedUser from '../components/TerminatedUser';
import MyContext from '../context/MyContext';
import Header from '../components/Header';

function Registration() {
  const { isFetching, setIsFetching, user } = useContext(MyContext);
  const [finishedStep, setFinishedStep] = useState<number>(0);
  const { location: { pathname } } = useHistory();

  const newUser = user as User;
  const isRegistrationRoute = pathname.includes('registration');

  const URL = 'https://evolution-community.herokuapp.com/users';

  const message = (isRegistrationRoute)
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

  useEffect(() => {
    if (!isRegistrationRoute) {
      setCreateUser((currentValue) => ({
        ...currentValue,
        CEP: newUser.CEP,
        CPF: newUser.CPF,
        RG: newUser.RG,
        address: newUser.address,
        birthDate: newUser.birthDate.split('/').reverse().join('-'),
        city: newUser.city,
        complement: newUser.complement,
        district: newUser.district,
        email: newUser.email,
        fullname: newUser.fullname,
        houseNumber: newUser.houseNumber,
        phone: newUser.phone,
        community: newUser.community,
        publicPlace: newUser.publicPlace,
      }));
    }
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, [finishedStep]);

  const request = async (): Promise<{ message: string, error: boolean }> => {
    const newCreateUser = JSON.parse(JSON.stringify({
      ...createUser,
      birthDate: createUser.birthDate.split('-').reverse().join('/'),
    }));

    if (!isRegistrationRoute) delete newCreateUser.email;

    const result = await fetch(URL, {
      method: (isRegistrationRoute) ? 'POST' : 'PUT',
      headers: {
        'Content-type': 'application/json',
        authorization: (isRegistrationRoute) ? '' : newUser.token,
      },
      body: JSON.stringify(newCreateUser),
    });

    const json = await result.json();

    return json as { message: string, error: boolean };
  };

  const renderSteps = (): JSX.Element[] => {
    const stepsNumber = 3;
    const steps = [];
    for (let index = 0; index < stepsNumber; index += 1) {
      steps.push(
        <div
          key={`step-${index + 1}`}
          className={`step ${(finishedStep > index) ? 'finished' : ''}`}
        >
          {(finishedStep <= index) ? <span>{index + 1}</span>
            : <img src={checkImg} alt="Finished" />}
        </div>,
      );
    }
    return steps;
  };

  return (
    <>
      <Header goto="/" backButtonName={(isRegistrationRoute) ? 'Login' : 'Logout'} />
      <main id="registration">
        <section id="registration-steps">
          <div className="progress-bar">
            {renderSteps()}
          </div>
          <div className="registration-forms">
            <PersonalInformationForm
              setFinishedStep={setFinishedStep}
              createUser={createUser}
              setCreateUser={setCreateUser}
              isRegistrationRoute={isRegistrationRoute}
              goTo={(isRegistrationRoute ? '/' : '/dashboard')}
              indexForm={0}
              finishedStep={finishedStep}
            />
            <AddressInformationForm
              setFinishedStep={setFinishedStep}
              createUser={createUser}
              setCreateUser={setCreateUser}
              indexForm={1}
              finishedStep={finishedStep}
            />
            <CommunityForm
              setFinishedStep={setFinishedStep}
              createUser={createUser}
              setCreateUser={setCreateUser}
              request={request}
              isFetching={isFetching}
              setIsFetching={setIsFetching}
              indexForm={2}
              finishedStep={finishedStep}
            />
            <TerminatedUser
              message={message}
              goTo={(isRegistrationRoute ? '/' : '/dashboard')}
              email={(user) ? (user as User).email : ''}
              password={createUser.password}
              indexForm={3}
              finishedStep={finishedStep}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Registration;
