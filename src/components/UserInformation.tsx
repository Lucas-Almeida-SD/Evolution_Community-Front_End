import React from 'react';

type Props = {
  title: string;
  content: string;
};

function UserInformation(props: Props) {
  const { title, content } = props;
  return (
    <div className="user-information-div">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}

export default UserInformation;
