import React from 'react';
import { Image, TextInput, View } from 'react-native';
import globalStyles from '../../util/globalStyles';
import { styles } from './styles';
import SmallText from '../SmallText';
import PropTypes from 'prop-types';

const AppTextInput = ({ label, icon, setTextValue, ...rest }) => {
  return (
    <View style={styles.textInputContainer}>
      <SmallText>{label}</SmallText>
      <View style={styles.textInputContent}>
        <TextInput
          placeholder={`Enter ${label}`}
          placeholderTextColor={globalStyles.COLORS.darkGrey}
          style={[globalStyles.COMMON_STYLES.text, styles.textInput]}
          onChangeText={text => {
            setTextValue(text);
          }}
          {...rest}
        />
        <View style={styles.iconContainer}>
          <Image
            source={icon}
            style={[globalStyles.COMMON_STYLES.icon, styles.inputIcon]}
          />
        </View>
      </View>
    </View>
  );
};

AppTextInput.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.any,
  setTextValue: PropTypes.func,
};

export default AppTextInput;
