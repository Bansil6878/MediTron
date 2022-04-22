import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

const Images = () => {
  const [image, setImage] = useState('https://placeimg.com/140/140/any');

  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  const choosePhoto = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 600,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  return (
    <View>
      <View style={{marginTop: 50}}>
        <TouchableOpacity>
          <Text style={styles.btn} onPress={takePhoto}>
            Take Photo
          </Text>
        </TouchableOpacity>
        <Image style={styles.image} source={{uri: image}} />

        <TouchableOpacity>
          <Text style={styles.btn} onPress={choosePhoto}>
            Choose Photo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  btn: {
    padding: 7,
    width: 90,
    height: 30,
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#c3deb4',
    borderRadius: 4,
    color: 'purple',
    margin: 100,
  },
  img: {
    width: 300,
    height: 400,
    margin: 100,
  },
  image: {
    height: 100,
    width: 100,
  },
});
