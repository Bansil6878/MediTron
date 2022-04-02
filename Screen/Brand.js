import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Brand = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{backgroundColor: '#ffffff', marginHorizontal: 10, height: 450}}>
      <Text style={styles.txtStyle}>Featured brand</Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Vaseline')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/vaseline.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=>navigation.navigate('Cipla')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/cipla.png')}
            />
          </View>
        </TouchableOpacity >

        <TouchableOpacity onPress={()=>navigation.navigate('Cetaphil')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/cetaphil.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Zandu')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/zandu.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=>navigation.navigate('Drreaddy')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/reddy.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=>navigation.navigate('Himalaya')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/himalaya.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Zydus')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/zydus.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Nivea')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/nivea.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Complan')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/complan.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Brand_details')}>
          <Text
            style={{
              backgroundColor: '#f2f2f2',
              marginTop: 15,
              height: 25,
              width: 320,
              marginHorizontal: 10,
              textAlign: 'center',
            }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Brand;

const styles = StyleSheet.create({
  txtStyle: {
    textAlign: 'left',
    fontWeight: 'bold',
    margin: 10,
    fontSize: 20,
  },
  imgStyle: {
    height: 80,
    width: 80,
    marginLeft: 10,
    marginVertical: 10,
    resizeMode: 'contain',
    justifyContent: 'center',
  },

  poster: {
    width: 100,
    borderWidth: 1,
    borderColor: '#cccccc',
    alignItems: 'flex-start',
    marginLeft: 10,
    borderRadius: 10,
    marginTop: 15,
  },
});
