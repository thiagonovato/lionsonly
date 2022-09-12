import React from 'react';
import { StyleSheet, View } from 'react-native';
import globalStyles from '../util/globalStyles';
import PropTypes from 'prop-types';
const HeaderContainer = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: globalStyles.SCREEN_SIZE.width * 0.15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
});

HeaderContainer.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object,
};

export default HeaderContainer;
