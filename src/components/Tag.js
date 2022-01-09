import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../theme';

export const Tag = ({title, tagStyle}) => {
  return (
    <View style={{...styles.tagWrapper, ...tagStyle}}>
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
    backgroundColor: theme.faded,
    borderWidth: 1,
    borderColor: theme.tertiary,
  },
  text: {
    fontSize: 12,
    color: theme.text.primary,
  },
});
