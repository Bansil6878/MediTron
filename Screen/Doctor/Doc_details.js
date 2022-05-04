import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Divider from '../../Components/Divider';
import {doctor} from '../assets/data/data';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';


const Doc_details = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
        <View style={{flexDirection:'row'}}>
      <AntDesign
          name="arrowleft"
          size={24}
          color="gray"
          style={{marginTop: 7, marginLeft: 10}}
          onPress={() => navigation.navigate('Doc')}
        />
        
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 5,
            marginTop: 5,
            marginLeft: 10,
          }}>
          Doctor Consult
        </Text>
        </View>
      <View>
        <View
          style={{
            marginTop: 10,
            backgroundColor: 'white',
            width: 360,
            height: 100,
          }}>
          <Text style={{marginLeft: 10, marginTop: 10}}>
            One of our qualifiled doctor will consult you within 30 min
          </Text>
        </View>

        <View style={{marginLeft: 10, marginTop: 20}}>
          <Text>In consultation Meditron what gave you ?</Text>
        </View>

        <View style={{marginTop: 310, backgroundColor: 'white'}}>
          <Text style={{marginLeft: 10, marginTop: 10, fontSize: 16}}>
            Bill summary
          </Text>
          <Text style={{marginLeft: 10, marginTop: 10}}>Consultation fee</Text>
          <Text style={{marginLeft: 300, marginTop: -20, marginBottom: 5}}>
            ₹: 350
          </Text>
          <Divider />
          <Text style={{marginLeft: 10, fontSize: 17}}>To be paid</Text>
          <Text style={{marginLeft: 290, marginTop: -20, fontSize: 17}}>
            ₹: 350
          </Text>
        </View>

        <Text style={{marginLeft: 10, marginTop: 10}}>Terms & conditions </Text>

        <View
          style={{
            height: 50,
            backgroundColor: 'orange',
            borderRadius: 25,
            width: 340,
            marginHorizontal: 10,
            marginTop: 10,
            marginBottom: 5,
          }}>
          <View style={{marginLeft: 15}}>
            <Text style={styles.txt}>Total Amount:</Text>
            <Text style={styles.txt}>₹: 350</Text>
          </View>

          <View style={{marginTop: -30, marginLeft: 220}}>
            <Text style={styles.txt} onPress={()=>navigation.navigate('Chatbot')}>Proceed to pay</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Doc_details;

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 20,
    width: 350,
    marginHorizontal: 5,
    borderColor: 'white',
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
