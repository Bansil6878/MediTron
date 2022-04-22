import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const History = () => {
  const [data, setdata] = useState(null);

  useEffect(() => {
    GetDetails();
  }, []);

  const GetDetails = async () => {
    const list = [];

    var snapshot = await firestore().collection('AddToCart').get();

    snapshot.forEach(doc => {
      // console.log(doc.data().items.length)
      for (var i = 0; i < doc.data().items.length; i++) {
        list.push(doc.data().items[i]);
      }
    });
    setdata(list);
    console.log(list);
  };

  const showdata = ({item, index}) => {
    const product = item.product;
    {
      console.log(product);
    }
    return (
      <>
        <View key={index} style={styles.container}>
          <Image source={product.images} style={styles.img} />

          <View
            style={{flexDirection: 'column', marginLeft: 30, marginTop: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', width: 110}}>
              {product.name}
            </Text>
            <Text>Quantity: {item.Quantity}</Text>
            <Text>star: {product.star}</Text>
            <Text style={{fontWeight: 'bold'}}>Price: ₹ {product.rupees}</Text>
            <Text style={{fontWeight: 'bold', marginTop: 5}}>{item.date}</Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={showdata}
        keyExtractor={index => index.toString()}
      />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
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
    padding: 1,
  },

  img: {
    resizeMode: 'contain',
    width: 130,
    height: 130,
  },
});
