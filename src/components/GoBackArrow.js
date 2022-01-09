import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../theme';

export const GoBackArrow = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Icon name="arrow-left" size={30} color={theme.primary} />
    </Pressable>
  );
};
