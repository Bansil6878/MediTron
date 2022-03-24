import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const doctor = [
  {
    id: 1,
    name: 'Thomas',
    images: require('../assets/images/doctor/doctor.png'),
    department: 'General',
    Reg_No:5282,
    Rating:4.1,
    years:'17 years of experience',
    location: 'Vastral,Ahmedabad',
  },
  {
    id: 2,
    name: 'Thomas',
    images: require('../assets/images/doctor/doctor.png'),
    department: 'General',
    location: 'Vastral,Ahmedabad',
  },
  {
    id: 3,
    name: 'Thomas',
    images: require('../assets/images/doctor/doctor.png'),
    department: 'General',
    location: 'Vastral,Ahmedabad',
  },
  {
    id: 4,
    name: 'Thomas',
    images: require('../assets/images/doctor/doctor.png'),
    department: 'General',
    location: 'Vastral,Ahmedabad',
  },
  {
    id: 5,
    name: 'Thomas',
    images: require('../assets/images/doctor/doctor.png'),
    department: 'General',
    location: 'Vastral,Ahmedabad',
  },
  {
    id: 6,
    name: 'Thomas',
    images: require('../assets/images/doctor/doctor.png'),
    department: 'General',
    location: 'Vastral,Ahmedabad',
  },
  {
    id: 7,
    name: 'Thomas',
    images: require('../assets/images/doctor/doctor.png'),
    department: 'General',
    location: 'Vastral,Ahmedabad',
  },
  {
    id: 8,
    name: 'Thomas',
    images: require('../assets/images/doctor/doctor.png'),
    department: 'General',
    location: 'Vastral,Ahmedabad',
  },
  {
    id: 9,
    name: 'Thomas',
    images: require('../assets/images/doctor/doctor.png'),
    department: 'General',
    location: 'Vastral,Ahmedabad',
  },
  {
    id: 10,
    name: 'Thomas',
    images: require('../assets/images/doctor/doctor.png'),
    department: 'General',
    location: 'Vastral,Ahmedabad',
  },
];

const Doctor = () => {

const navigation = useNavigation();

  const doc = ({item,index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          width: '100%',
          marginVertical: 9,
          padding: 12,
          height: 126,
        }}  key={index}>
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
            }} onPress={()=>navigation.navigate('Doctor_details',{item:item})}>
            <Text
              style={{
                color: 'purple',
                padding: 6,
                fontWeight: 'bold',
              }}>
              Book Appointment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View style={{marginTop: 4, flexDirection: 'row'}}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="gray"
          style={{marginTop: 7}}
          onPress={() => navigation.navigate('Home')}
        />
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
export {doctor};

const styles = StyleSheet.create({
  imgStyle: {
    resizeMode: 'contain',
    width: 150,
    height: 100,
    marginLeft: -10,
  },
});
