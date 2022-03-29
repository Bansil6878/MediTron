import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Cart_details from '../Screen/Cart_details';

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

  return (
    <>
      <ScrollView>
        {data != null &&
          data.map((item, index) => {
            return (
              
              <View key={index} style={styles.container}>
                <View style={{marginTop: 20, marginLeft: 10}}>
                  <Image source={item.Images} style={styles.imgStyle} />
                </View>

                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    margin: 19,
                  }}>
                  <Text>Name: {item.ProductName}</Text>

                  <Text>Rating: {item.Ratings}</Text>

                  <Text>Packet: {item.Quantity}</Text>
                  <Text>₹: {item.Price}</Text>

                  <Cart_details
                    item={item}
                    onDelete={deletepost}
                    keyExtractor={item => item.id}
                    />
                </View>  
                  </View>        
          

               
            );
          })}
            <View style={{borderRadius:20,backgroundColor:'orange',width:330,marginHorizontal:15}}>
            <Text style={{color:"white",fontWeight:'bold',fontSize:18,marginLeft:20}}>To be paid</Text>
            <Text  style={{color:"white",fontWeight:'bold',fontSize:18,marginLeft:20}}>₹ {data.reduce((acc, item) => acc + item.Price, 0)}</Text>
            
            
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Payment', {
                  data: data,
                })
              }>
                
              <Text style={{marginLeft:190,marginTop:-40,color:"white",fontWeight:'bold',fontSize:18}}>Make Payment</Text>
              
      
            </TouchableOpacity>
          </View>
      </ScrollView>
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    width: '97%',
    marginHorizontal: 5,
    marginVertical: 15,
    flexDirection: 'row',
    height: 'auto',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },

  imgStyle: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  btnStyle: {
    // backgroundColor: '#99d6ff',
    width: 100,
    marginTop: 20,
    textAlign: 'center',
    borderRadius: 5,
    borderColor: '#99d6ff',
    borderWidth: 2,
  },
});
