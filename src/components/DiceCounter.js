import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const DiceCounter = () => {
  const [counter, setCounter] = useState(99);
  return (
    <View>
      <Text style={styles.title}>Количество:</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.counterControl}
          onPress={() => setCounter(counter - 1)}>
          <IconFontAwesome5 color="#FFFFFF" size={15} name="minus" />
        </TouchableOpacity>
        <Text style={styles.count}>{counter}</Text>
        <TouchableOpacity
          style={styles.counterControl}
          onPress={() => setCounter(counter + 1)}>
          <IconFontAwesome5 color="#FFFFFF" size={15} name="plus" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {color: '#FFFFFF', marginBottom: 8},
  container: {display: 'flex', flexDirection: 'row', alignItems: 'center'},
  count: {
    color: '#FFFFFF',
    fontSize: 20,
    marginHorizontal: 5,
  },
  counterControl: {
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 8,
  },
});

export default DiceCounter;
