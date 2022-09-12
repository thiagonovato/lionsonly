import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../containers/AuthContainer/LoginScreen';
import RegistrationScreen from '../../containers/AuthContainer/RegistrationScreen';

const AuthenticationStack = createNativeStackNavigator();

const AuthenticationNavigation = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name={'Login'} component={LoginScreen} />
      <AuthenticationStack.Screen
        name={'Register'}
        component={RegistrationScreen}
      />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigation;
