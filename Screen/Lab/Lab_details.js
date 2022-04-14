import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Lab} from '../Lab/Lab';
import LAB_DATA, {getLab_datas} from '../../assets/lab_data/lab_data';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Searchbar} from 'react-native-paper';

export function Lab_details({navigation}) {
  function renderProduct({item: lab}) {
    return (
      <Lab
        {...lab}
        onPress={() => {
          navigation.navigate('Labpro_details', {
            productId: lab.id,
          });
        }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  const [data, setData] = useState(LAB_DATA);

  const searchdata = text => {
    if (text == '') {
      setData(LAB_DATA);
    } else {
      const newdata = LAB_DATA.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase()),
      );
      setData(newdata);
    }
  };

  useEffect(() => {
    setProducts(getLab_datas());
  });

  return (
    <>
      <View style={{marginTop: 4, flexDirection: 'row'}}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="gray"
          style={{marginTop: 7, marginLeft: 10}}
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
          Lab Test
        </Text>
      </View>

      <Searchbar
        placeholder="Search"
        onChangeText={txt => {
          searchdata(txt);
        }}
        placeholderTextColor="black"
        style={styles.searchbar}
      />

      <FlatList
        style={styles.Med_details}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={item => item.id.toString()}
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
    width: 315,
    marginLeft: 20,
    marginTop: 5,
  },
});
