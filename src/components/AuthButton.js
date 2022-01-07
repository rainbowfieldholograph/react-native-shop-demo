import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable} from 'react-native';

export const AuthButton = ({children, goTo, buttonStyles, ...rest}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(goTo)}
      style={{
        paddingVertical: 8,
        backgroundColor: '#FFA900',
        alignItems: 'center',
        borderRadius: 8,
        ...buttonStyles,
      }}
      {...rest}>
      {children}
    </Pressable>
  );
};
