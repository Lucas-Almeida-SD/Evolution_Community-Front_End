import React from 'react';

type Props = {
  title: string;
  content: string;
};

function UserInformation(props: Props) {
  const { title, content } = props;
  return (
    <div className="information-div">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default UserInformation;
