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
            >
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
                  fontSize: 19,
                  fontWeight: 'bold',
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
          Health Care Devices
        </Text>
      </View>
      <FlatList data={product} renderItem={pro} />
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    resizeMode: 'contain',
    width: 130,
    height: 110,
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

export default Product;
