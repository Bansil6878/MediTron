import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const lab = [
  {
    id: 1,
    images: require('../assets/images/lab/lab1.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
  {
    id: 2,
    images: require('../assets/images/lab/lab.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
  {
    id: 3,
    images: require('../assets/images/lab/lab3.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
  {
    id: 4,
    images: require('../assets/images/lab/lab1.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
  {
    id: 5,
    images: require('../assets/images/lab/lab3.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
  {
    id: 6,
    images: require('../assets/images/lab/lab.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
  {
    id: 7,
    images: require('../assets/images/lab/lab1.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
  {
    id: 8,
    images: require('../assets/images/lab/lab.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
  {
    id: 9,
    images: require('../assets/images/lab/lab3.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
  {
    id: 10,
    images: require('../assets/images/lab/lab.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
];

const Lab = () => {

const navigation = useNavigation();

  const labo = ({item}) => {
    return (
      <>
        <TouchableOpacity  onPress={()=>navigation.navigate('Med_details',{item:item})}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              marginVertical: 9,
              padding: 12,
              marginHorizontal: 15,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              padding: 10,
            }}
            key={item.id}>
            <TouchableOpacity>
              <Image source={item.images} style={styles.imgStyle} />
            </TouchableOpacity>

            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                marginLeft: 35,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  width:150
                }}>
                {item.name}
              </Text>
           
              <Text style={styles.textStyle}>₹: {item.MRP}</Text>
              <TouchableOpacity>
                <Text style={styles.btnStyle}>See more!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
};



return (
  <View style={{marginBottom: 60}}>
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
        Lab Test
      </Text>
    </View>
    <FlatList data={lab} renderItem={labo} />
  </View>
);
};

export default Lab;

const styles = StyleSheet.create({
  imgStyle: {
    resizeMode: 'contain',
    width: 130,
    height: 120,
  },
  btnStyle: {
    padding: 7,
    width: 90,
    height: 30,
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: '#c3deb4',
    borderRadius: 4,
    color: 'purple',
  },
});