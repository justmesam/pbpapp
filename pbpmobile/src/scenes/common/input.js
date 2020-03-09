import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles'

const Input = ({placeholder, handleOnchange, value}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={handleOnchange}
      value={value}
     />
  );
}

export default Input
