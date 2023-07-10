import {TextInputProps} from 'react-native';
import {FieldValidator} from 'formik';

export interface InputProps extends TextInputProps {
  label: string;
  name: string;
  validate?: FieldValidator;
}
