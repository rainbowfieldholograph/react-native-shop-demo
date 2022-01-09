import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const KeyModal = ({navigation}) => {
  const onClickOut = () => navigation.goBack();
  return (
    <Pressable onPress={() => onClickOut()} style={styles.wrapper}>
      <Pressable
        onPress={event => event.stopPropagation()}
        style={styles.container}>
        <View style={styles.exitWrapper}>
          <IconFontAwesome5
            onPress={() => onClickOut()}
            name="times"
            size={30}
            color="#F5B33E"
          />
        </View>
        <Text style={styles.title}>Введите лицензионный ключ</Text>
        <TextInput style={styles.input} />
        <TouchableOpacity
          onPress={() => onClickOut()}
          style={styles.acceptButton}>
          <Text style={styles.acceptButtonText}>Подтвердить</Text>
        </TouchableOpacity>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: '80%',
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  exitWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingRight: 8,
    paddingTop: 8,
  },
  title: {fontSize: 20, marginBottom: 20},
  input: {
    width: '80%',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    overflow: 'hidden',
    marginBottom: 15,
  },
  acceptButton: {
    backgroundColor: '#FFA900',
    borderRadius: 8,
    padding: 10,
  },
  acceptButtonText: {
    fontSize: 18,
    color: '#FFF',
  },
});

export default KeyModal;
