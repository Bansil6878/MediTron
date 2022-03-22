import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {medicine} from '../assets/data/data';
import {useNavigation} from '@react-navigation/native';

const Medicine = () => {
  const navigation = useNavigation();

  const med = ({item}) => {
    return (
      <>
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

          <View style={{marginHorizontal: 40, justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: 'bold',
              }}>
              {item.name}
            </Text>
            <Text>Quantity: {item.Quantity}</Text>
            <Text>Rating: {item.star}</Text>
            <Text>₹: {item.rupees}</Text>
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
                }}>
                Add To Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
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
          Medicine
        </Text>
      </View>
      <FlatList data={medicine} renderItem={med} />
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    resizeMode: 'contain',
    width: 150,
    height: 100,
  },
});

export default Medicine;
