import {StyleSheet, Text, View, TouchableOpacity, Image,ScrollView} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Brand_footer from '../Components/Brand_footer';
import Footer from '../Components/Footer';

const Brand_details = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>

    <View
      style={{backgroundColor: '#ffffff', marginHorizontal: 10, height: 650}}>
      <View style={{marginTop: 4, flexDirection: 'row'}}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="gray"
          style={{marginTop: 12}}
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={styles.txtStyle}>Featured brand</Text>
      </View>

      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Brandpage_details')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/bournvita.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Brandpage_details')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/cadila.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Brandpage_details')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/jiva.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Brandpage_details')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/mamaearth.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Brandpage_details')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/dabur.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Brandpage_details')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/horlicks.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Brandpage_details')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/vaseline.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Brandpage_details')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/cipla.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Brandpage_details')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/cetaphil.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Brandpage_details')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/zandu.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Brandpage_details')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/reddy.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Brandpage_details')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/himalaya.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Brandpage_details')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/zydus.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Brandpage_details')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/nivea.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Brandpage_details')}>
          <View style={styles.poster}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/brand/complan.png')}
            />
          </View>
        </TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Brandpage_details')}>
<Text
            style={{
              backgroundColor: '#f2f2f2',
              marginTop: 15,
              height: 25,
              width: 320,
              marginHorizontal: 10,
              textAlign: 'center',
              marginBottom:10
            }}>
            See All
          </Text>
</TouchableOpacity>

      </View>
    </View>
        <Brand_footer/>
        
    </ScrollView>
  );
};

export default Brand_details;

const styles = StyleSheet.create({
  txtStyle: {
    textAlign: 'left',
    fontWeight: 'bold',
    margin: 10,
    fontSize: 20,
  },
  imgStyle: {
    height: 80,
    width: 80,
    marginLeft: 10,
    marginVertical: 10,
    resizeMode: 'contain',
    justifyContent: 'center',
  },

  poster: {
    width: 100,
    borderWidth: 1,
    borderColor: '#cccccc',
    alignItems: 'flex-start',
    marginLeft: 10,
    borderRadius: 10,
    marginTop: 15,
  },
});
