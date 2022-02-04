import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../helpers/theme';

export const Statistics = ({added, style}) => {
  return (
    <View style={{...styles.box, ...style}}>
      <Icon name="user-plus" size={12} color="black" />
      <Text style={styles.text}>{added}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 30,
    padding: 5,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: theme.primary,
  },
  text: {
    fontSize: 12,
    marginLeft: 6,
  },
});
