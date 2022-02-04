import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {theme} from '../helpers/theme';
import {Statistics} from './Statistics';

const PointCard = ({imgSrc, title, users, time, added, price}) => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={{uri: imgSrc}} />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Statistics users={users} time={time} added={added} />
        <Text>{price} руб.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 14,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: theme.secondary,
  },
  image: {width: 72, height: 100},
  container: {
    flex: 1,
    paddingLeft: 18,
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    lineHeight: 20,
    fontSize: 16,
  },
});

export default PointCard;
