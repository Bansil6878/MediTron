import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';

const Image = () => {



const takePhoto = ()=>{
    ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
      
      });
}

const choosePhoto = ()=>{
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
       
      });
}


  return (
    <View>



      <TouchableOpacity>
        <Text style={styles.btn} onPress={takePhoto}>Take Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.btn} onPress={choosePhoto}>Choose Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Image;

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
  img:{
    width: 300,
    height: 400,
    margin: 100,

  }
});
