import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AuthContainer = ({children}) => {
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      paddingHorizontal: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E5E5E5',
    },
    inner: {
      width: '100%',
    },
    title: {
      marginBottom: 40,
      fontSize: 30,
      color: '#000',
      fontWeight: '600',
    },
  });

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>React Native Store</Text>
      <View style={styles.inner}>{children}</View>
    </View>
  );
};

export default AuthContainer;
