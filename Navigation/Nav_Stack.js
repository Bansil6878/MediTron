import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screen/Home';
import Medicine from '../Screen/Medicine';
import Product from '../Screen/Product';
import Lab from '../Screen/Lab';
import Brand from '../Screen/Brand';
import Brand_details from '../Screen/Brand_details';
import Careplan from '../Screen/Careplan';
import Careplan_details1 from '../Screen/Careplan_details1';
import Careplan_details2 from '../Screen/Careplan_details2';
import Careplan_details3 from '../Screen/Careplan_details3';
import Drawer_main from './Drawer_main';
import Med_details from '../Screen/Med_details';
import Profile from '../Screen/Profile';
import Contact from '../Screen/Contact';
import Register from '../Screen/Register';
import Login from '../Screen/Login';
import Divider from '../Components/Divider';
import Contact_details from '../Screen/Contact_details';
import Cart from '../Screen/Cart';
import Cart_details from '../Screen/Cart_details';
import Doc from '../Screen/Doc';
import Doc_details from '../Screen/Doc_details';
import Dropdown from '../Screen/Dropdown';
import Trending from '../Screen/Trending';
import Bournvita from '../Screen/Brand_pages/Bournvita';
import Cipla from '../Screen/Brand_pages/Cipla';
import Dabur from '../Screen/Brand_pages/Dabur';
import Drreaddy from '../Screen/Brand_pages/Drreaddy';
import Himalaya from '../Screen/Brand_pages/Himalaya';
import Vaseline from '../Screen/Brand_pages/Vaseline';
import Trending_details from '../Screen/Trending_details';
import Nav_Tabbar from './Nav_Tabbar';
import Search from '../Screen/Search';
import Slider from '../Screen/Slider';
import Payment from '../Screen/Payment';
import Empty_cart from '../Screen/Empty_cart';
import Myorder from '../Screen/Myorder';
import Videocall from '../Screen/Videocall';
import Cadila from '../Screen/Brand_pages/Cadila';
import Complan from '../Screen/Brand_pages/Complan';
import Cetaphil from '../Screen/Brand_pages/Cetaphil';
import Horlicks from '../Screen/Brand_pages/Horlicks';
import Jiva from '../Screen/Brand_pages/Jiva';
import Nivea from '../Screen/Brand_pages/Nivea';
import Zandu from '../Screen/Brand_pages/Zandu';
import Zydus from '../Screen/Brand_pages/Zydus';
import Mamaearth from '../Screen/Brand_pages/Mamaearth';
import Brand_footer from '../Components/Brand_footer';
import Brandpage_details from '../Screen/Brandpage_details';
import History from '../Screen/History';

const Stack = createNativeStackNavigator();

const Nav_Stack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Nav_Tabbar} />
      <Stack.Screen name="Medicine" component={Medicine} />
      <Stack.Screen name="Med_details" component={Med_details} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Lab" component={Lab} />
      <Stack.Screen name="Brand" component={Brand} />
      <Stack.Screen name="Brand_details" component={Brand_details} />
      <Stack.Screen name="Careplan" component={Careplan} />
      <Stack.Screen name="Careplan_details1" component={Careplan_details1} />
      <Stack.Screen name="Careplan_details2" component={Careplan_details2} />
      <Stack.Screen name="Careplan_details3" component={Careplan_details3} />
      <Stack.Screen name="Drawer_main" component={Drawer_main} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Divider" component={Divider} />
      <Stack.Screen name="Contact_details" component={Contact_details} />
      <Stack.Screen name="Cart_details" component={Cart_details} />
      <Stack.Screen name="Doc" component={Doc} options={{headerShown: true}} />
      <Stack.Screen
        name="Doc_details"
        component={Doc_details}
        options={{headerShown: true}}
      />
      <Stack.Screen name="Dropdown" component={Dropdown} />
      <Stack.Screen name="Trending" component={Trending} />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: true}}
      />
      <Stack.Screen name="Bournvita" component={Bournvita} />
      <Stack.Screen name="Cipla" component={Cipla} />
      <Stack.Screen name="Dabur" component={Dabur} />
      <Stack.Screen name="Drreaddy" component={Drreaddy} />
      <Stack.Screen name="Himalaya" component={Himalaya} />
      <Stack.Screen name="Vaseline" component={Vaseline} />
      <Stack.Screen name="Trending_details" component={Trending_details} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Slider" component={Slider} />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{headerShown: true}}
      />
      <Stack.Screen name="Empty_cart" component={Empty_cart} />
      <Stack.Screen name="Myorder" component={Myorder} />
      <Stack.Screen name="Cadila" component={Cadila} />
      <Stack.Screen name="Cetaphil" component={Cetaphil} />
      <Stack.Screen name="Complan" component={Complan} />
      <Stack.Screen name="Horlicks" component={Horlicks} />
      <Stack.Screen name="Jiva" component={Jiva} />
      <Stack.Screen name="Nivea" component={Nivea} />
      <Stack.Screen name="Zandu" component={Zandu} />
      <Stack.Screen name="Zydus" component={Zydus} />
      <Stack.Screen name='Mamaearth' component={Mamaearth} />
      <Stack.Screen name='Brand_footer' component={Brand_footer} />
      <Stack.Screen name='Brandpage_details' component={Brandpage_details} />
      <Stack.Screen name='History' component={History} />


    </Stack.Navigator>
  );
};

export default Nav_Stack;

const styles = StyleSheet.create({});
