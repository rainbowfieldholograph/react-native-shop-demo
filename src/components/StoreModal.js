import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Header} from './Header';
import {Statistics} from './Statistics';
import {Tags} from './Tags';

import {useNavigation} from '@react-navigation/native';
import {GoBackArrow} from './GoBackArrow';

export const StoreModal = ({route}) => {
  const navigation = useNavigation();
  const {title, image, added, tags, price} = route?.params;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}>
      <Header search={false} circle={false}>
        <GoBackArrow />
      </Header>
      <Image
        style={{flex: 1, width: '100%', resizeMode: 'cover'}}
        source={{uri: image}}
      />
      <View
        style={{
          height: 340,
          backgroundColor: '#EFEFEF',
          width: '100%',
          paddingTop: 16,
          paddingHorizontal: 12,
          borderTopRightRadius: 16,
        }}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{title}</Text>
          <View style={{marginBottom: 14}}>
            <Statistics added={added} />
          </View>
          <Tags tags={tags} />
          <Text style={{marginTop: 14, marginBottom: 12}}>
            Цена: {price} руб
          </Text>
          <View
            style={{
              flex: 1,
              display: 'flex',
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#119C38',
                  borderRadius: 12,
                  height: 35,
                  marginRight: 10,
                }}>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>Демо</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#119C38',
                  borderRadius: 12,
                  height: 35,
                  marginLeft: 10,
                }}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => navigation.navigate('KeyModal')}>
                  <Text style={styles.btnText}>Ввести ключ</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 20,
          }}>
          <View
            style={{
              width: '100%',
              height: 40,
              backgroundColor: '#333333',
              borderRadius: 12,
            }}>
            <TouchableOpacity style={styles.btnBig}>
              <Text style={styles.btnText}>Добавить в корзину</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  btn: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBig: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});
