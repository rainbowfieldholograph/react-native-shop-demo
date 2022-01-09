import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../theme';
import {PressableArea} from './PressableArea';

export const Header = ({
  children,
  circle = true,
  search = true,
  cart = true,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {children}
      {circle && <Icon name="circle" size={24} color={theme.primary} />}
      {search && (
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color={theme.primary} />
          <TextInput style={styles.input}></TextInput>
        </View>
      )}
      {cart && (
        <PressableArea onPress={() => navigation.navigate('Basket')}>
          <Icon name="shopping-cart" size={24} color={theme.primary} />
        </PressableArea>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: theme.faded,
  },
  searchContainer: {
    flex: 1,
    backgroundColor: theme.faded,
    borderRadius: 16,
    height: 35,
    paddingLeft: 17,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    marginHorizontal: 12,
  },
  input: {
    width: '100%',
    height: '200%',
  },
});
