import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Brandpage } from '../Brand_pages/Brandpage';
import BRAND_DATA, { getBrand_datas } from '../../assets/brand_data/brand_data';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Searchbar } from 'react-native-paper';



export function Brandpage_details({navigation}) {

  
  function renderProduct({item: brand_data}) {


  return (
    <Brandpage {...brand_data} 
    
    onPress={() => {
      navigation.navigate('Brandpro_details', {
        productId: brand_data.id,
      });
    }}
    />
    );
  }
  
  const [products, setProducts] = useState([]);

  const [data,setData] = useState(BRAND_DATA);

    const searchdata = (text) => {
        if(text == ''){
            setData(BRAND_DATA);
        }else{
            const newdata = BRAND_DATA.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
            setData(newdata);
        }
    }
  

  useEffect(() => {
    setProducts(getBrand_datas());
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