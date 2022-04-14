import {StyleSheet, Text, View, ScrollView,ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import Divider from '../Components/Divider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';


const Payment = ({route}) => {

const navigation= useNavigation();

  const [value, setValue] = useState(null);
  const { total } = route.params;

  const[loading,setLoading] = useState(false);

  const order_cash = () => {
    setLoading(true);


    setTimeout(() => {
      navigation.navigate('Myorder');
      setLoading(false);
    }, 2000);
  }


 

  useEffect(() => {
    get();
  }, []);

  

  const get = async () => {
    await firestore()
      .collection('Users')
      .doc('Contact_details')
      .get()
      .then(snapShot => {
        if (snapShot.exists) {
          setValue(snapShot.data());
        }
      });
  };

  

  return (
    <>
      <ScrollView>
        <View>
          <View style={{backgroundColor: 'white', marginTop: 20}}>
            <Text style={{marginLeft: 10, fontSize: 16, fontWeight: 'bold'}}>
              Deliver to :
            </Text>
            {value != null && (
              <>
                <Text
                  style={{
                    marginLeft: 10,
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginTop: 10,
                  }}>
                  {value.Name}
                </Text>
                <Text style={{marginLeft: 10, fontSize: 16, marginTop: 10}}>
                  {value.Address}
                </Text>
                <Text style={{marginLeft: 10, fontSize: 16, marginTop: 10}}>
                  {value.Pincode}
                </Text>
                <Text style={{marginLeft: 10, fontSize: 16, marginTop: 10}}>
                  {value.Contact}
                </Text>
              </>
            )}
          </View>

          <View style={{backgroundColor: 'white', marginTop: 20}}>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              We Accepts
            </Text>

            <View style={{flexDirection: 'row'}}>
              <Ionicons
                name="qr-code-outline"
                size={30}
                color="black"
                style={{marginLeft: 10, marginTop: 10}}
              />
              <Text style={{margin: 15, marginLeft: 10}}
              onPress={()=>order_cash()}>
                Upi</Text>
            </View>
            <Divider />

            <View style={{flexDirection: 'row'}}>
              <AntDesign
                name="creditcard"
                size={30}
                color="black"
                style={{marginLeft: 10, marginTop: 10}}
              />
              <Text style={{margin: 15, marginLeft: 10}}
              onPress={()=>order_cash()}>
                Mastercard,Visa,Rupay,Maestro,Amex
              </Text>
            </View>
            <Divider />

            <View style={{flexDirection: 'row'}}>
              <FontAwesome
                name="bank"
                size={30}
                color="blue"
                style={{marginLeft: 10, marginTop: 10}}
              />
              <Text style={{margin: 15, marginLeft: 10}}
                onPress={()=>order_cash()}
              >Net Banking</Text>
            </View>
            <Divider />

            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name="cash"
                size={40}
                color="green"
                style={{marginLeft: 6, marginTop: 10}}
              />
              <Text style={{margin: 15, marginLeft: 10}}
                onPress={()=>order_cash()}
              > Cash On Delivery</Text>
            </View>
            <Divider />
          </View>

          <View style={{backgroundColor: 'white', marginTop: 20}}>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              PRICE DETAILS
            </Text>
            <Divider />
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 16, marginLeft: 10, marginTop: 10}}>
                Price
              </Text>
             <Text style={{marginTop:12,marginLeft:260,fontSize:16}}>{total}</Text> 
            </View>

            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <Text style={{fontSize: 16, marginLeft: 10, marginTop: 10}}>
                Delivery Charges
              </Text>
              <Text style={{marginLeft: 176, fontSize: 16, marginTop: 10}}>
                ₹: 0
              </Text>
            </View>

            <Divider />

            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 16, marginLeft: 10, marginTop: 10}}>
                Amount Payable
              </Text>
              <Text style={{marginLeft: 177, fontSize: 16, marginTop: 10}}>
                ₹: {total}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: 280,
              marginTop: 30,
              marginBottom: 30,
            }}>
            <Ionicons
              name="shield-checkmark-outline"
              size={30}
              color="gray"
              style={{marginLeft: 10}}
            />
            <Text style={{marginLeft: 10, color: 'gray', fontWeight: 'bold'}}>
              Safe and secure payments. Easy returns. 100% Authentic product.
            </Text>
          </View>

          <View style={{position:'absolute',alignItems:'center',justifyContent:'center',width:'90%',marginTop:90}}>
          <ActivityIndicator size="large" color='blue'  animating={loading} style={{marginTop:210}}/>
         </View>

        </View>
      </ScrollView>
    </>
  );
};

export default Payment;

const styles = StyleSheet.create({});
