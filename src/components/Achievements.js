import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../theme';

const Achievements = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Скоро...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
});

export default Achievements;
