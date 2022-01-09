import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {theme} from '../theme';
import PointCard from './PointCard';

export const Point = ({data = []}) => {
  return (
    <ScrollView style={styles.wrapper}>
      {data.map((item, index) => {
        return (
          <PointCard
            key={index}
            imgSrc={item.image}
            title={item.title}
            users={item.players}
            time={item.time}
            added={item.maxPlayers}
            price={item.cost}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.secondary,
    paddingHorizontal: 12,
    paddingTop: 20,
  },
});
