import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState, useContext} from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {getBrand_data} from '../../assets/brand_data/brand_data';
import {CartContext} from '../../CartContext';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';

export function Brandpro_details({route}) {
  const navigation = useNavigation();
  const {productId} = route.params;
  const [product, setProduct] = useState({});

  const {addItemToCart1} = useContext(CartContext);

  useEffect(() => {
    setProduct(getBrand_data(productId));
  });

  function onAddToCart() {
    addItemToCart1(product.id);
    navigation.navigate('MyCart');
  }
  {
    console.log(product);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <AntDesign
          name="arrowleft"
          size={24}
          color="gray"
          style={{marginTop: 7}}
          onPress={() => navigation.navigate('Medicine')}
        />
        <View style={{justifyContent: 'center', marginLeft: 6}}>
          <View style={styles.poster}>
            <Image source={product.images} style={styles.imgStyle} />
          </View>

          <Text style={styles.textStyle}>{product.name}</Text>
          <Text style={styles.txtStyle}>{product.Des}</Text>

          <Text style={{fontWeight: 'bold', marginTop: 20}}>
            <Octicons name="graph" size={24} color="blue" /> 500+ people bought
            this recently
          </Text>
          <Text style={{marginTop: 30}}>Quantity: {product.Quantity}</Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={{marginTop: 20}}>
              <Entypo name="star" size={24} color="gold" />
              {product.star} (134 ratings)
            </Text>

            <Text style={{marginTop: 30, marginLeft: 120}}>
              ₹: {product.rupees}
            </Text>
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              width: 340,
              marginTop: 20,
              height: 40,
              borderRadius: 5,
              marginHorizontal: 4,
            }}
            // onPress={add}
          >
            <Text
              style={{textAlign: 'center', marginVertical: 6}}
              onPress={onAddToCart}>
              AddToCart
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
  imgStyle: {
    resizeMode: 'contain',
    height: 300,
    width: 300,
    marginHorizontal: 10,
  },
  textStyle: {
    marginTop: 20,

    fontSize: 25,
    fontWeight: 'bold',
  },
  txtStyle: {
    marginTop: 30,
    fontSize: 16,
  },
  poster: {
    width: 330,
    borderWidth: 1,
    borderColor: '#cccccc',
    marginHorizontal: 10,
    // marginLeft: 10,
    borderRadius: 10,
    // marginTop: 15,
  },
});
