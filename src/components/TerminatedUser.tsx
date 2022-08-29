import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TerminatedUser.scss';

type Props = {
  message: string;
  goTo: string;
};

function TerminatedUser(props: Props) {
  const { message, goTo } = props;

  return (
    <section id="completed-forms">
      <div>
        <p>{message}</p>
        <Link to={goTo}>OK</Link>
      </div>
    </section>
  );
}

export default TerminatedUser;
