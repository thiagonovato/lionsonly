import React, { useState } from 'react';
import LoginView from './LoginView';

const LoginScreen = ({ navigation }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LoginView
      username={username}
      password={password}
      setUserName={setUserName}
      setPassword={setPassword}
      gotoRegistrationScreen={() => navigation.navigate('Register')}
    />
  );
};

export default LoginScreen;
