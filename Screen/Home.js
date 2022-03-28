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
import Brand from './Brand';
import Careplan from './Careplan';
import Footer from '../Components/Footer';
import Profile from './Profile';
import Divider from '../Components/Divider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Dropdown from './Dropdown';
import Trending from './Trending';
import Slider from './Slider';


const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View>
        <View style={{flexDirection:'row'}}>
          <Profile/>
          <Dropdown/>
          <AntDesign
          name="shoppingcart"
          size={24}
          color="gray"
          style={{marginTop:42,marginLeft:110}}
          onPress={() => navigation.navigate('Cart')}
        />
        </View>
<Divider/>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Medicine')}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/medicine/medicine.png')}
            />
            <Text style={{textAlign: 'center', marginTop: -7}}>Medicine</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Doc')}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/doctor/doctor.png')}
            />
            <Text style={{textAlign: 'center', marginTop: -7}}>Doctor</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Lab')}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/lab/lab.png')}
            />
            <Text style={{textAlign: 'center', marginTop: -7}}>Lab Test</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Product')}>
            <Image
              style={styles.imgStyle}
              source={require('../assets/images/product/product.png')}
            />
            <Text style={{textAlign: 'center', marginTop: -7}}>Product</Text>
          </TouchableOpacity>
        </View>

        <Slider/>
        <Brand />
        <Careplan />
        <Trending />
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
