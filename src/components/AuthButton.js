import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {theme} from '../theme';
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
    backgroundColor: theme.primary,
    alignItems: 'center',
    borderRadius: 8,
  },
});
