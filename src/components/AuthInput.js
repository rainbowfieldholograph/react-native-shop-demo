import React from 'react';
import {TextInput} from 'react-native';

const MyInput = ({inputStyle, ...rest}) => {
  return (
    <TextInput
      style={{
        width: '100%',
        padding: 8,
        borderRadius: 8,
        color: '#333333',
        marginBottom: 20,
        backgroundColor: '#EFEFEF',
        ...inputStyle,
      }}
      {...rest}
    />
  );
};

export default MyInput;
