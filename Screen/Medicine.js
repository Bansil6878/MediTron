import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React,{useState} from 'react';
import medicine from '../assets/medicine/medicine_data';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Searchbar } from 'react-native-paper';

const Medicine = () => {
  const navigation = useNavigation();


  
  const [data,setData] = useState(medicine);

  const searchdata = (text) => {
      if(text == ''){
          setData(medicine);
      }else{
          const newdata = medicine.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
          setData(newdata);
      }
  }


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
              marginHorizontal: 15,
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
        <AntDesign
          name="arrowleft"
          size={24}
          color="gray"
          style={{marginTop: 7}}
          onPress={() => navigation.navigate('Home')}
        />

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 5,
            marginTop: 5,
          }}>
          Medicine
        </Text>
      </View>

  
      <Searchbar
                placeholder="Search"
                onChangeText={(txt)=> {
                    searchdata(txt)
                }}
                placeholderTextColor='black'
                style={styles.searchbar}
                />

      <FlatList data={data} renderItem={med} />

    </View>
  );
};

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
  searchbar:{
    marginTop:10,
    width:330,
    marginHorizontal:15
  }
});

export default Medicine;
