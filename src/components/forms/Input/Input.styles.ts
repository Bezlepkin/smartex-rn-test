import {StyleSheet} from 'react-native';
import colors from '../../../res/colors';

export const styles = StyleSheet.create({
  label: {
    marginTop: 20,
  },
  input: {
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  errorText: {
    marginTop: 12,
    fontSize: 12,
    color: colors.errorText,
  },
});
