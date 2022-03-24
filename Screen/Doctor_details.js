import { StyleSheet, Text, View,FlatList ,Image} from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';


const Doctor_details = ({route}) => {
  
const {item}=route.params;
  
  return(
  <View>
    <Image source={item.images} style={styles.imgStyle}/>
    <Text style={styles.textStyle}>Dr. {item.name}</Text>
    <Text style={{fontSize:16,marginLeft:10}}>MBBS</Text>
    {/* <Text style={{fontSize:19,marginLeft:10}}>{item.department}</Text> */}
    <Text style={{marginTop:20}}>
      <EvilIcons name='location' size={24}  color='gray' />
      {item.location}
      </Text>
   
  
<View>
  <Text>Bill summary</Text>
  <Text>Consultation fee</Text>
  
</View>


  </View>
  )}


  

export default Doctor_details

const styles = StyleSheet.create({
  imgStyle: {
    width: 340,
    height: 300,
    marginTop: 20,
  },
  textStyle: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft:10
  },
})