import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import AntDesign from 'react-native-vector-icons/AntDesign';



const Med_details = ({route}) => {
  const navigation = useNavigation();
  const {item} = route.params;

  const ProductName = item.name;
  const Ratings=item.star;
  const Description=item.Des;
  const Images=item.images;


  const [Count, updateCount] = useState(1);
  const [price ,setPrice] = useState(item.rupees);

  const add = async() => {
   
    await firestore()
    .collection('AddToCart')
    .doc()
    .set({
      ProductName:ProductName,
      Quantity:Count,
      Ratings:Ratings,
      Description:Description,
      Price:price,
      Images:Images,
      


    })
     .then(
      alert('item added'),
      console.log('item added'),
      navigation.navigate('Cart'),
    )
    .catch((e)=>alert(e))
  }



  return (
    
    <ScrollView>
         <AntDesign
          name="arrowleft"
          size={24}
          color="gray"
          style={{marginTop: 7}}
          onPress={() => navigation.navigate('Medicine')}
        />
      <View style={{justifyContent: 'center', marginLeft: 6}}>
        <Image style={styles.imgStyle} source={item.images} />

        <Text style={styles.textStyle}>{item.name}</Text>
        <Text style={styles.txtStyle}>{item.Des}</Text>

        <Text style={{fontWeight: 'bold', marginTop: 20}}>
          <Octicons name="graph" size={24} color="blue" /> 500+ people bought
          this recently
        </Text>
        <Text style={{marginTop: 30}}>Quantity: {item.Quantity}</Text>

        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop: 20}}>
            <Entypo name="star" size={24} color="gold" />
            {item.star} (134 ratings)
          </Text>

          <View
            style={{
              flexDirection: 'row',
              width: 110,
              justifyContent: 'space-around',
              height: 35,
              marginLeft: 80,
              marginTop: 25,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  borderWidth: 0.5,
                  width: 25,
                  fontSize: 20,
                  textAlign: 'center',
                  borderRadius: 4,
                }}
                onPress={() => {
                  if (Count < 10) {
                    updateCount(Count + 1);
                    setPrice(price + item.rupees)
                  } else {
          
                      alert('no more'),
                      updateCount(1)
                  }
                }}>
                +
              </Text>
            </TouchableOpacity>

            <Text>{Count}</Text>

            <TouchableOpacity>
              <Text
                style={{
                  borderWidth: 0.5,
                  width: 25,
                  fontSize: 20,
                  textAlign: 'center',
                  borderRadius: 4,
                }}
                onPress={() => {
                  if (Count > 1) {
                    updateCount(Count - 1);
                    setPrice(price - item.rupees)

                  } else {
                      alert('1 require'),
                      updateCount(1)
                   
                  }
                }}>
                -
              </Text>
            </TouchableOpacity>
          </View>
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
          onPress={add}
          >
          <Text style={{textAlign: 'center', marginVertical: 6}} >
            ₹: {price}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Med_details;

const styles = StyleSheet.create({
  imgStyle: {
    // resizeMode: 'contain',
    width: 340,
    height: 300,
    marginTop: 20,
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
});
