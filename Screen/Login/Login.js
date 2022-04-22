import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const add = async () => {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(userdetails => {
        const user = userdetails.user;
        console.log(user.email);
        navigation.replace('Home');
      })
      .catch(e => alert('Invaild email or Password'));
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        navigation.replace('Contact');
      }
    });
    return unsubscribe;
  }, []);

  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/register/register_Back.png')}
        style={styles.image}
      />

      <ScrollView>
        <Image
          source={require('../../assets/images/register/register.png')}
          style={styles.imgStyle}
        />

        <View style={styles.poster}>
          <TextInput
            style={styles.txtInputStyles}
            placeholder="Enter Your Email"
            placeholderTextColor="White"
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <TextInput
            style={styles.txtInputStyles}
            placeholder="Enter Your Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />

          <TouchableOpacity onPress={add}>
            <Text style={styles.btnStyle}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 700,
  },
  imgStyle: {
    height: 400,
    width: 355,
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
});
