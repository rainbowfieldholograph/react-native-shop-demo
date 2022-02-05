import React from 'react';
import {Basket} from '../screens/Basket';
import {Login} from '../screens/Login';
import {Registration} from '../screens/Registration';
import {StorePage} from '../components/StorePage';
import {BottomTabsNavigator} from './BottomTabsNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import KeyModal from '../components/KeyModal';
import {CategoryScreen} from '../screens/CategoryScreen';

const MainStack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="Registration" component={Registration} />
      <MainStack.Screen name="MainTabs" component={BottomTabsNavigator} />
      <MainStack.Screen name="Basket" component={Basket} />
      <MainStack.Screen name="StorePage" component={StorePage} />
      <MainStack.Screen name="CategoryScreen" component={CategoryScreen} />
      <MainStack.Group
        screenOptions={{
          presentation: 'transparentModal',
        }}>
        <MainStack.Screen
          name="KeyModal"
          options={{
            cardOverlayEnabled: true,
          }}
          component={KeyModal}
        />
      </MainStack.Group>
    </MainStack.Navigator>
  );
};
