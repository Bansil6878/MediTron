import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';


const Images = [
  {
    images: require('../assets/images/offer/1.png'),
  },
  {
    images: require('../assets/images/offer/2.png'),
  },
  {
    images: require('../assets/images/offer/3.png'),
  },
  {
    images: require('../assets/images/offer/4.png'),
  },
];

const Slider = () => {
  return (
    <FlatList
      data={Images}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <View style={{margin: 25}}>
            <TouchableOpacity>
              <Image
                source={item.images}
                style={{
                  height: 210,
                  width: 330,
                  resizeMode: 'cover',
                  marginHorizontal: -10,
                }}
              />
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {},
});
