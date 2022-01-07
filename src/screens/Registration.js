import React, {useState} from 'react';
import {Text} from 'react-native';
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
        placeholder="Name"
        value={login}
        onChangeText={text => setlogin(text)}
        placeholderTextColor="#333333"
        style={{
          marginBottom: 20,
        }}
      />
      <AuthInput
        placeholder="Mail"
        value={mailInput}
        onChangeText={text => setMailInput(text)}
        placeholderTextColor="#333333"
        style={{
          marginBottom: 40,
        }}
      />
      <AuthInput
        placeholder="Password"
        placeholderTextColor="#333333"
        value={password}
        onChangeText={text => setPassword(text)}
        style={{
          marginBottom: 40,
        }}
        type="password"
      />
      <AuthButton goTo="MainTabs">
        <Text>Create account</Text>
      </AuthButton>
    </AuthContainer>
  );
};
