import { View, StatusBar, ScrollView } from 'react-native';
import React from 'react';
import globalStyles from '../util/globalStyles';
import PropTypes from 'prop-types';

const Screen = ({ isScrollable, style, children }) => {
  return isScrollable ? (
    <ScrollView style={style}>{children}</ScrollView>
  ) : (
    <View style={style}>{children}</View>
  );
};
const ScreenContainer = ({ style, children, ...rest }) => {
  return (
    <Screen
      style={[
        globalStyles.COMMON_STYLES.screenContainer,
        globalStyles.COMMON_STYLES.scrollViewContainer,
        style,
      ]}
      {...rest}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={globalStyles.COLORS.backgroundColor}
      />
      {children}
    </Screen>
  );
};

ScreenContainer.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};

export default ScreenContainer;
