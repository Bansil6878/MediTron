
import React, {useEffect, useState, useContext,ScrollView } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {CartContext} from '../../CartContext';


export function Labtest_book({navigation}) {

  


  const {items,removeItemToCart, getTotalPrice} = useContext(CartContext);





  function Remove(item){
    removeItemToCart(item.id)
    }
   
  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });

    const add = async () => {
      await firestore()
        .collection('AddToCart')
        .doc()
        .set({
         items,
        })
        .then(
          alert('Data Added'),
          // console.log(data),
          navigation.navigate('Payment',{
            total:total,
          }),
        );
    };
    
    


    return (
   

      <View
        style={{
          borderRadius: 20,
          backgroundColor: 'orange',
          width: 340,
          // position:'absolute',
          // bottom:0,
          marginTop:10,
                
         
          
          
        }}>
        <Text
          style={{
            marginLeft: 20,
            fontWeight: 'bold',
            color: 'white',
            fontSize: 18,
          }}>
          To be paid
        </Text>
        <Text
          style={{
            marginLeft: 20,
            fontWeight: 'bold',
            color: 'white',
            fontSize: 18,
          }}>
          ₹: {total.toFixed(2)}
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              marginLeft: 190,
              marginTop: -37,
              fontWeight: 'bold',
              fontSize: 18,
              color: 'white',
            }} onPress={add} >
            MakePayment
                      </Text>
        </TouchableOpacity>
      </View>
    
    );
  }

  function renderItem({item}) {
    return (
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
        <Image source={item.product.images} style={styles.imgStyle}/>
        <View style={{marginLeft:30}}>
          <Text style={{fontWeight: 'bold', fontSize: 19, width: 110,marginTop:10,marginLeft:10}}>
            {item.product.name}
          </Text>
          {/* {console.log(item.product.star)} */}
          <Text style={{marginLeft:10}}>Rating: {item.product.star}</Text>
          <Text style={{marginLeft:10}}>Quantity: {item.Quantity}</Text>
          <Text style={{justifyContent: 'flex-start', fontWeight: 'bold',marginLeft:10}}>
            ₹ {item.totalPrice}
          </Text>

      
          <TouchableOpacity
            style={{
              backgroundColor: '#f2f2f2',
              height: 30,
              justifyContent: 'center',
              width: 110,
              alignItems: 'center',
              borderRadius: 5,
              marginTop: 10,
            }}
            onPress={()=>Remove(item)}
            >
            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'orange'}} >
              Remove
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  
   );
  }

  return (
   
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.product.id.toString()}
      ListFooterComponent={Totals}
      />

  );
}
const styles = StyleSheet.create({
 
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  imgStyle: {
    width:130,
    height: 130,
    resizeMode:'contain'
  },
});
