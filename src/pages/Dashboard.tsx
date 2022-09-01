import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import UserInformation from '../components/UserInformation';
import MyContext from '../context/MyContext';
import communities from '../helpers/communities';
import { User } from '../interfaces/User.interface';
import requestDeleteUser from '../helpers/requestDeleteUser';
import '../styles/Dashboard.scss';
import Header from '../components/Header';

type Community = {
  title: string,
  value: string,
  id: string,
  src: string,
};

function Dashboard() {
  const { user, isFetching } = useContext(MyContext);
  const history = useHistory();

  const myUser = user as User;

  const myCommunity = communities
    .find((community) => community.value === myUser.community) as Community;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleEditProfile = () => {
    const confirm = window.confirm('Gostaria de editar seu perfil?');

    if (confirm) history.push('/edit-profile');
  };

  const notifyDeleteUserError = (message: string) => toast.error(message);

  const notifyDeleteUserSuccess = (message: string) => toast.success(message);

  const handleDeleteProfile = async () => {
    const confirm = window.confirm('Deseja excluir seu perfil? Isso não poderá ser desfeito.');

    if (confirm) {
      const request = await requestDeleteUser(myUser.token);

      if (request.error) return notifyDeleteUserError(request.message);

      notifyDeleteUserSuccess(request.message);

      return history.push('/');
    }
    return null;
  };

  return (
    <>
      <Header goto="/" backButtonName="Logout" />
      <main id="dashboard">
        <section>
          <div className="community-div">
            <img src={myCommunity.src} alt={myCommunity.title} />
            <h2>{myCommunity.title}</h2>
          </div>
          <div className="informations">
            <div className="personal-informations">
              <h3 className="title">Informações Pessoais</h3>
              <UserInformation title="Nome completo" content={myUser.fullname} />
              <UserInformation title="Data de nascimento" content={myUser.birthDate} />
              <UserInformation title="RG" content={myUser.RG} />
              <UserInformation title="CPF" content={myUser.CPF} />
              <UserInformation title="Email" content={myUser.email} />
              <UserInformation title="Telefone" content={myUser.phone} />
            </div>
            <div className="address-informations">
              <h3 className="title">Informações de endereço</h3>
              <UserInformation title="Logradouro" content={myUser.publicPlace} />
              <UserInformation title="Endereço" content={myUser.address} />
              <UserInformation title="Número" content={myUser.houseNumber} />
              <UserInformation title="Complemento" content={myUser.complement} />
              <UserInformation title="Bairro" content={myUser.district} />
              <UserInformation title="Cidade" content={myUser.city} />
              <UserInformation title="CEP" content={myUser.CEP} />
            </div>
          </div>
          <div className="user-buttons">
            <button
              type="button"
              className="edit-profile"
              disabled={isFetching}
              onClick={handleEditProfile}
            >
              Editar perfil
            </button>
            <button
              type="button"
              className="delete-profile"
              disabled={isFetching}
              onClick={handleDeleteProfile}
            >
              Excluir perfil
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
