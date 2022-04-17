import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Consult_details = () => {
  const naviagtion = useNavigation();

  const [set, updateSet] = useState('none');
  const [set1, updateSet1] = useState('flext');
  const [set2, updateSet2] = useState('none');

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          marginHorizontal: 10,
        }}>
        <Pressable onPress={() => updateSet('flex')} style={{marginLeft: 10}}>
          <Text
            >
            UpComing
          </Text>
        </Pressable>

        <Pressable onPress={() => updateSet1('none')}>
          <Text style={styles.Pressable_txt}>Todays</Text>
        </Pressable>

        <Pressable onPress={() => updateSet2('flex')}>
          <Text style={styles.Pressable_txt}>Past</Text>
        </Pressable>
      </View>

      <View style={{display: set}}>
        <Image
          source={require('../../assets/images/doctor/consult.png')}
          style={styles.img}
        />
        <Text style={styles.txt}>Sorry, no consultation found</Text>
        <Text style={styles.text}>
          You can start a new consultation with our qualified doctors!{' '}
        </Text>
        <Text onPress={() => naviagtion.navigate('Doc')} style={styles.btn}>
          Consult now
        </Text>
      </View>

      <View style={{display: set1}}>
        <Image
          source={require('../../assets/images/doctor/consult.png')}
          style={styles.img}
        />
        <Text style={styles.txt}>Sorry, no consultation found</Text>
        <Text style={styles.text}>
          You can start a new consultation with our qualified doctors!{' '}
        </Text>
        <Text onPress={() => naviagtion.navigate('Doc')} style={styles.btn}>
          Consult now
        </Text>
      </View>


      <View style={{display: set2}}>
        <Image
          source={require('../../assets/images/doctor/consult.png')}
          style={styles.img}
        />
        <Text style={styles.txt}>Sorry, no consultation found</Text>
        <Text style={styles.text}>
          You can start a new consultation with our qualified doctors!{' '}
        </Text>
        <Text onPress={() => naviagtion.navigate('Doc')} style={styles.btn}>
          Consult now
        </Text>
      </View>
    </>
  );
};

export default Consult_details;

const styles = StyleSheet.create({
  Pressable_txt: {
    fontSize: 16,
  },
  Pressable_text: {
    fontSize: 16,
},
  img: {
    width: 150,
    height: 150,
    flexDirection: 'column',
    marginTop: 80,
    marginLeft: 100,
  },
  btn: {
    flexDirection: 'column',
    marginTop: 20,
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 5,
    color: 'orange',
    width: 150,
    textAlign: 'center',
    marginLeft: 100,
  },
  txt: {
    flexDirection: 'column',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    flexDirection: 'column',
    width: 300,
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 30,
  },
});
