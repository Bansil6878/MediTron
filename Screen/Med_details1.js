import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Medicine1 } from '../Screen/Medicine1';
import MEDICINES, { getMedicines } from '../assets/medicine/medicine_data';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Searchbar } from 'react-native-paper';



export function Med_details1 ({navigation}) {

  
  function renderProduct({item: medicine}) {
 
  return (
    <Medicine1 {...medicine} 
    
    onPress={() => {
      navigation.navigate('Details', {
        productId: medicine.id,
      });
    }}
    />
    );
  }
  
  const [products, setProducts] = useState([]);

  const [data,setData] = useState(MEDICINES);

    const searchdata = (text) => {
        if(text == ''){
            setData(MEDICINES);
        }else{
            const newdata = MEDICINES.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
            setData(newdata);
        }
    }
  

  useEffect(() => {
    setProducts(getMedicines());
  });

  return (
    <>
    <View style={{marginTop: 4, flexDirection: 'row'}}>
    <AntDesign
      name="arrowleft"
      size={24}
      color="gray"
      style={{marginTop: 7,marginLeft:10}}
      onPress={() => navigation.navigate('Home')}
    /> 

     <Text
      style={{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 5,
        marginTop: 5,
        marginLeft: 10,
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


    <FlatList
      style={styles.Med_details}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
    
      data={data}

      renderItem={renderProduct}
    />
    </>
  );
}
const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  searchbar: {
  width:315,
  marginLeft:20,
  marginTop:5


  },
});