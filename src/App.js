import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ProductProvider} from './context/ProductsContext';
import {AppNavigator} from './navigation/AppNavigator';

export const App = () => {
  return (
    <View style={styles.container}>
      <ProductProvider>
        <AppNavigator />
      </ProductProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
