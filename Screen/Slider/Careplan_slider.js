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
      img: require('../../assets/images/family/family1.png'),
    },
  
    {
      img: require('../../assets/images/family/family2.png'),
    },
  
    {
      img: require('../../assets/images/family/family3.png'),
    },
  
  ];
  
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;
  
  const Careplan_slider = () => {
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
  export default Careplan_slider;
  
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 8,
      marginTop: -20,
    },
    img: {
      width: 300,
      height: 300,
      marginLeft: -1,
      resizeMode: 'center',
      marginHorizontal: 6,
      borderRadius:10
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
  