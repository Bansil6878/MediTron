import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Brand from '../Screen/Brand_pages/Brand';
import Brand_details from '../Screen/Brand_pages/Brand_details';
import Careplan from '../Screen/Careplan/Careplan';
import Careplan_details1 from '../Screen/Careplan/Careplan_details1';
import Careplan_details2 from '../Screen/Careplan/Careplan_details2';
import Careplan_details3 from '../Screen/Careplan/Careplan_details3';
import Drawer_main from './Drawer_main';
import Profile from '../Screen/Profile/Profile';
import Contact from '../Screen/Login/Contact';
import Register from '../Screen/Login/Register';
import Login from '../Screen/Login/Login';
import Divider from '../Components/Divider';
import Contact_details from '../Screen/Login/Contact_details';
import Doc from '../Screen/Doctor/Doc';
import Doc_details from '../Screen/Doctor/Doc_details';
import Dropdown from '../Screen/Dropdown';
import {Trending} from '../Screen/Trending/Trending';
import {Trending_details} from '../Screen/Trending/Trending_details';
import {Trendingpro_details} from '../Screen/Trending/Trendingpro_details';
import Nav_Tabbar from './Nav_Tabbar';
import Search from '../Screen/Search';
import Slider from '../Screen/Slider/Slider';
import Payment from '../Screen/Order/Payment';
import Empty_cart from '../Screen/Cart/Empty_cart';
import Myorder from '../Screen/Order/Myorder';
import Brand_footer from '../Components/Brand_footer';
import History from '../Screen/Profile/History';
import {Details} from '../Screen/Medicine/Details';
import {MyCart} from '../Screen/Cart/MyCart';
import Consult_details from '../Screen/Doctor/Consult_details';
import Privacy from '../Screen/Profile/Privacy';
import {Brandpro_details} from '../Screen/Brand_pages/Brandpro_details';
import {Brandpage_details} from '../Screen/Brand_pages/Brandpage_details';
import {Brandpage} from '../Screen/Brand_pages/Brandpage';
import {Lab} from '../Screen/Lab/Lab';
import {Lab_details} from '../Screen/Lab/Lab_details';
import {Labpro_details} from '../Screen/Lab/Labpro_details';
import {Labtest_book} from '../Screen/Lab/Labtest_book';
import {Chatbot} from '../Screen/Doctor/Chatbot';
import {Medicine} from '../Screen/Medicine/Medicine';
import {Med_details} from '../Screen/Medicine/Med_details';
import {Device} from '../Screen/Device/Device';
import {Device_details} from '../Screen/Device/Device_details';
import {Devicepro_details} from '../Screen/Device/Devicepro_details';
import Careplan_show from '../Screen/Careplan/Careplan_show';
import Doc_slider from '../Screen/Slider/Doc_slider.js';
import Careplan_slider from '../Screen/Slider/Careplan_slider';

const Stack = createNativeStackNavigator();

const Nav_Stack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} /> 
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Contact_details" component={Contact_details} />
      <Stack.Screen name="Home" component={Nav_Tabbar} />
      <Stack.Screen name="Brand" component={Brand} />
      <Stack.Screen name="Brand_details" component={Brand_details} />
      <Stack.Screen name="Careplan" component={Careplan} />
      <Stack.Screen name="Careplan_details1" component={Careplan_details1} />
      <Stack.Screen name="Careplan_details2" component={Careplan_details2} />
      <Stack.Screen name="Careplan_details3" component={Careplan_details3} />
      <Stack.Screen name="Careplan_show" component={Careplan_show} />
      <Stack.Screen name="Drawer_main" component={Drawer_main} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Divider" component={Divider} />
      <Stack.Screen name="Doc" component={Doc}  />
      <Stack.Screen
        name="Doc_details"
        component={Doc_details}
      />
      <Stack.Screen name="Dropdown" component={Dropdown} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Slider" component={Slider} />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{headerShown: true}}
      />
      <Stack.Screen name="Medicine" component={Medicine} />
      <Stack.Screen name="Med_details" component={Med_details} />
      <Stack.Screen name="Empty_cart" component={Empty_cart} />
      <Stack.Screen name="Myorder" component={Myorder} />
      <Stack.Screen name="Brand_footer" component={Brand_footer} />
      <Stack.Screen
        name="History"
        component={History}
        options={{headerShown: true}}
      />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen
        name="Consult_details"
        component={Consult_details}
        options={{headerShown: true}}
      />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="Brandpage" component={Brandpage} />
      <Stack.Screen name="Brandpage_details" component={Brandpage_details} />
      <Stack.Screen name="Brandpro_details" component={Brandpro_details} />
      <Stack.Screen name="Lab" component={Lab} />
      <Stack.Screen name="Lab_details" component={Lab_details} />
      <Stack.Screen name="Labpro_details" component={Labpro_details} />
      <Stack.Screen name="Labtest_book" component={Labtest_book} />
      <Stack.Screen name="Chatbot" component={Chatbot} />
      <Stack.Screen name="Device" component={Device} />
      <Stack.Screen name="Device_details" component={Device_details} />
      <Stack.Screen name="Devicepro_details" component={Devicepro_details} />
      <Stack.Screen name="Trending" component={Trending} />
      <Stack.Screen name="Trending_details" component={Trending_details} />
      <Stack.Screen
        name="Trendingpro_details"
        component={Trendingpro_details}
      />
      <Stack.Screen name="Doc_slider" component={Doc_slider} />
      <Stack.Screen name='Careplan_slider' component={Careplan_slider}/>
    </Stack.Navigator>
  );
};

export default Nav_Stack;

const styles = StyleSheet.create({});
