import { StyleSheet } from 'react-native';
import globalStyles from '../../../../util/globalStyles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    height: globalStyles.SCREEN_SIZE.width * 0.8,
    width: globalStyles.SCREEN_SIZE.width * 0.7,
    marginTop: globalStyles.SCREEN_SIZE.width * 0.1,
    marginBottom: globalStyles.SCREEN_SIZE.width * 0.1,
  },
});

export { styles };
