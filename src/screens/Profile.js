import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Achievements from '../components/Achievements';
import {Point} from '../components/Point';
import {useProductContext} from '../context/ProductsContext';
import {theme} from '../theme';

const data = [];

export default function ({navigation}) {
  const [toggleBlocks, setToggleBlocks] = useState(false);
  const products = useProductContext();
  const logOut = () => {
    navigation.replace('Login');
  };

  const styles = StyleSheet.create({
    boxSelectWrapperLeft: {
      flex: 1,
      height: 36,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: toggleBlocks ? 'transparent' : theme.secondary,
      borderTopRightRadius: 12,
      borderTopLeftRadius: 12,
    },
    boxSelectWrapperRight: {
      flex: 1,
      height: 36,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: toggleBlocks ? theme.secondary : 'transparent',
      borderTopRightRadius: 12,
      borderTopLeftRadius: 12,
    },
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          paddingRight: 10,
          paddingTop: 10,
          zIndex: 1,
        }}>
        <TouchableOpacity>
          <Icon
            onPress={() => logOut()}
            name="sign-out-alt"
            color={'#FFA900'}
            size={45}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 216,
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 62,
            backgroundColor: '#FFA900',
          }}></View>
        <View
          style={{
            width: 150,
            marginTop: 8,
            borderRadius: 12,
            paddingVertical: 6,
            backgroundColor: '#FFA900',
            alignItems: 'center',
          }}>
          <Text style={{color: '#FFFFFF'}}>{data?.me?.login}</Text>
        </View>
      </View>
      <View style={{height: '100%', width: '100%'}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'transparent',
          }}>
          <TouchableOpacity
            style={styles.boxSelectWrapperLeft}
            onPress={() => setToggleBlocks(false)}>
            <Text>Point 237</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxSelectWrapperRight}
            onPress={() => setToggleBlocks(true)}>
            <Text>Achievements</Text>
          </TouchableOpacity>
        </View>
        {toggleBlocks ? <Achievements /> : <Point data={products} />}
      </View>
    </SafeAreaView>
  );
}
