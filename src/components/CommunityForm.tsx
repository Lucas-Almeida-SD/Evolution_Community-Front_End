import React, { Dispatch, SetStateAction } from 'react';
import technologyCommunityImg from '../assets/technology_community.svg';
import healthCommunityImg from '../assets/health_community.svg';
import environmentCommunityImg from '../assets/environment_community.svg';
import businessCommunityImg from '../assets/business_community.svg';
import { UserInfo } from '../interfaces/User.interface';
import '../styles/CommunityForm.scss';

type Props = {
  setFinishedStep: Dispatch<SetStateAction<number>>
  createUser: UserInfo
  setCreateUser: Dispatch<SetStateAction<UserInfo>>
};

function CommunityForm(props: Props) {
  const { setFinishedStep, createUser, setCreateUser } = props;

  const plans = [
    { title: 'Tecnologia', id: 'technology-community', src: technologyCommunityImg },
    { title: 'Saúde', id: 'health-community', src: healthCommunityImg },
    { title: 'Meio Ambiente', id: 'environment-community', src: environmentCommunityImg },
    { title: 'Business', id: 'business-community', src: businessCommunityImg },
  ];

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setCreateUser((currentValue) => ({ ...currentValue, [name]: value }));
  };

  const fieldsIsValid = () => (createUser.community !== '');

  const renderPlanCard = (
    title: string,
    srcImg: string,
    altImg: string,
    id: string,
  ) => (
    <div
      className={`community-card${(id === createUser.community) ? ' selected' : ''}`}
      key={id}
    >
      <span>{title}</span>
      <label htmlFor={id}>
        <img src={srcImg} alt={altImg} />
        <input
          id={id}
          type="radio"
          value={id}
          name="community"
          onChange={handleChange}
        />
      </label>
    </div>
  );

  const handleClickPreviousBtn = () => {
    setFinishedStep((currentValue) => currentValue - 1);
  };

  const handleClickNextBtn = () => {
    setFinishedStep((currentValue) => currentValue + 1);
  };

  return (
    <form id="community-form">
      <h2>Selecione sua comunidade</h2>
      {plans.map((plan) => renderPlanCard(plan.title, plan.src, plan.title, plan.id))}
      <div className="change-step">
        <button type="button" className="back" onClick={handleClickPreviousBtn}>Voltar</button>
        <button type="button" className="next" disabled={!fieldsIsValid()} onClick={handleClickNextBtn}>Finalizar</button>
      </div>
    </form>
  );
}

export default CommunityForm;
