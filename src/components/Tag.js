import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Tag = ({title, tagStyles}) => {
  return (
    <View style={{...styles.tagWrapper, ...tagStyles}}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tagWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    overflow: 'hidden',
  },
  text: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});
