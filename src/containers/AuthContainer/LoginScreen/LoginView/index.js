import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import AppTextInput from '../../../../components/AppTextInput';
import ScreenContainer from '../../../../components/ScreenContainer';
import PropTypes from 'prop-types';
import globalImages from '../../../../util/globalImages';
import { styles } from './styles';
import AppText from '../../../../components/AppText';
import Button from '../../../../components/Button';

const LoginView = ({
  username,
  password,
  setUserName,
  setPassword,
  gotoRegistrationScreen,
}) => {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Image source={globalImages.logo} style={styles.logo} />
        <AppTextInput
          label={'Username'}
          value={username}
          icon={globalImages.usernameIcon}
          setTextValue={setUserName}
        />
        <AppTextInput
          secureTextEntry
          label={'Password'}
          value={password}
          icon={globalImages.passwordIcon}
          setTextValue={setPassword}
        />
        <Button label={'Login'} />
        <TouchableOpacity onPress={gotoRegistrationScreen}>
          <AppText>New Member?</AppText>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

LoginView.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  setUserName: PropTypes.func,
  setPassword: PropTypes.func,
  gotoRegistrationScreen: PropTypes.func,
};

export default LoginView;
