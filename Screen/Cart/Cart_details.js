import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const CartData = ({item, index, onDelete}) => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(item.ProductMrp);

  return (
    <>
      <View key={index}>
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
          }}>
          <Image source={item.Images} style={styles.imgStyle} />
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 19, width: 170}}>
              {item.ProductName}
            </Text>
            <Text>Rating: {item.Ratings}</Text>
            <Text>Quantity: {item.Quantity}</Text>
            <Text style={{justifyContent: 'flex-start', fontWeight: 'bold'}}>
              ₹ {item.Price}
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: '#f2f2f2',
                height: 30,
                width: 110,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                marginTop: 10,
              }}
              onPress={() => onDelete(item.id)}>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: 'orange'}}>
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default CartData;

const styles = StyleSheet.create({
  count_btn: {
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 9,
    color: 'black',
  },
  imgStyle: {
    resizeMode: 'contain',
    width: 150,
    height: 130,
  },
});
