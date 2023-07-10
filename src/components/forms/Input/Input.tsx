import {InputProps} from './Input.types';
import {useField} from 'formik';
import React, {useCallback} from 'react';
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';
import {styles} from './Input.styles';

export function Input(props: InputProps) {
  const {name, label, validate, onFocus, onBlur, ...attr} = props;
  const [field, meta, helpers] = useField({name, validate});

  const handleOnChangeText = useCallback(
    (value: string) => {
      if (!meta.touched) {
        helpers.setTouched(true);
      }
      helpers.setValue(value);
    },
    [helpers, meta],
  );

  const handleOnBlur = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    onFocus?.(event);
    if (!meta.touched) {
      helpers.setTouched(true);
    }
  };
  const handleOnFocus = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    onBlur?.(event);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        style={styles.input}
        placeholder="Enter Name"
        value={field.value}
        onChangeText={handleOnChangeText}
        {...attr}
      />
      {meta.touched && meta.error ? (
        <Text style={styles.errorText}>{meta.error}</Text>
      ) : null}
    </View>
  );
}
