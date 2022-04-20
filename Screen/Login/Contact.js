import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView 
} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import Divider from '../../Components/Divider';


const Contact = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [contact, setContact] = useState('');

  const number = Math.floor(Math.random() * 1000);

  const add = async () => {
    await firestore()
      .collection('Users')
      .doc('Contact_details')
      .set({
        MediID: number,
        Name: name,
        Address: address,
        Pincode: pincode,
        Contact: contact,
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
        <View style={styles.poster}>
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
    marginTop:12,
    marginLeft:110
  },
  poster: {
    width: 340,
    borderWidth: 2,
    borderColor: '#84cfc5',
    alignItems: 'flex-start',
    marginHorizontal: 8,
    marginTop: '60%',
    height: 317,
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
});
