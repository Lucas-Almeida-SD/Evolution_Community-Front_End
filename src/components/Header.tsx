import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import '../styles/Header.scss';

type Props = {
  goto: string;
  backButtonName: string;
};

function Header(props: Props) {
  const { goto, backButtonName } = props;
  const { isFetching } = useContext(MyContext);
  const history = useHistory();

  return (
    <header id="page-header">
      <h1 id="page-title">Evolution Community</h1>
      <button
        type="button"
        id="header-button"
        disabled={isFetching}
        onClick={() => history.push(goto)}
      >
        {backButtonName}
      </button>
    </header>
  );
}

export default Header;
