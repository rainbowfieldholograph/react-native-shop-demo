import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

// const colors = ['#F5B33E', '#5031F5', '#B834E7'];

export const Tags = ({tags}) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    text: {
      fontSize: 12,
      color: '#FFFFFF',
    },
  });

  return (
    <View style={styles.container}>
      {tags.map((i, index) => {
        return (
          <View
            key={index}
            style={{
              width: '30%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: i.color,
              borderRadius: 12,
              paddingHorizontal: 8,
              paddingVertical: 2,
              overflow: 'hidden',
            }}>
            <Text style={styles.text}>{i.title}</Text>
          </View>
        );
      })}
    </View>
  );
};
