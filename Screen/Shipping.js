import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

const Shipping = () => {
  // const navigation = useNavigation();

  const [data, setData] = useState(null);

  const [newData, setNewData] = useState();

  const [total1, setTotal1] = useState();
  const [total2, setTotal2] = useState();
  const [total3, setTotal3] = useState();
  const [total4, setTotal4] = useState();

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    // var list = [];
    {
      console.log(data);
    }

    const snapShot = await firestore()
      .collection('AllProducts')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const data = doc.data();
          console.log(doc.id, data);
          setData(doc.id);
          setNewData(data);
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
  };

  function myStatus1() {
    const d = new Date();
    setTotal1(d.toLocaleDateString());
  }
  setInterval(myStatus1, 3000);

  function myStatus2() {
    const d = new Date();
    setTotal2(d.toLocaleDateString());
  }
  setInterval(myStatus2, 6000);

  function myStatus3() {
    const d = new Date();
    setTotal3(d.toLocaleDateString());
  }
  setInterval(myStatus3, 9000);

  function myStatus4() {
    const d = new Date();
    setTotal4(d.toLocaleDateString());
  }
  setInterval(myStatus4, 12000);

  return (
    <>
      <View>
        <Text style={{marginHorizontal: 90, marginTop: 10,fontSize:20}}>
          DELIVERY STATUS
        </Text>

        <View style={{marginTop: 10,backgroundColor: '#e6e6e6'}}>
          <Text style={{marginLeft:10,width:330,fontSize:16}}>Your Order {data} has been successfully Recevied</Text>
        </View>

        <View style={styles.Container}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/number/1.png')}
              style={styles.imgstyle}
            />
            <Text style={styles.textStyle}> Order Confirmed : {total1}</Text>
          </View>
        </View>

        <View style={styles.Container}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/number/2.png')}
              style={styles.imgstyle}
            />
            <Text style={styles.textStyle}>Order Prepared at : {total2}</Text>
          </View>
        </View>

        <View style={styles.Container}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/number/3.png')}
              style={styles.imgstyle}
            />
            <Text style={styles.textStyle}>
              Delivery in Progress : {total3}
            </Text>
          </View>
        </View>

        <View style={styles.Container}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/number/4.png')}
              style={styles.imgstyle}
            />
            <Text style={styles.textStyle}>Order Delivered : {total4}</Text>
          </View>
        </View>

<View style={styles.footer} >
<Image source={require('../assets/images/number/tk2.png')} style={{height:200,width:370,marginTop:10}}/>
</View>

      </View>
    </>
  );
};

export default Shipping;

const styles = StyleSheet.create({
  imgstyle: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  textStyle: {
    fontSize: 16,
    marginRight: 10,
    marginTop: 13,
  },
  Container: {
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
    width: 340,
    marginLeft: 10,
  },
  footer: {
    margin: 20,
    marginLeft: -5,
    backgroundColor: '#e6e6e6',
    width:500,
    marginHorizontal: 15,
    borderRadius: 5,
  },
});
