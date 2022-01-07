import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import PointCard from './PointCard';

export const Point = ({data = []}) => {
  return (
    <ScrollView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 12,
        paddingTop: 20,
      }}>
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
      {/* <PointCard
        imgSrc={require('../img/dalshe-boga-net.png')}
        title="Дальше бога нет!"
        users="1"
        time="60+"
        added="14"
        price="599"
      /> */}
      {/* <PointCard
        imgSrc={require('../img/mammathodus.png')}
        title="The Forgotten history MAMMOTHODUS"
        users="1"
        time="60+"
        added="14"
        price="2500"
      /> */}
    </ScrollView>
  );
};
