import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../helpers/theme';

const AuthContainer = ({children}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>React Native Store</Text>
      <View style={styles.inner}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  inner: {
    width: '100%',
  },
  title: {
    marginBottom: 40,
    fontSize: 30,
    color: theme.text.primary,
    fontWeight: '600',
  },
});

export default AuthContainer;
