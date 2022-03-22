import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';


const Register = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const add = async () => {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
        alert('Data Added'),
        console.log('User Login '),
        navigation.replace('Login'),
      )
      .catch(e => alert(e));
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged ( user => {
      if (user) {
        navigation.replace('Home')
      }
    })
    return unsubscribe;
  },[]);



  return (
    <View>
      <ImageBackground
        source={require('../assets/images/register/register_Back.png')}
        style={styles.image}
      />

      <Image
        source={require('../assets/images/register/register.png')}
        style={styles.imgStyle}
      />

      <View style={styles.poster}>
        <TextInput
          style={styles.txtInputStyles}
          placeholder="Enter Your Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.txtInputStyles}
          placeholder="Enter Your Password"
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <TouchableOpacity>
          <Text onPress={add} style={styles.btnStyle}>
            Submit
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{marginTop: 32, marginLeft: 110, fontStyle: 'italic',color:'green'}}>
            Already user?
          </Text>
          <Text style={{marginTop: 32, color: 'blue', fontStyle: 'italic',marginLeft:8}}>
             Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({

  txtInputStyles: {
    borderWidth: 0.8,
    borderColor: '#84cfc5',
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
    width: 310,
    padding: 9,
    color: 'white',
  },
  poster: {
    width: 340,
    borderWidth: 2,
    borderColor: '#84cfc5',
    alignItems: 'flex-start',
    marginHorizontal: 8,
    borderRadius: 10,
    marginTop: -70,
    height: 250,
  },
  btnStyle: {
    borderWidth: 0.8,
    borderRadius: 5,
    borderColor: '#84cfc5',
    marginTop: 10,
    marginHorizontal: 10,
    width: 80,
    textAlign: 'center',
    marginTop: 32,
    marginLeft: 125,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 700,
  },
  imgStyle: {
    height: 400,
    width: 355,
  },
});
