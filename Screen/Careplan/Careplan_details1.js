import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import firestore from '@react-native-firebase/firestore';
import {careplan_data1} from '../../assets/data/data';
import {useNavigation} from '@react-navigation/native';

const Careplan_details1 = () => {
  const [element, seElement] = useState([]);

  const Name = element.name;
  const Images = element.images;
  const Benefits = element.benifit;
  const Price = element.price;
  const Description = element.des;

  const navigation = useNavigation();

  const add = async () => {
    // console.log(Description);
    await firestore()
      .collection('AddToCart')
      .add({
        CareplanName: Name,
        Description: Description,
        Price: Price,
        // Image:Images,
        Benefits: Benefits,
      })
      .then(
        alert('item added'),
        console.log('item added'),
        navigation.navigate('Payment'),
      )
      .catch(e => alert(e));
  };

  const care = ({item}) => {
    seElement(item);
    return (
      <>
        <View>
          <Image source={item.image} style={styles.imgStyle} />

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text
              style={{
                backgroundColor: '#994d00',
                color: 'white',
                marginTop: 15,
                width: 150,
                height: 20,
                marginLeft: 10,
                borderBottomRightRadius: 15,
                textAlign: 'left',
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: 10,
                marginLeft: 40,
              }}>
              {item.price}
            </Text>
          </View>

          <Text
            style={{
              marginTop: 30,
              fontWeight: 'bold',
              fontSize: 26,
              marginLeft: 10,
            }}>
            Reduce your medical expenses by HALF
          </Text>
          <Text style={{marginTop: 20, marginLeft: 10}}>
            Save for thing that makes you happy
          </Text>

          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginTop: 40,
                marginLeft: 10,
              }}>
              Benefits
            </Text>

            <View style={styles.container}>
              <AntDesign name="tag" size={24} color="gray" />
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.textStyle}>
                  Save Extra 7% on every order
                </Text>
                <Text style={styles.txtStyle}>
                  Guaranteed saving over 7 above promotion offer. Extra 2% off
                  on all presccription medicine.
                </Text>
              </View>
            </View>

            <View style={styles.container}>
              <Entypo name="lab-flask" size={24} color="gray" />
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.textStyle}>Free Lab Test</Text>
                <Text style={styles.txtStyle}>
                  Get a free CBC or HbA1c test or upgrade to any one of our
                  premium tests.
                </Text>
              </View>
            </View>

            <View style={styles.container}>
              <Fontisto name="truck" size={24} color="gray" />
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.textStyle}>No Shippping Charges</Text>
                <Text style={styles.txtStyle}>
                  No shippping charge on order above Rs.70. Unlimited Free
                  shippping on order above Rs. 500. Free shippping on 20 order
                  below Rs.500
                </Text>
              </View>
            </View>

            <View style={styles.container}>
              <Fontisto name="doctor" size={24} color="gray" />
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.textStyle}>Free Consultation</Text>
                <Text style={styles.txtStyle}>
                  Get a free consultation form experts around 26 different
                  specialities including dieticians and nutritionist
                </Text>
              </View>
            </View>

            <Text style={styles.btnStyle} onPress={add}>
              ₹ 45/month
            </Text>
          </View>
        </View>
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
          Careplan
        </Text>
      </View>
      <FlatList data={careplan_data1} renderItem={care} />
    </View>
  );
};

export default Careplan_details1;

const styles = StyleSheet.create({
  imgStyle: {
    height: 300,
    width: 400,
    marginTop: 15,
  },
  container: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 22,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 19,
    marginLeft: 10,
  },
  txtStyle: {
    marginLeft: 10,
    marginTop: 8,
    alignItems: 'flex-start',
    color: 'grey',
    marginHorizontal: 80,
  },
  btnStyle: {
    backgroundColor: '#b3e6ff',
    width: 120,
    marginHorizontal: 110,
    marginTop: 35,
    borderRadius: 10,
    textAlign: 'center',
    marginBottom: 10,
  },
});
