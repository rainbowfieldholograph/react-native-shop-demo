import React from 'react';
import {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {DiceFigure} from './DiceFigure';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../theme';

const ICON_SIZE = 35;
const ICON_COLOR = theme.secondary;

const figuresData = [
  {id: 0, title: 'pyramid', text: 'D4'},
  {id: 1, title: 'cube', text: 'D6'},
  {id: 2, title: 'triangle', text: 'D8'},
  {id: 3, title: 'ruby', text: 'D10'},
  {id: 4, title: 'ball', text: 'D12'},
  {id: 5, title: 'pentagram', text: 'D20'},
  {id: 6, title: 'ruby', text: 'D%'},
];

export const DiceFigures = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [showFigures, setShowFigures] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          ...styles.figuresButton,
          borderColor: showFigures ? theme.primary : theme.secondary,
        }}
        onPress={() => setShowFigures(!showFigures)}>
        <DiceFigure
          id={selectedItem}
          title={figuresData[selectedItem].title}
          size={ICON_SIZE}
          color={ICON_COLOR}
          selectedItem={selectedItem}
          onPress={() => setShowFigures(!showFigures)}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.figuresArrowButton}
        onPress={() => setShowFigures(!showFigures)}>
        <IconFontAwesome5
          name={showFigures ? 'chevron-down' : 'chevron-up'}
          size={20}
          color={showFigures ? theme.primary : theme.secondary}
        />
      </TouchableOpacity>
      {showFigures && (
        <View style={styles.figuresContainer}>
          {figuresData.map(figure => (
            <DiceFigure
              key={figure.id}
              id={figure.id}
              title={figure.title}
              size={ICON_SIZE}
              color={selectedItem == figure.id ? theme.primary : ICON_COLOR}
              text={figure.text}
              onPress={() => setSelectedItem(figure.id)}
              figureStyles={styles.figure}
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
  figuresButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: 48,
    height: 48,
    borderWidth: 1,
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  figuresArrowButton: {
    width: 48,
    height: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  figure: {
    marginBottom: 10,
    paddingTop: 4,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.4)',
  },
  figuresContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 12,
  },
});
