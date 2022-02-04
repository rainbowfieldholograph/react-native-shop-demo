import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Favorites} from '../components/Favorites';
import {useProductContext} from '../context/ProductsContext';
import {theme} from '../helpers/theme';
import {PressableArea} from '../components/PressableArea';
import {useNavigation} from '@react-navigation/native';

export default function () {
  const navigation = useNavigation();
  const products = useProductContext();

  const logOut = () => navigation.replace('Login');

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.signOutWrapper}>
        <PressableArea onPress={() => logOut()}>
          <Icon name="sign-out-alt" color={'#FFA900'} size={45} />
        </PressableArea>
      </View>
      <View style={styles.userInfo}>
        <View style={styles.avatar}></View>
        <View style={styles.usernameWrapper}>
          <Text style={styles.username}>Username</Text>
        </View>
      </View>
      <Favorites data={products} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  signOutWrapper: {
    position: 'absolute',
    right: 0,
    top: 0,
    paddingRight: 10,
    paddingTop: 10,
    zIndex: 1,
  },
  userInfo: {
    width: '100%',
    height: 216,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 62,
    backgroundColor: '#FFA900',
  },
  usernameWrapper: {
    marginTop: 8,
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: theme.primary,
    alignItems: 'center',
  },
  username: {
    color: theme.text.secondary,
  },
});
