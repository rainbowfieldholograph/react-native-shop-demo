import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigator} from './Main';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
