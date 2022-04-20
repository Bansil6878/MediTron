import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  sScrollView,
  TextInput,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Empty_cart from './Empty_cart';
import {CartContext} from '../../CartContext';

export function MyCart({navigation}) {
  const {
    items,
    getItemsCount,
    removeItemToCart,
    getTotalPrice,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = useContext(CartContext);

  function increase(item) {
    increaseItemQuantity(item.id);
  }

  function decrease(item) {
    decreaseItemQuantity(item.id);
  }

  function Remove(item) {
    removeItemToCart(item.id);
  }

  const [code, setCode] = useState('');

  const [value, setValue] = useState(null);

  const [price, setPrice] = useState(null);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });

    useEffect(() => {
      setValue(100);
    }, []);

    const rupees = total.toFixed(2) - value;

    useEffect(() => {
      setPrice(rupees);
    }, []);

    {
      console.log(rupees);
    }
    {
      console.log(price, 'neww');
    }

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
          navigation.navigate('Payment', {
            total: total,
          }),
        );
    };

    return (
      <>
        <View>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 20,
              width: 360,
              flexDirection: 'row',
              height: 50,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 10}}>
              Apply Code
            </Text>
            <TextInput
              value={code}
              onChangeText={text => setCode(text)}
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                padding: 2,
                borderWidth: 0.5,
                borderColor: 'gray',
                width: 100,
                height: 30,
              }}
            />
          </View>
          <View
            style={{
              borderRadius: 20,
              backgroundColor: 'orange',
              width: 340,
              // position:'absolute',
              // bottom:0,
              marginTop: 10,
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
              ₹: {code == 100 ? rupees : total.toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity>
            <Text
              style={{
                marginLeft: 190,
                marginTop: -37,
                fontWeight: 'bold',
                fontSize: 18,
                color: 'white',
              }}
              onPress={add}>
              MakePayment
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  function renderItem({item}) {
    return (
      <View>
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
          <Image source={item.product.images} style={styles.imgStyle} />
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 19,
                width: 170,
                marginTop: 10,
                marginLeft: 10,
              }}>
              {item.product.name}
            </Text>
            {/* {console.log(item.product.star)} */}
            <Text style={{marginLeft: 10}}>Rating: {item.product.star}</Text>
            <Text style={{marginLeft: 10}}>Quantity: {item.Quantity}</Text>
            <Text
              style={{
                justifyContent: 'flex-start',
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              ₹ {item.totalPrice}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'space-between',
                width: '20%',
                marginLeft: 10,
              }}>
              <TouchableOpacity onPress={() => decrease(item)}>
                <Text
                  style={{
                    borderWidth: 0.5,
                    borderColor: 'orange',
                    borderRadius: 5,
                    width: 20,
                    textAlign: 'center',
                  }}>
                  -
                </Text>
              </TouchableOpacity>
              <Text style={{marginLeft: 10, color: 'purple'}}>
                {item.Quantity}
              </Text>
              <TouchableOpacity onPress={() => increase(item)}>
                <Text
                  style={{
                    borderWidth: 0.5,
                    borderColor: 'orange',
                    borderRadius: 5,
                    width: 20,
                    textAlign: 'center',
                    marginLeft: 10,
                  }}>
                  +
                </Text>
              </TouchableOpacity>
            </View>

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
              onPress={() => Remove(item)}>
              <Text style={{fontSize: 14, fontWeight: 'bold', color: 'orange'}}>
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View>
      {items === null ? (
        <Empty_cart />
      ) : (
        <FlatList
          style={styles.itemsList}
          contentContainerStyle={styles.itemsListContainer}
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.product.id.toString()}
          ListFooterComponent={Totals}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  cartLine: {
    flexDirection: 'row',
  },
  cartLineTotal: {
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
  },
  lineTotal: {
    fontWeight: 'bold',
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: '#333333',
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#333333',
    textAlign: 'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  imgStyle: {
    width: 150,
    height: 150,
  },
});
