import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../theme';

const SelectColorBlock = ({color, selectedColor, setSelectedColor}) => {
  return (
    <TouchableOpacity
      onPress={() => setSelectedColor(color)}
      style={{
        ...styles.block,
        borderWidth: selectedColor === color ? 2.5 : 0,
        backgroundColor: color,
      }}
    />
  );
};

const styles = StyleSheet.create({
  block: {
    width: 40,
    height: 40,
    marginBottom: 8,
    borderRadius: 8,
    borderColor: theme.secondary,
  },
});

export default SelectColorBlock;
