import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../helpers/theme';
import {PressableArea} from './PressableArea';

export const Header = ({children, search = true, cart = true}) => {
  const navigation = useNavigation();
  const inputRef = useRef(null);

  const focusInput = () => inputRef.current.focus();

  return (
    <View style={styles.container}>
      {children}
      {search && (
        <View style={styles.searchContainer}>
          <PressableArea onPress={focusInput}>
            <Icon name="search" size={25} color={theme.primary} />
          </PressableArea>
          <TextInput ref={inputRef} style={styles.input} />
        </View>
      )}
      {cart && (
        <PressableArea onPress={() => navigation.navigate('Basket')}>
          <Icon name="shopping-cart" size={25} color={theme.primary} />
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
    marginRight: 12,
  },
  input: {
    width: '100%',
    height: '200%',
  },
});
