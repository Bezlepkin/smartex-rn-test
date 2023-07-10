import {FormButtonProps} from './FormButton.types';
import {styles} from './FormButton.styles';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback} from 'react';
import {useFormikContext} from 'formik';

export function FormButton(props: FormButtonProps) {
  const {onPress, loading, disabled, ...attr} = props;
  const formik = useFormikContext();

  const handleSubmit = useCallback(
    (e: GestureResponderEvent) => {
      onPress?.(e);
      formik.handleSubmit();
    },
    [formik, onPress],
  );

  return (
    <TouchableOpacity
      disabled={loading || disabled}
      style={[styles.button, loading && styles.buttonLoading]}
      onPress={handleSubmit}
      {...attr}>
      {loading || disabled ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.buttonText}>Submit</Text>
      )}
    </TouchableOpacity>
  );
}
