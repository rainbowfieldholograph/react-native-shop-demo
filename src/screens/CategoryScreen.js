import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StoreItem} from '../components/StoreItem';
import {Header} from '../components/Header';
import {GoBackArrow} from '../components/GoBackArrow';

export const CategoryScreen = ({route}) => {
  const {title, productsData} = route?.params;
  return (
    <>
      <Header circle={false} search={false} cart={false}>
        <GoBackArrow />
        <Text style={styles.title}>{title}</Text>
      </Header>
      <FlatList
        style={styles.list}
        data={productsData}
        renderItem={({item}) => (
          <StoreItem
            key={item.id}
            title={item.title}
            image={item.image}
            added={item.added}
            tags={item.tags}
            price={item.price}
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 5,
  },
  list: {
    marginTop: 20,
  },
});
