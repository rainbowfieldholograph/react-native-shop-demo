import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {PressableArea} from './PressableArea';

export const AuthButton = ({children, goTo, buttonStyles, ...rest}) => {
  const navigation = useNavigation();
  return (
    <PressableArea
      onPress={() => navigation.navigate(goTo)}
      style={{...styles.button, ...buttonStyles}}
      {...rest}>
      {children}
    </PressableArea>
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
