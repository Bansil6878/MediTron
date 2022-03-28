import {StyleSheet, Text, View} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import React from 'react';
import Trending from './Trending';

const Serch = () => {
  return (
    <View>
      <SearchBar placeholder="Search here" 
      
      />
      <Trending />
    </View>
  );
};

export default Serch;

const styles = StyleSheet.create({});
