import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Statistics} from './Statistics';
import {Tags} from './Tags';
import {useNavigation} from '@react-navigation/native';
import {PressableArea} from './PressableArea';
import {theme} from '../theme';

export const StoreItem = ({title, image, added, tags, price}) => {
  const navigation = useNavigation();

  const navigateToItemModal = () => {
    navigation.navigate('StorePage', {
      title: title,
      image: image,
      added: added,
      tags: tags,
      price: price,
    });
  };

  return (
    <View style={styles.container}>
      <PressableArea
        style={styles.imgWrapper}
        onPress={() => navigateToItemModal()}>
        <Image source={{uri: image}} style={styles.img} />
      </PressableArea>
      <View style={styles.infoBox}>
        <PressableArea onPress={() => navigateToItemModal()}>
          <Text style={styles.title}>{title}</Text>
        </PressableArea>
        <View style={styles.statisticsArea}>
          <Statistics added={added} />
          <Text>{price} руб.</Text>
        </View>
        <Tags tags={tags} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingBottom: 16,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.faded,
  },
  imgWrapper: {
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 44,
  },
  img: {
    width: '100%',
    height: 400,
    resizeMode: 'stretch',
  },
  infoBox: {
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  statisticsArea: {
    marginBottom: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
