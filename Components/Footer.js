import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={{margin: 30, marginLeft: 20}}>Making healthcare</Text>
      <Text style={{fontSize: 17, fontWeight: 'bold', marginLeft: 20}}>
        Understandable, Accessibe &
      </Text>
      <Text style={{fontSize: 17, fontWeight: 'bold', marginLeft: 20}}>
        Affordale
      </Text>
      <Text style={{margin: 20}}>Made with ❤ by Meditron</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginBottom:50,
    marginLeft: -5,
    backgroundColor: '#e6e6e6',
    height: 200,
    width: 400,
    marginHorizontal: 15,
    borderRadius: 5,
    marginTop:-40
  },
});
