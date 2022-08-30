import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserInformation from '../components/UserInformation';
import MyContext from '../context/MyContext';
import communities from '../helpers/communities';
import { User } from '../interfaces/User.interface';
import '../styles/Dashboard.scss';

type Community = {
  title: string,
  value: string,
  id: string,
  src: string,
};

function Dashboard() {
  const { user } = useContext(MyContext);
  const history = useHistory();

  const myUser = user as User;

  const myCommunity = communities
    .find((community) => community.value === myUser.community) as Community;

  const handleEditProfile = () => {
    const confirm = window.confirm('Gostaria de editar seu perfil?');

    if (confirm) history.push('/edit-profile');
  };

  return (
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
          <div className="user-buttons">
            <button
              type="button"
              className="edit-profile"
              onClick={handleEditProfile}
            >
              Editar perfil
            </button>
            <button
              type="button"
              className="delete-profile"
            >
              Excluir perfil
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
