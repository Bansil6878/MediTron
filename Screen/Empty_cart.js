import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';


const Empty_cart = () => {

 
    return (
        <View>
         <View style={{marginTop: 4, flexDirection: 'row'}}>
     
      </View>
          <View style={{ marginLeft: -10 }}>
            <Image
              source={require("../assets/images/cart/cart1.png")}
              style={styles.imgStyle}
            />
          </View>
    
          <View style={{alignItems:"center",marginTop:30}}> 
            <Text style={{fontSize:20,fontWeight:"bold"}}>Your cart is empty!</Text>
            <Text style={{marginTop:20,fontSize:15}}>Add items to it now</Text>
          </View>
    
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.btnStyle}>Shop Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };
    
    export default Empty_cart;
    
    const styles = StyleSheet.create({
      imgStyle: {
        height: 320,
        width: 340,
        marginLeft: 20,
        marginTop: 30,
      },
      btnStyle: {
        backgroundColor: "#99d6ff",
        width: 150,
        marginTop: 40,
        marginHorizontal: 100,
        borderRadius:5,
        textAlign:'center',
        fontSize:18,
      },
    });
    