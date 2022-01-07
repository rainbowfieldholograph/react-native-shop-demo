import React, {useState} from 'react';
import {Text} from 'react-native';
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
        placeholderTextColor="#333333"
        value={mail}
        onChangeText={text => setMail(text)}
        style={{
          marginBottom: 20,
        }}
      />
      <AuthInput
        placeholder="Password"
        placeholderTextColor="#333333"
        value={pass}
        onChangeText={text => setPass(text)}
        style={{
          marginBottom: 40,
        }}
      />
      <AuthButton buttonStyles={{marginBottom: 12}} goTo="MainTabs">
        <Text>Login</Text>
      </AuthButton>
      <AuthButton goTo="Registration">
        <Text>Create new</Text>
      </AuthButton>
    </AuthContainer>
  );
};