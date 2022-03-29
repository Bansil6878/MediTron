import {StyleSheet, Text, View, ScrollView,Image,TouchableOpacity,FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import medicine from '../assets/medicine/medicine_data';




const Trending = () => {
    
        const navigation = useNavigation();
      
        const med = ({item, index}) => {
          return (
            <>
              <TouchableOpacity  onPress={()=>navigation.navigate('Med_details',{item:item})}>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    marginVertical: 9,
                    padding: 12,
                    marginHorizontal: 10,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    padding: 10,
                  }}
                  key={index}>
                  <TouchableOpacity>
                    <Image source={item.images} style={styles.imgStyle} />
                  </TouchableOpacity>
      
                  <View
                    style={{
                      justifyContent: 'flex-end',
                      alignItems: 'flex-start',
                      marginLeft: 35,
                    }}>
                    <Text
                      style={{
                        fontSize: 19,
                        fontWeight: 'bold',
                      }}>
                      {item.name}
                    </Text>
                    <Text style={styles.textStyle}>Quantity: {item.Quantity}</Text>
                    <Text style={styles.textStyle}>Rating: {item.star}</Text>
                    <Text style={styles.textStyle}>₹: {item.rupees}</Text>
                    <TouchableOpacity>
                      <Text style={styles.btnStyle}>See more!</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </>
          );
        };
      
        return (
          <View style={{marginBottom: 60}}>
            <View style={{marginTop: 4, flexDirection: 'row'}}>
            
      
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  marginTop: 5,
                  backgroundColor:'#c0def0',
                  borderColor:'#c0def0',
                  width:100,
                  textAlign:'left',
                  borderBottomRightRadius:40
                }}>
                Trending
              </Text>
            </View>
            <FlatList data={medicine} renderItem={med} />
          </View>
        );
      };
export default Trending;

const styles = StyleSheet.create({
    imgStyle: {
        resizeMode: 'contain',
        width: 150,
        height: 130,
      },
      btnStyle: {
        padding: 7,
        width: 90,
        height: 30,
        textAlign: 'center',
        marginTop: 10,
        backgroundColor: '#c3deb4',
        borderRadius: 4,
        color: 'purple',
      },
});
