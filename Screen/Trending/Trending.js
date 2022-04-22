import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export function Trending({name, rupees, images, onPress, Quantity, star}) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          marginVertical: 9,
          padding: 12,
          marginHorizontal: 15,
          shadowColor: 'white',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 10,
          elevation: 5,

          marginBottom: 30,
        }}>
        <TouchableOpacity onPress={onPress}>
          <Image source={images} style={styles.imgStyle} />
        </TouchableOpacity>

        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            marginLeft: 35,
          }}>
          <Text
            style={{
              fontSize: 19,
              fontWeight: 'bold',
              width: 120,
            }}>
            {name}
          </Text>
          <Text style={styles.textStyle}>Quantity: {Quantity}</Text>
          <Text style={styles.textStyle}>Rating: {star}</Text>
          <Text style={styles.textStyle}>₹: {rupees}</Text>
          <TouchableOpacity>
            <Text style={styles.btnStyle}>See more!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  imgStyle: {
    resizeMode: 'contain',
    width: 150,
    height: 130,
    borderRadius: 10,
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
