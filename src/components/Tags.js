import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Tag} from './Tag';

// const colors = ['#F5B33E', '#5031F5', '#B834E7'];

export const Tags = ({tags}) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
  });

  return (
    <View style={styles.container}>
      {tags.map((tag, index) => {
        const isLastElement = index !== tags.length - 1;
        return (
          <Tag
            key={index}
            title={tag}
            tagStyle={{
              marginRight: isLastElement ? 10 : 0,
            }}
          />
        );
      })}
    </View>
  );
};
