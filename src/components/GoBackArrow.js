import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../helpers/theme';
import {PressableArea} from './PressableArea';

export const GoBackArrow = () => {
  const navigation = useNavigation();
  return (
    <PressableArea onPress={() => navigation.goBack()}>
      <Icon name="arrow-left" size={30} color={theme.primary} />
    </PressableArea>
  );
};
