import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import SelectColorBlock from './SelectColorBlock';

const ColorSelection = ({colorsData}) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colorsData[0]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          ...styles.changeColorButton,
          backgroundColor: selectedColor,
          borderColor: showColors ? '#FFA900' : '#FFFFFF',
        }}
        onPress={() => {
          setShowColors(!showColors);
        }}
      />
      <TouchableOpacity
        style={styles.arrowButton}
        onPress={() => {
          setShowColors(!showColors);
        }}>
        <FontAwesome5Icon
          name={showColors ? 'chevron-down' : 'chevron-up'}
          size={20}
          color={showColors ? '#FFA900' : '#FFFFFF'}
        />
      </TouchableOpacity>
      {showColors && (
        <View style={styles.selectionBackground}>
          {colorsData.map((item, index) => (
            <SelectColorBlock
              key={index}
              color={item}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    marginRight: 8,
  },
  changeColorButton: {
    width: 48,
    height: 48,
    borderWidth: 2,
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  arrowButton: {
    width: 48,
    height: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectionBackground: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 12,
    padding: 6,
  },
});

export default ColorSelection;
