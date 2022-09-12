import { StyleSheet } from 'react-native';
import globalStyles from '../../util/globalStyles';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: globalStyles.COLORS.primary,
    width: '100%',
    height: globalStyles.SCREEN_SIZE.width * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonLabel: {
    fontSize: globalStyles.SCREEN_SIZE.width * 0.075,
    fontWeight: 'bold',
  },
});

export { styles };
