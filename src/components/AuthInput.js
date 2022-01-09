import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {theme} from '../theme';

const MyInput = ({inputStyle, ...rest}) => {
  const styles = StyleSheet.create({
    width: '100%',
    padding: 8,
    borderRadius: 8,
    color: theme.text.primary,
    marginBottom: 20,
    backgroundColor: theme.faded,
    ...inputStyle,
  });
  return <TextInput style={styles} {...rest} />;
};

export default MyInput;
