import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Tag} from './Tag';

export const Tags = ({tags}) => {
  return (
    <View style={styles.container}>
      {tags.map((tag, index) => {
        const tagStyles = {marginRight: index !== tags.length - 1 ? 10 : 0};
        return <Tag key={index} title={tag} style={tagStyles} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
