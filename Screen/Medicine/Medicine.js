import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export function Medicine({name, rupees, images, onPress,Quantity,star,}) {
  return (

    <View>
   


    <View   style={{
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
    
    }}>
      <TouchableOpacity  onPress={onPress}>
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
                  width:120,
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
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  imgStyle: {
    resizeMode: 'contain',
    width: 150,
    height: 130,
  },
  searchbar:{
    marginTop:10,
    width:330,
    marginHorizontal:15
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
