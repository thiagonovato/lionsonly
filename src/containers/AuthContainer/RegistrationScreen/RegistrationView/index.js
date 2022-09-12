import React from 'react';
import { Image } from 'react-native';
import HeaderContainer from '../../../../components/HeaderContainer';
import ScreenContainer from '../../../../components/ScreenContainer';
import globalImages from '../../../../util/globalImages';
import globalStyles from '../../../../util/globalStyles';
import AppTextInput from '../../../../components/AppTextInput';
import Button from '../../../../components/Button';
import PropTypes from 'prop-types';
const RegistrationView = ({
  setFirstName,
  setLastName,
  setUsername,
  setPassword,
}) => {
  return (
    <ScreenContainer isScrollable>
      <HeaderContainer>
        <Image
          source={globalImages.backIcon}
          style={globalStyles.COMMON_STYLES.icon}
        />
      </HeaderContainer>
      <AppTextInput
        label={'First Name'}
        icon={globalImages.usernameIcon}
        setTextValue={setFirstName}
      />
      <AppTextInput
        label={'Last Name'}
        icon={globalImages.usernameIcon}
        setTextValue={setLastName}
      />
      <AppTextInput
        label={'Username'}
        icon={globalImages.usernameIcon}
        setTextValue={setUsername}
      />
      <AppTextInput
        label={'Password'}
        icon={globalImages.passwordIcon}
        secureTextEntry
        setTextValue={setPassword}
      />
      <Button
        label={'Upload Image'}
        style={{
          backgroundColor: globalStyles.COLORS.accent,
        }}
      />
      <Button label={'Join the Den'} />
    </ScreenContainer>
  );
};

RegistrationView.propTypes = {
  setFirstName: PropTypes.func,
  setLastName: PropTypes.func,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
};

export default RegistrationView;
