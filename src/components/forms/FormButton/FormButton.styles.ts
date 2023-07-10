import {StyleSheet} from 'react-native';
import colors from '../../../res/colors';

export const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
  },
  buttonLoading: {
    backgroundColor: colors.primaryDirt,
  },
});
