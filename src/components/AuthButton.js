import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';

export const AuthButton = ({children, goTo, buttonStyles, ...rest}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(goTo)}
      style={{...styles.button, ...buttonStyles}}
      {...rest}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    backgroundColor: '#FFA900',
    alignItems: 'center',
    borderRadius: 8,
  },
});
