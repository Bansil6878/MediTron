import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Trending } from '../Trending/Trending';
import TRENDING_DATA, { getTrending_datas } from '../../assets/trending_data/trending_data';
import { useNavigation } from '@react-navigation/native';


export function Trending_details () {

  const navigation =useNavigation();

  
  function renderProduct({item: trending_data}) {
 
  return (
    <Trending {...trending_data} 
    
    onPress={() => {
      navigation.navigate('Trendingpro_details', {
        productId: trending_data.id,
      });
    }}
    />
    );
  }
  
  const [products, setProducts] = useState([]);

  const [data,setData] = useState(TRENDING_DATA);

    
  

  useEffect(() => {
    setProducts(getTrending_datas());
  });

  return (
    <>
    <View style={{marginTop: 4, flexDirection: 'row'}}>
    

     <Text
      style={{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 5,
        marginTop: 5,
        marginLeft: 10,
      }}>
      Trending
    </Text>
    </View>
    
  


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