import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Brand_footer = () => {
  return (
    <View style={styles.container}>
      <Text style={{margin: 30, marginLeft: 20}}>Making healthcare</Text>
      <Text style={{fontSize: 17, fontWeight: 'bold', marginLeft: 20}}>
        We Make Strong Bond with are
      </Text>
      <Text style={{fontSize: 17, fontWeight: 'bold', marginLeft: 20}}>
        Brand
      </Text>
      <Text style={{margin: 20}}>Made with ❤ by Meditron</Text>
    </View>
  );
};

export default Brand_footer;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginLeft: -5,
    backgroundColor: '#e6e6e6',
    height: 200,
    width: 400,
    marginHorizontal: 15,
    borderRadius: 5,
  },
});
