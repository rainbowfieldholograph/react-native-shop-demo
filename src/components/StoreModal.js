import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Header} from './Header';
import {Statistics} from './Statistics';
import {Tags} from './Tags';
import {useNavigation} from '@react-navigation/native';
import {GoBackArrow} from './GoBackArrow';
import {PressableArea} from './PressableArea';

export const StoreModal = ({route}) => {
  const navigation = useNavigation();
  const {title, image, added, tags, price} = route?.params;
  return (
    <View style={styles.wrapper}>
      <Header search={false} circle={false}>
        <GoBackArrow />
      </Header>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.infoArea}>
        <Text style={styles.title}>{title}</Text>
        <Statistics style={styles.statisticArea} added={added} />
        <Tags tags={tags} />
        <Text style={styles.price}>Цена: {price} руб</Text>
        <PressableArea
          style={styles.keyBtn}
          onPress={() => navigation.navigate('KeyModal')}>
          <Text style={styles.btnText}>Ввести ключ</Text>
        </PressableArea>
        <PressableArea style={styles.btnBottom}>
          <Text style={styles.btnText}>Добавить в корзину</Text>
        </PressableArea>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: 'white'},
  image: {flex: 1, width: '100%', resizeMode: 'stretch'},
  infoArea: {
    backgroundColor: '#EFEFEF',
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderTopRightRadius: 16,
  },
  statisticArea: {
    marginBottom: 14,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  price: {marginTop: 14, marginBottom: 12},
  keyBtn: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#119C38',
    borderRadius: 12,
    marginBottom: 16,
  },
  btnBottom: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#333333',
    borderRadius: 12,
  },
  btnText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});
