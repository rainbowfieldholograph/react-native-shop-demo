import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Header} from '../components/Header';
import {PressableArea} from '../components/PressableArea';
import {tagsData} from '../helpers/appData';
import {theme} from '../helpers/theme';

export const Categories = () => {
  return (
    <View>
      <Header search={false} circle={false} />
      <FlatList
        data={tagsData}
        renderItem={({item}) => (
          <PressableArea style={styles.listButton}>
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
  listButton: {
    marginHorizontal: 40,
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: theme.tertiary,
  },
});
