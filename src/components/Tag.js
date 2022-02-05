import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../helpers/theme';

export const Tag = ({title, style}) => {
  return (
    <View style={{...styles.tagWrapper, ...style}}>
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
    borderWidth: 1,
    borderColor: theme.tertiary,
  },
  text: {
    fontSize: 12,
    color: theme.text.primary,
  },
});
