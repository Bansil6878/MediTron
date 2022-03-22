import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            marginTop: 10,
          }}>
          My Cart
        </Text>
      </View>

      <View style={{marginLeft: -10}}>
        <Image
          source={require('../assets/images/cart/cart1.png')}
          style={styles.imgStyle}
        />
      </View>

      <View style={{alignItems: 'center', marginTop: 30}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Your cart is empty!
        </Text>
        <Text style={{marginTop: 20, fontSize: 15}}>Add items to it now</Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnStyle}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  imgStyle: {
    height: 320,
    width: 340,
    marginLeft: 20,
    marginTop: 30,
  },
  btnStyle: {
    backgroundColor: '#99d6ff',
    width: 160,
    marginTop: 40,
    marginHorizontal: 100,
  },
});
