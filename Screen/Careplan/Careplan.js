import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Careplan = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView
        horizontal
        style={{margin: 10}}
        showsHorizontalScrollIndicator={!true}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Careplan_details1')}>
          <ImageBackground
            source={require('../../assets/images/family/family1.png')}
            style={styles.imgStyle}>
            <TouchableOpacity
              style={{
                backgroundColor: 'green',
                height: 30,
                width: 80,
                marginTop: 210,
                marginLeft: 30,
                padding: 6,
              }}>
              <Text style={{color: '#fff', textAlign: 'center'}}>Join Now</Text>
            </TouchableOpacity>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Careplan_details2')}>
          <ImageBackground
            source={require('../../assets/images/family/family2.png')}
            style={styles.imgStyle}>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                height: 30,
                width: 80,
                marginTop: 210,
                marginLeft: 30,
                padding: 6,
              }}>
              <Text style={{color: '#fff', textAlign: 'center'}}>Join Now</Text>
            </TouchableOpacity>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Careplan_details3')}>
          <ImageBackground
            source={require('../../assets/images/family/family3.png')}
            style={styles.imgStyle}>
            <TouchableOpacity
              style={{
                backgroundColor: '#e600e6',
                height: 30,
                width: 80,
                marginTop: 210,
                marginLeft: 30,
                padding: 6,
              }}>
              <Text style={{color: '#fff', textAlign: 'center'}}>Join Now</Text>
            </TouchableOpacity>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default Careplan;

const styles = StyleSheet.create({
  imgStyle: {
    height: 280,
    width: 350,
    resizeMode: 'contain',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    marginTop: 5,
  },
});
