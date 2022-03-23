import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import Divider from '../Components/Divider';


const Contact = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [contact, setContact] = useState('');

  const add = async () => {
    await firestore()
      .collection('Users')
      .doc('Contact_details')
      .set({
        Name: name,
        Address: address,
        Pincode: pincode,
        Contact: contact,
      })
      .then(
        alert('Data Added'),
        console.log('User Details Added'),
        navigation.navigate('Home'),
      );
  };

  return (
    <View>
      <ImageBackground
        source={require('../assets/images/profile/background.png')}
        style={styles.imgStyle}>

      <View style={{marginVertical:200,marginHorizontal:100}}>

        <TextInput
          placeholder="Enter Your Name"
          value={name}
          onChangeText={text => setName(text)}
        />
      
         <Divider/>
  

        <TextInput
          placeholder="Enter Your Address"
          value={address}
          onChangeText={text => setAddress(text)}
        /><Divider style={styles.divider}/>

        <TextInput
          placeholder="Enter Your Pincode"
          value={pincode}
          onChangeText={text => setPincode(text)}
        /><Divider style={styles.divider}/>

        <TextInput
          placeholder="Enter Your Contact"
          value={contact}
          onChangeText={text => setContact(text)}
        /><Divider style={styles.divider}/>

        <TouchableOpacity>
          <Text onPress={add} style={styles.btnStyle}>Submit</Text>
        </TouchableOpacity>
      
        </View>
       
      </ImageBackground>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  imgStyle: {
    height: 700,
    width: 360,
  },
  btnStyle:{
    borderWidth: 0.8,
    borderRadius: 5,
    borderColor: '#84cfc5',
    marginTop: 10,
    marginHorizontal: 10,
    width: 80,
    textAlign: 'center',
    marginTop: 32,
    marginLeft: 20,
  }
  
});
