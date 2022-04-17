import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';


const Careplan_details2 = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <View style={{marginTop: -15}}>
          <View style={{marginTop: 15, flexDirection: 'row'}}>
            <AntDesign name="arrowleft"  size={24} color='gray' style={{marginTop:12}} onPress={()=>navigation.navigate("Home")}/>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 10,
                marginTop: 10,
              }}>
              My Care Plan
            </Text>
          </View>

          <Image
            source={require('../../assets/images/family/family4.png')}
            style={styles.imgStyle}
          />
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                backgroundColor: '#994d00',
                color: 'white',
                marginTop: 15,
                width: 100,
                height: 20,
                marginLeft: 10,
                borderBottomRightRadius: 15,
                textAlign: 'center',
              }}>
              Care Plan
            </Text>
            <Text style={{marginTop: 15, marginLeft: 20, fontSize: 16}}>
              Plan starting Rs. 35/month
            </Text>
          </View>

          <Text
            style={{
              marginTop: 50,
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
              <AntDesign name="tag" size={24} color='gray'/>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.textStyle}>
                  Save Extra 4% on every order
                </Text>
                <Text style={styles.txtStyle}>
                  Guaranteed saving over 5 above promotion offer. Extra 2% off
                  on all presccription medicine.
                </Text>
              </View>
            </View>

            <View style={styles.container}>
              <Entypo name="lab-flask" size={24} color='gray' />
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.textStyle}>Free Three Lab Test</Text>
                <Text style={styles.txtStyle}>
                  Get a free CBC or HbA1c test or upgrade to any one of our
                  premium tests.
                </Text>
              </View>
            </View>

            <View style={styles.container}>
              <Fontisto name="truck" size={24} color='gray' />
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.textStyle}>No Shippping Charges</Text>
                <Text style={styles.txtStyle}>
                  No shippping charge on order above Rs.90. Unlimited Free
                  shippping on order above Rs. 600. Free shippping on 20 order
                  below Rs.550
                </Text>
              </View>
            </View>

            <View style={styles.container}>
              <Fontisto name="doctor" size={24} color='gray' />
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.textStyle}>
                  Free Five Time Consultation
                </Text>
                <Text style={styles.txtStyle}>
                  Get a free consultation form experts around 26 different
                  specialities including dieticians and nutritionist
                </Text>
              </View>
            </View>

            <Text style={styles.btnStyle}>₹ 35/month</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Careplan_details2;

const styles = StyleSheet.create({
  imgStyle: {
    height: 300,
    width: 400,
    marginTop: 15,
  },
  container: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 20,
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
