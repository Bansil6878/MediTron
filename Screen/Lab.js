import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const lab = [
  {
    id: 1,
    images: require('../assets/img_lab/lab1.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
  {
    id: 2,
    images: require('../assets/img_lab/lab.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
  {
    id: 3,
    images: require('../assets/img_lab/lab3.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
  {
    id: 4,
    images: require('../assets/img_lab/lab1.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
  {
    id: 5,
    images: require('../assets/img_lab/lab3.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
  {
    id: 6,
    images: require('../assets/img_lab/lab.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
  {
    id: 7,
    images: require('../assets/img_lab/lab1.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
  {
    id: 8,
    images: require('../assets/img_lab/lab.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
  {
    id: 9,
    images: require('../assets/img_lab/lab3.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
  {
    id: 10,
    images: require('../assets/img_lab/lab.png'),
    name: 'Complete Blood Count',
    MRP: 299,
  },
];

const Lab = () => {
  const labo = ({item}) => {
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
        <TouchableOpacity onPress={() => navigation.navigate('Med_details')}>
          <Image source={item.images} style={styles.imgStyle} />
        </TouchableOpacity>

        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 19,
              fontWeight: 'bold',
            }}>
            {item.name}
          </Text>
          <Text>₹: {item.MRP}</Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#c3deb4',
              borderRadius: 4,
            }}>
            <Text
              style={{
                color: 'purple',
                padding: 6,
                fontWeight: 'bold',
                width: 100,
              }}>
              Book Test
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
    width: 150,
    height: 100,
  },
});
