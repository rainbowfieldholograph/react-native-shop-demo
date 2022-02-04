import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Text} from 'react-native';
import {Categories} from '../screens/Сategories';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FFA900',
        tabBarInactiveTintColor: '#333333',
        headerShown: false,
        tabBarStyle: {height: 60},
      }}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: () => <Text>Store</Text>,
          tabBarIcon: ({color}) => (
            <Icon name="store" color={color} size={25} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Сategories"
        component={Categories}
        options={{
          tabBarLabel: () => <Text>Categories</Text>,
          tabBarIcon: ({color}) => <Icon name="list" color={color} size={25} />,
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: () => <Text>Profile</Text>,
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={25} />,
        }}
      />
    </BottomTabs.Navigator>
  );
};
