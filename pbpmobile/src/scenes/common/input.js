import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles'

const Input = ({
  placeholder,
  handleOnchange,
  value,
  inputStyles={},
  secureTextEntry=false,
  keyboardType="default"}) => {
  return (
    <TextInput
      style={{...styles.input, ...inputStyles}}
      placeholder={placeholder}
      onChangeText={handleOnchange}
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
     />
  );
}

export default Input
