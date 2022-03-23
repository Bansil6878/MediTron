import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const Med_details = ({route}) => {
  
  const {item} = route.params;

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image style={styles.imgStyle} source={item.images}/>

<Text style={styles.textStyle}>{item.name}</Text>

    </View>
  );
};

export default Med_details;

const styles = StyleSheet.create({
  imgStyle: {
    // resizeMode: 'contain',
    width: 340,
    height: 300,
    marginTop:20
    
  },
  textStyle:{
    marginTop:20,
    marginLeft:-240,
    fontSize:25,
    fontWeight:'bold'
  }
});
