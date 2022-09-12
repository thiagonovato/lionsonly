import React from 'react';
import globalStyles from '../util/globalStyles';
import PropTypes from 'prop-types';
import AppText from './AppText';
import { StyleSheet } from 'react-native';

const SmallText = ({ style, children }) => {
  return <AppText style={[styles.text, style]}>{children}</AppText>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: globalStyles.SCREEN_SIZE.width * 0.04,
  },
});

SmallText.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};

export default SmallText;
