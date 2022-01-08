import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Statistics = ({added, marginRight = 16}) => {
  return (
    <View style={styles.container}>
      <View style={{...styles.box, marginRight: marginRight}}>
        <Icon name="user-plus" size={12} color="black" />
        <Text style={styles.text}>{added}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
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
    borderColor: '#F5B33E',
  },
  text: {
    fontSize: 12,
    marginLeft: 6,
  },
});
