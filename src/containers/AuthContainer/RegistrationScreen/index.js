import React, { useState } from 'react';
import RegistrationView from './RegistrationView';

const RegistrationScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <RegistrationView
      setFirstName={setFirstName}
      setLastName={setLastName}
      setUsername={setUsername}
      setPassword={setPassword}
    />
  );
};

export default RegistrationScreen;
