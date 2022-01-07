import React from 'react';
import {Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Loading from './Loading';

const KeyModal = ({navigation, route}) => {
  const onClickAcceptButton = () => navigation.goBack();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: 250,
          width: '80%',
          backgroundColor: '#EFEFEF',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          borderWidth: 2,
          borderColor: 'black',
        }}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <View
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                paddingRight: 8,
                paddingTop: 8,
              }}>
              <IconFontAwesome5
                onPress={() => navigation.goBack()}
                name="times"
                size={30}
                color="#F5B33E"
              />
            </View>
            <Text style={{fontSize: 20, marginBottom: 20}}>
              Введите лицензионный ключ
            </Text>
            <TextInput
              style={{
                width: '80%',
                justifyContent: 'center',
                borderWidth: 2,
                borderColor: 'black',
                overflow: 'hidden',
                marginBottom: 15,
              }}></TextInput>
            <TouchableOpacity
              onPress={() => onClickAcceptButton()}
              style={{
                backgroundColor: '#FFA900',
                borderRadius: 8,
                padding: 10,
              }}>
              <Text style={{fontSize: 18, color: '#FFF'}}>Подтвердить</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default KeyModal;
