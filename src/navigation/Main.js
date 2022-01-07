import React from 'react';
import {Basket} from '../screens/Basket';
import {Login} from '../screens/Login';
import {Registration} from '../screens/Registration';
import {StoreModal} from '../components/StoreModal';
import {BottomTabsNavigator} from './BottomTabsNavigator';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import KeyModal from '../components/KeyModal';

const MainStack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="Registration" component={Registration} />
      <MainStack.Screen name="MainTabs" component={BottomTabsNavigator} />
      <MainStack.Screen name="Basket" component={Basket} />
      <MainStack.Group
        screenOptions={{
          presentation: 'transparentModal',
        }}>
        <MainStack.Screen
          name="StoreModal"
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            cardOverlayEnabled: true,
            gestureEnabled: true,
            gestureDirection: 'vertical',
          }}
          component={StoreModal}
        />
        <MainStack.Screen
          name="KeyModal"
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            cardOverlayEnabled: true,
            gestureEnabled: true,
            gestureDirection: 'vertical',
          }}
          component={KeyModal}
        />
      </MainStack.Group>
    </MainStack.Navigator>
  );
};
