import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const product = [
  {
    id: 1,
    name: 'BP moniters',
    images: require('../assets/images/product/product.png'),
    MRP: 999,
  },
  {
    id: 2,
    name: 'BP moniters',
    images: require('../assets/images/product/product.png'),
    MRP: 999,
  },
  {
    id: 3,
    name: 'BP moniters',
    images: require('../assets/images/product/product.png'),
    MRP: 999,
  },
  {
    id: 4,
    name: 'BP moniters',
    images: require('../assets/images/product/product.png'),
    MRP: 999,
  },
  {
    id: 5,
    name: 'BP moniters',
    images: require('../assets/images/product/product.png'),
    MRP: 999,
  },
  {
    id: 6,
    name: 'BP moniters',
    images: require('../assets/images/product/product.png'),
    MRP: 999,
  },
  {
    id: 7,
    name: 'BP moniters',
    images: require('../assets/images/product/product.png'),
    MRP: 999,
  },
  {
    id: 8,
    name: 'BP moniters',
    images: require('../assets/images/product/product.png'),
    MRP: 999,
  },
  {
    id: 9,
    name: 'BP moniters',
    images: require('../assets/images/product/product.png'),
    MRP: 999,
  },
  {
    id: 10,
    name: 'BP moniters',
    images: require('../assets/images/product/product.png'),
    MRP: 999,
  },
];

const Product = () => {

  const navigation = useNavigation();
  
  const pro = ({item}) => {
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
        <TouchableOpacity>
          <Image source={item.images} style={styles.imgStyle} />
        </TouchableOpacity>

        <View
          style={{
            marginHorizontal: 10,
            justifyContent: 'center',
            marginLeft: 30,
          }}>
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
            }}>
            <Text
              style={{
                color: 'purple',
                padding: 6,
                fontWeight: 'bold',
                width: 50,
                textAlign: 'center',
              }}>
              Buy
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
          Product
        </Text>
      </View>
      <FlatList data={product} renderItem={pro} />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  imgStyle: {
    resizeMode: 'contain',
    width: 150,
    height: 100,
    marginLeft: -10,
  },
});
