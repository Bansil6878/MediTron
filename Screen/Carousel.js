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
    images: require('../assets/img_offer/offer7.png'),
  },
  {
    images: require('../assets/img_offer/offer7.png'),
  },
  {
    images: require('../assets/img_offer/offer7.png'),
  },
  {
    images: require('../assets/img_offer/offer7.png'),
  },
];

const Carousel = () => {
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

export default Carousel;

const styles = StyleSheet.create({
  container: {},
});
