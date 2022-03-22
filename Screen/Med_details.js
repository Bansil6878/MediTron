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

const Med_details = () => {
  const med = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 6,
          backgroundColor: '#fff',
          paddingHorizontal: 40,
        }}>
        <TouchableOpacity>
          <Image source={item.images} style={styles.imgStyle} />
        </TouchableOpacity>

        <View style={styles.txtStyle}>
          <Text>{item.name}</Text>
          <Text>Quantity: {item.Quantity}</Text>
          <Text>Rating: {item.star}</Text>
          <Text>₹: {item.rupees}</Text>

          <Text>{item.des}</Text>

          <TouchableOpacity>
            <Text
              style={{
                backgroundColor: '#f2f2f2',
                marginTop: 8,
                marginRight: 4.5,
                marginBottom: 10,
              }}>
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <FlatList data={medicine} renderItem={med} />
    </View>
  );
};

export default Med_details;

const styles = StyleSheet.create({});
