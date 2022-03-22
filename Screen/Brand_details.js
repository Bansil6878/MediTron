import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Brand_details = () => {
  return (
    <View
      style={{backgroundColor: '#ffffff', marginHorizontal: 10, height: 650}}>
      <Text style={styles.txtStyle}>Featured brand</Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <TouchableOpacity>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img_brand/bournvita.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img_brand/cadila.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img_brand/himalaya.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img_brand/mamaearth.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img_brand/dabur.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img_brand/horlicks.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img_brand/vaseline.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img_brand/cipla.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img_brand/cetaphil.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img_brand/zandu.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img_brand/reddy.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img_brand/himalaya.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img_brand/zydus.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img_brand/nivea.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img_brand/complan.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Brand_details;

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
