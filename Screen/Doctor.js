import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const doctor = [
  {
    id: 1,
    name: 'Thomas',
    images: require('../assets/img_doctor/doctor.png'),
    department: 'General',
    location: 'Vastral,Ahmedabad',
  },
  {
    id: 2,
    name: 'Thomas',
    images: require('../assets/img_doctor/doctor.png'),
    department: 'General',
    location: 'Vastral,Ahmedabad',
  },
  {
    id: 3,
    name: 'Thomas',
    images: require('../assets/img_doctor/doctor.png'),
    department: 'General',
    location: 'Vastral,Ahmedabad',
  },
  {
    id: 4,
    name: 'Thomas',
    images: require('../assets/img_doctor/doctor.png'),
    department: 'General',
    location: 'Vastral,Ahmedabad',
  },
  {
    id: 5,
    name: 'Thomas',
    images: require('../assets/img_doctor/doctor.png'),
    department: 'General',
    location: 'Vastral,Ahmedabad',
  },
  {
    id: 6,
    name: 'Thomas',
    images: require('../assets/img_doctor/doctor.png'),
    department: 'General',
    location: 'Vastral,Ahmedabad',
  },
  {
    id: 7,
    name: 'Thomas',
    images: require('../assets/img_doctor/doctor.png'),
    department: 'General',
    location: 'Vastral,Ahmedabad',
  },
  {
    id: 8,
    name: 'Thomas',
    images: require('../assets/img_doctor/doctor.png'),
    department: 'General',
    location: 'Vastral,Ahmedabad',
  },
  {
    id: 9,
    name: 'Thomas',
    images: require('../assets/img_doctor/doctor.png'),
    department: 'General',
    location: 'Vastral,Ahmedabad',
  },
  {
    id: 10,
    name: 'Thomas',
    images: require('../assets/img_doctor/doctor.png'),
    department: 'General',
    location: 'Vastral,Ahmedabad',
  },
];

const Doctor = () => {
  const doc = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          width: '100%',
          marginVertical: 9,
          padding: 12,
          height: 126,
        }}>
        <TouchableOpacity>
          <Image source={item.images} style={styles.imgStyle} />
        </TouchableOpacity>

        <View style={{marginHorizontal: 10, justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 19,
              fontWeight: 'bold',
            }}>
            {item.name}
          </Text>
          <Text>Quantity: {item.department}</Text>
          <Text>Rating: {item.location}</Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#c3deb4',
              borderRadius: 4,
              width: 100,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: 'purple',
                padding: 6,
                fontWeight: 'bold',
              }}>
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View style={{marginTop: 4, flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 5,
            marginTop: 5,
          }}>
          Doctor
        </Text>
      </View>
      <FlatList data={doctor} renderItem={doc} />
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  imgStyle: {
    resizeMode: 'contain',
    width: 150,
    height: 100,
    marginLeft: -10,
  },
});
