import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Carousel from './Carousel';
import Brand from './Brand';
import Careplan from './Careplan';
import Footer from '../Components/Footer';
import Profile from './Profile';

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View>
        <View>
          <Profile/>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Medicine')}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img_medicine/medicine.png')}
            />
            <Text style={{textAlign: 'center', marginTop: -7}}>Medicine</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Doctor')}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img_doctor/doctor.png')}
            />
            <Text style={{textAlign: 'center', marginTop: -7}}>Doctor</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Lab')}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img_lab/lab.png')}
            />
            <Text style={{textAlign: 'center', marginTop: -7}}>Lab Test</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Product')}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/img_product/product.png')}
            />
            <Text style={{textAlign: 'center', marginTop: -7}}>Product</Text>
          </TouchableOpacity>
        </View>

        <Carousel />
        <Brand />
        <Careplan />
        <Footer />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  imgStyle: {
    marginHorizontal: 12,
    marginVertical: 10,
    padding: 10,
    height: 65,
    width: 65,
    borderRadius: 5,
    flexDirection: 'row',
  },
});
