import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../components/Header';
import {StoreItem} from '../components/StoreItem';
import {useProductContext} from '../context/ProductsContext';

export const Home = () => {
  const products = useProductContext();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <Header />
      <ScrollView style={styles.container}>
        <View>
          {products?.map((product, index) => {
            return (
              <StoreItem
                key={index}
                title={product.title}
                image={product.image}
                added={product.added}
                tags={product.tags}
                price={product.price}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 4,
  },
});
