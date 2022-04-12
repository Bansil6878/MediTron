import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Cart_details from '../Screen/Cart_details';
import Empty_cart from './Empty_cart';

const Cart = () => {
  const [data, setData] = useState(null);
  const navigation = useNavigation();

  const deletepost = ID => {
    console.log('Data ID IS: ' + ID);

    firestore()
      .collection('AddToCart')
      .doc(ID)
      .delete()
      .then(() => alert('Item Remove'))
      .catch(console.log('Error'));
  };

  setTimeout(() => {
    get();
  }, 1000);

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    var list = [];

    const snapShot = await firestore().collection('AddToCart').get();

    snapShot.forEach(doc => {
      const {Description, Price, ProductName, Quantity, Ratings, Images} =
        doc.data();
      list.push({
        id: doc.id,
        Description: Description,
        Price: Price,
        ProductName: ProductName,
        Ratings: Ratings,
        Quantity: Quantity,
        Images: Images,
      });
    });
    setData(list);
  };

  const add = async () => {
    await firestore()
      .collection('AllProducts')
      .doc()
      .set({
        data: data,
      })
      .then(
        alert('Data Added'),
        // console.log(data),
        navigation.navigate('Shipping'),
      );
  };

  return (
    <>
      <View style={styles.container}>
        {data == null ? (
          <Empty_cart />
        ) : (
          <>
            <ScrollView>
              <FlatList
                data={data}
                renderItem={({item}) => (
                  <Cart_details item={item} onDelete={deletepost} />
                )}
                keyExtractor={item => item.id}
              />
            </ScrollView>

            <View
              style={{
                borderRadius: 20,
                backgroundColor: 'orange',
                width: 330,
                marginHorizontal: 15,
                marginBottom: 10,
              }}>
              <Text
                style={{
                  marginLeft: 20,
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: 18,
                }}>
                To be paid{' '}
              </Text>
              <Text
                style={{
                  marginLeft: 20,
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: 18,
                }}>
                
                ₹ {data.reduce((acc, item) => acc + item.Price, 0)}
              </Text>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Payment', {
                    data: data,
                  })
                }>
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
        )}
      </View>
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
  },

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
