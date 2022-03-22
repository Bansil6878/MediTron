import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screen/Home';
import Doctor from '../Screen/Doctor';
import Medicine from '../Screen/Medicine';
import Product from '../Screen/Product';
import Lab from '../Screen/Lab';
import Carousel from '../Screen/Carousel';
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

const Stack = createNativeStackNavigator();

const Nav_Stack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Doctor" component={Doctor} />
      <Stack.Screen name="Medicine" component={Medicine} />
      <Stack.Screen name="Med_details" component={Med_details} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Lab" component={Lab} />
      <Stack.Screen name="Carousel" component={Carousel} />
      <Stack.Screen name="Brand" component={Brand} />
      <Stack.Screen name="Brand_details" component={Brand_details} />
      <Stack.Screen name="Careplan" component={Careplan} />
      <Stack.Screen name="Careplan_details1" component={Careplan_details1} />
      <Stack.Screen name="Careplan_details2" component={Careplan_details2} />
      <Stack.Screen name="Careplan_details3" component={Careplan_details3} />
      <Stack.Screen name="Drawer_main" component={Drawer_main} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name='Contact' component={Contact} />
      <Stack.Screen name='Divider' component={Divider} />
      
      
    </Stack.Navigator>
  );
};

export default Nav_Stack;

const styles = StyleSheet.create({});
