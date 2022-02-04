import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ProductProvider} from './context/ProductsContext';
import {AppNavigator} from './navigation/AppNavigator';
import {theme} from './helpers/theme';

export const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ProductProvider>
        <AppNavigator />
      </ProductProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
});
