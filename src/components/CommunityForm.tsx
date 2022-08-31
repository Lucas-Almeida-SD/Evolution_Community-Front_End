import React, { Dispatch, SetStateAction } from 'react';
import toast from 'react-hot-toast';
import communities from '../helpers/communities';
import { UserInfo } from '../interfaces/User.interface';
import '../styles/CommunityForm.scss';

type Props = {
  setFinishedStep: Dispatch<SetStateAction<number>>
  createUser: UserInfo
  setCreateUser: Dispatch<SetStateAction<UserInfo>>
  request(): Promise<{ message: string, error: boolean }>
  isFetching: boolean
  setIsFetching: Dispatch<SetStateAction<boolean>>
  indexForm: number;
  finishedStep: number;
};

function CommunityForm(props: Props) {
  const {
    setFinishedStep,
    createUser,
    setCreateUser,
    request,
    isFetching,
    setIsFetching,
    indexForm,
    finishedStep,
  } = props;

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setCreateUser((currentValue) => ({ ...currentValue, [name]: value }));
  };

  const fieldsIsValid = () => (createUser.community !== '');

  const renderPlanCard = (
    title: string,
    value: string,
    id: string,
    src: string,
  ) => (
    <div
      className={`community-card${(value === createUser.community) ? ' selected' : ''}`}
      key={id}
    >
      <span>{title}</span>
      <label htmlFor={id}>
        <img src={src} alt={title} />
        <input
          id={id}
          type="radio"
          value={value}
          name="community"
          onChange={handleChange}
        />
      </label>
    </div>
  );

  const handleClickPreviousBtn = () => {
    setFinishedStep((currentValue) => currentValue - 1);
  };

  const notifyCreateUserError = (message: string) => toast.error(message);

  const handleClickFinishtBtn = async () => {
    setIsFetching(true);
    const resultRequest = await request();
    setIsFetching(false);

    if (resultRequest.error) return notifyCreateUserError(resultRequest.message);

    return setFinishedStep((currentValue) => currentValue + 1);
  };

  return (
    (indexForm === finishedStep) ? (
      <form id="community-form">
        <h2>Selecione sua comunidade</h2>
        {communities.map((plan) => renderPlanCard(plan.title, plan.value, plan.id, plan.src))}
        <div className="change-step">
          <button
            type="button"
            className="back"
            disabled={isFetching}
            onClick={handleClickPreviousBtn}
          >
            Volta
          </button>
          <button
            type="button"
            className="next"
            disabled={!fieldsIsValid() || isFetching}
            onClick={handleClickFinishtBtn}
          >
            {(!isFetching) ? 'Finalizar' : <div className="loading">{`${''}`}</div>}
          </button>
        </div>
      </form>
    ) : null
  );
}

export default CommunityForm;
