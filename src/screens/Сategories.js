import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Header} from '../components/Header';
import {PressableArea} from '../components/PressableArea';
import {productsData, tagsData} from '../helpers/appData';
import {theme} from '../helpers/theme';

export const Categories = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header search={false} circle={false} />
      <FlatList
        data={tagsData}
        renderItem={({item}) => (
          <PressableArea
            style={styles.listButton}
            onPress={() => {
              const findedData = productsData.filter(product =>
                product.tags.includes(item.title),
              );
              navigation.navigate('CategoryScreen', {
                title: item.title,
                productsData: findedData,
              });
            }}>
            <Text>{item.title}</Text>
          </PressableArea>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    marginBottom: 20,
  },
  listButton: {
    marginHorizontal: 40,
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: theme.tertiary,
  },
});
