import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {theme} from '../helpers/theme';
import {PressableArea} from './PressableArea';

export const AuthButton = ({children, goTo, style: customStyles, ...rest}) => {
  const styles = StyleSheet.create({
    button: {
      paddingVertical: 8,
      backgroundColor: theme.primary,
      alignItems: 'center',
      borderRadius: 8,
      ...customStyles,
    },
  });

  const navigation = useNavigation();

  return (
    <PressableArea
      onPress={() => navigation.navigate(goTo)}
      style={styles.button}
      {...rest}>
      {children}
    </PressableArea>
  );
};
