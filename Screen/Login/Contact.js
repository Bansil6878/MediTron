import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState,useContext} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import bg from '../../assets/images/profile/meditron.png';
import {CartContext} from '../../CartContext';



const Contact = () => {
  const navigation = useNavigation();
  // const {user} = useContext(CartContext); 
  
  const [image, setImage] = useState('https://placeimg.com/140/140/any');
  
  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };

  const choosePhoto = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 600,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [contact, setContact] = useState('');

  const number = Math.floor(Math.random() * 1000);

  const add = async () => {
    await firestore()
      .collection('Users')
      .doc("contet details")
      .set({
        MediID: number,
        Name: name,
        Address: address,
        Pincode: pincode,
        Contact: contact,
        Picture: image,
      })
      .then(
        alert('your details are added'),
        console.log('User Added'),
        navigation.navigate('Home'),
      );
  };

  return (
    <View>
      <ScrollView>
        <ImageBackground
          source={require('../../assets/images/profile/background.png')}
          style={styles.imgStyle}>
          <View style={{marginLeft: 14, marginTop: 100}}>
            <Image style={styles.image} source={{uri: image}} />
            <TouchableOpacity>
              <Text style={styles.btnStyle} onPress={takePhoto}>
                Take Photo
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.btnStyle} onPress={choosePhoto}>
                choose Photo
              </Text>
            </TouchableOpacity>
            <TextInput
              placeholder="Enter Your Name"
              value={name}
              style={styles.textStyle}
              onChangeText={text => setName(text)}
            />

            <TextInput
              placeholder="Enter Your Address"
              value={address}
              style={styles.textStyle}
              onChangeText={text => setAddress(text)}
            />

            <TextInput
              placeholder="Enter Your Pincode"
              value={pincode}
              style={styles.textStyle}
              onChangeText={text => setPincode(text)}
            />

            <TextInput
              placeholder="Enter Your Contact"
              value={contact}
              style={styles.textStyle}
              onChangeText={text => setContact(text)}
            />

            <TouchableOpacity>
              <Text onPress={add} style={styles.btnStyle}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  imgStyle: {
    height: 700,
    width: 360,
  },
  btnStyle: {
    borderWidth: 0.8,
    borderRadius: 5,
    borderColor: '#84cfc5',
    width: 100,
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 120,
  },

  textStyle: {
    borderWidth: 0.8,
    borderColor: '#84cfc5',
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
    width: 310,
    padding: 9,
    color: 'black',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 15,
    marginLeft: 120,
    borderRadius: 7,
  },
});
