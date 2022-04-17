import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Careplan_show = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View>
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

      <View style={{marginLeft: -10}}>
        <Image
          source={require('../../assets/images/careplan/careplan2.png')}
          style={styles.imgStyle}
        />
      </View>

      <View style={{alignItems: 'center', marginTop: 30}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          You have not choose any care plan{' '}
        </Text>
        <Text style={{marginTop: 20, fontSize: 15}}>
          Add care plan to it now
        </Text>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Careplan_details')}>
          <Text style={styles.btnStyle}>Select Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Careplan_show;

const styles = StyleSheet.create({
  imgStyle: {
    height: 400,
    width: 350,
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
