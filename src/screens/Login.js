import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {AuthButton} from '../components/AuthButton';
import AuthContainer from '../components/AuthContainer';
import AuthInput from '../components/AuthInput';

export const Login = () => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <AuthContainer>
      <AuthInput
        placeholder="Mail"
        value={mail}
        onChangeText={text => setMail(text)}
      />
      <AuthInput
        placeholder="Password"
        value={pass}
        onChangeText={text => setPass(text)}
        style={styles.passwordInput}
      />
      <AuthButton style={styles.button} goTo="MainTabs">
        <Text>Login</Text>
      </AuthButton>
      <AuthButton goTo="Registration">
        <Text>Create new</Text>
      </AuthButton>
    </AuthContainer>
  );
};

export const styles = StyleSheet.create({
  button: {marginBottom: 12},
  passwordInput: {marginBottom: 40},
});
