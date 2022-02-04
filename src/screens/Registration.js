import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {AuthButton} from '../components/AuthButton';
import AuthContainer from '../components/AuthContainer';
import AuthInput from '../components/AuthInput';

export const Registration = () => {
  const [mailInput, setMailInput] = useState('');
  const [login, setlogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthContainer>
      <AuthInput
        placeholder="Mail"
        value={login}
        onChangeText={text => setlogin(text)}
      />
      <AuthInput
        placeholder="Mail"
        value={mailInput}
        onChangeText={text => setMailInput(text)}
      />
      <AuthInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.passwordInput}
        type="password"
      />
      <AuthButton goTo="MainTabs">
        <Text>Create account</Text>
      </AuthButton>
    </AuthContainer>
  );
};

const styles = StyleSheet.create({
  passwordInput: {
    marginBottom: 40,
  },
});
