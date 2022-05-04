import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Doc_slider from '../Slider/Doc_slider';

const Doc = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={{flexDirection:'row'}}>
      <AntDesign
          name="arrowleft"
          size={24}
          color="gray"
          style={{marginTop: 7, marginLeft: 10}}
          onPress={() => navigation.navigate('Home')}
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
        <Doc_slider />
        <View style={{marginTop:-15}}>
          <Text
            style={{
              fontSize: 19,
              fontWeight: 'bold',
              width: 290,
              marginLeft: 10,
            }}>
            Online doctor consultation with qualifiled doctors
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 30,
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <MaterialCommunityIcons
            name="timer-outline"
            size={24}
            color="orange"
          />
          <FontAwesome5 name="file-prescription" size={24} color="orange" />
          <MaterialIcons name="medical-services" size={24} color="orange" />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: 100, marginLeft: 10}}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              Talk within 30 min
            </Text>
          </View>

          <View style={{width: 100, marginLeft: 10}}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              Get a vlid prescription
            </Text>
          </View>

          <View style={{width: 100}}>
            <Text style={{fontSize: 17, fontWeight: 'bold', marginLeft: 25}}>
              Trusted services
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Doc_details')}>
          <Text style={styles.btnStyle}>Consult now</Text>
        </TouchableOpacity>

        <View>
          <Text style={{fontSize: 17, marginTop: 20, marginLeft: 10}}>
            Consult Doctor in 1 click
          </Text>
          <Text style={{fontSize: 14, marginTop: 10, marginLeft: 10}}>
            Select a symptom in 1 step and get a doctor consultation in just a
            click just 350Rs only.
          </Text>

          <View style={{flexDirection: 'row', flexWrap: 'wrap', width: 'auto'}}>
            <Text style={styles.txtStyle}>Covid</Text>
            <Text style={styles.txtStyle}>Headache</Text>
            <Text style={styles.txtStyle}>Cough</Text>
            <Text style={styles.txtStyle}>Fever</Text>
          </View>

          <View style={{flexDirection: 'row', flexWrap: 'wrap', width: 'auto'}}>
            <Text style={styles.txtStyle}>Stomach Pain</Text>
            <Text style={styles.txtStyle}>Loose Motions</Text>
            <Text style={styles.txtStyle}>Mental Health</Text>
            <Text style={styles.txtStyle}>Hairfall</Text>
          </View>

          <View style={{flexDirection: 'row', flexWrap: 'wrap', width: 'auto'}}>
            <Text style={styles.txtStyle}>Dark Patches on Skin</Text>
            <Text style={styles.txtStyle}>Acne/Pimples</Text>
            <Text style={styles.txtStyle}>Missed Period</Text>
            <Text
              style={styles.txtStyle}
              onPress={() => navigation.navigate('Doc_details')}>
              Many More !!
            </Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              marginTop: 50,
              marginLeft: 10,
              fontSize: 17,
              fontWeight: 'bold',
            }}>
            why consult on Meditron ?
          </Text>

          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/images/doctor/doctor.png')}
              style={styles.imgStyle}
            />
            <Text
              style={{
                marginTop: 50,
                marginLeft: 20,
                fontSize: 22,
                fontWeight: 'bold',
              }}>
              200+
            </Text>
            <Text style={{marginTop: 85, marginLeft: -50}}>
              Qualifiled Doctors
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/images/family/family4.png')}
              style={styles.imgStyle}
            />
            <Text
              style={{
                marginTop: 50,
                marginLeft: 20,
                fontSize: 22,
                fontWeight: 'bold',
              }}>
              220K+
            </Text>
            <Text style={{marginTop: 85, marginLeft: -65}}>
              Satisfiled Customer
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/images/doctor/doctor.png')}
              style={styles.imgStyle}
            />
            <Text
              style={{
                marginTop: 50,
                marginLeft: 20,
                fontSize: 22,
                fontWeight: 'bold',
              }}>
              27+
            </Text>
            <Text style={{marginTop: 85, marginLeft: -38}}>Specialities</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/images/doctor/secure.png')}
              style={styles.imgStyle}
            />
            <Text
              style={{
                marginTop: 50,
                marginLeft: 20,
                fontSize: 22,
                fontWeight: 'bold',
              }}>
              100%
            </Text>
            <Text style={{marginTop: 85, marginLeft: -50}}>
              Secure and Private
            </Text>
          </View>
        </View>

        
      </View>
    </ScrollView>
  );
};

export default Doc;

const styles = StyleSheet.create({
  btnStyle: {
    width: 350,
    textAlign: 'center',
    marginHorizontal: 5,
    marginTop: 30,
    backgroundColor: 'orange',
    borderRadius: 5,
    height: 25,
    color: 'white',
    fontSize: 16,
  },
  imgStyle: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginLeft: 10,
  },
  txtStyle: {
    borderWidth: 1,
    width: 70,
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 10,
    marginHorizontal: 5,
    borderRadius: 3,
    textAlignVertical: 'center',
  },
});
