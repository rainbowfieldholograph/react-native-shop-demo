import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../theme';
import SelectColorBlock from './SelectColorBlock';
import {PressableArea} from './PressableArea';

const ColorSelection = ({colorsData}) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colorsData[0]);

  return (
    <View style={styles.container}>
      <PressableArea
        style={{
          ...styles.changeColorButton,
          backgroundColor: selectedColor,
          borderColor: showColors ? theme.primary : theme.secondary,
        }}
        onPress={() => {
          setShowColors(!showColors);
        }}
      />
      <PressableArea
        style={styles.arrowButton}
        onPress={() => {
          setShowColors(!showColors);
        }}>
        <FontAwesome5Icon
          name={showColors ? 'chevron-down' : 'chevron-up'}
          size={20}
          color={showColors ? theme.primary : theme.secondary}
        />
      </PressableArea>
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
