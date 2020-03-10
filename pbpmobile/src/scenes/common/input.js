import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles'

const Input = ({placeholder, handleOnchange, value, secureTextEntry=false, keyboardType="default"}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={handleOnchange}
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
     />
  );
}

export default Input
