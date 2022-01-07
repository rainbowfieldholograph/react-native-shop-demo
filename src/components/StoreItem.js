import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Statistics} from './Statistics';
import {Tags} from './Tags';
import {useNavigation} from '@react-navigation/native';

export const StoreItem = ({title, image, added, tags, price}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imgWrapper}
        onPress={() => {
          navigation.navigate('StoreModal', {
            title: title,
            image: image,
            added: added,
            tags: tags,
            price: price,
          });
        }}>
        <Image source={{uri: image}} style={styles.img} />
      </TouchableOpacity>
      <View style={styles.infoBox}>
        <Text style={styles.title}>{title}</Text>
        <View style={{marginBottom: 14}}>
          <Statistics added={added} />
        </View>
        <Tags tags={tags} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingBottom: 16,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  imgWrapper: {
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 44,
  },
  img: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  infoBox: {
    paddingLeft: 12,
    paddingRight: 24,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
});
