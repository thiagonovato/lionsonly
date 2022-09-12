import { StyleSheet } from 'react-native';
import globalStyles from '../../../../util/globalStyles';

const styles = StyleSheet.create({
  profileImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: globalStyles.SCREEN_SIZE.height * 0.04,
  },
  profileImage: {
    borderRadius: 10,
    width: globalStyles.SCREEN_SIZE.height * 0.16,
    height: globalStyles.SCREEN_SIZE.height * 0.16,
  },
});

export { styles };
