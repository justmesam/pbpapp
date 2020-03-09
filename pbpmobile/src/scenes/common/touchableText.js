import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles'

const TouchableText = ({text, handlePress, touchStyles={}, textStyles={}}) => {
  return (
    <TouchableOpacity
     style={touchStyles}
     onPress={handlePress}
   >
     <Text style={textStyles}>{text}</Text>
   </TouchableOpacity>
  );
}

export default TouchableText
