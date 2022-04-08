import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

const images = [
  {
    img: require('../assets/images/offer/1.png'),
  },
  
  {
    img: require('../assets/images/offer/2.png'),
  },

  {
    img: require('../assets/images/offer/3.png'),
  },
  
  {
    img: require('../assets/images/offer/4.png'),
  },
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Slider = () => {
  const [img, setImg] = useState(0);
  onChange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== img) {
        setImg(slide);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <ScrollView
          onScroll={({nativeEvent}) => {
            onChange(nativeEvent);
          }}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}>
          {images.map((e, index) => {
            return <Image key={index} style={styles.img} source={e.img} />;
          })}
        </ScrollView>

        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            marginBottom: 55,
            justifyContent: 'center',
            width: '100%',
          }}>
          {images.map((e, index) => {
            return (
              <Text
                key={e}
                style={img == index ? styles.dotActive : styles.dot}>
                ●
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
};
export default Slider;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 9,
  },
  img: {
    // height:HEIGHT/2.5,
    // width:WIDTH/1.1,
    width: 340,
    height: 330,
    marginLeft: -1,
    resizeMode: 'center',
    marginHorizontal: 6,
  },

  dotActive: {
    margin: 3,
    color: 'black',
  },
  dot: {
    color: 'white',
    margin: 3,
  },
});
