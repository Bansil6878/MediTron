import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState,useContext} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {CartContext} from '../../CartContext';

const Contact_details = () => {
  const navigation = useNavigation();

  const [data, setData] = useState(null);

//   const {user} = useContext(CartContext); 
// console.log(user.uid);

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    await firestore()
      .collection('Users')
      .doc("contet details")
      .get()
      .then(snapShot => {
        if (snapShot.exists) {
          setData(snapShot.data());
        }
      });
  };

  return (
    <View>
      {data != null && (
        <>
          <ImageBackground
            source={require('../../assets/images/profile/background.png')}
            style={styles.imgStyle}>
            <View style={{marginLeft: 10, marginTop: 100}}>
              <Image
                style={styles.image}
                source={{uri: data.Picture}}
              />
              <Text style={styles.textStyle}>ID: Medi{data.MediID}</Text>
              <Text style={styles.textStyle}>Name: {data.Name}</Text>
              <Text style={styles.textStyle}>Address: {data.Address}</Text>
              <Text style={styles.textStyle}>Pincode :{data.Pincode}</Text>
              <Text style={styles.textStyle}>Contact: {data.Contact}</Text>
              <TouchableOpacity>
                <Text
                  style={styles.btnStyle}
                  onPress={() => navigation.navigate('Contact')}>
                  Edit details
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </>
      )}
    </View>
  );
};

export default Contact_details;

const styles = StyleSheet.create({
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
  poster: {
    width: 340,
    borderWidth: 2,
    borderColor: '#84cfc5',
    alignItems: 'flex-start',
    marginHorizontal: 8,
    marginTop: '60%',
    height: 317,
  },
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
    marginTop: 30,
    marginLeft: 110,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 15,
    marginLeft: 120,
    borderRadius: 7,
  },
});
