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

const Stack = createNativeStackNavigator();

const Nav_Stack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Nav_Tabbar}/>
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
      <Stack.Screen name='Contact' component={Contact} />
      <Stack.Screen name='Divider' component={Divider} />
      <Stack.Screen name='Contact_details' component={Contact_details} />
      <Stack.Screen name='Cart_details' component={Cart_details}  />
      <Stack.Screen name='Doc' component={Doc} options={{headerShown:true}} />
      <Stack.Screen name='Doc_details' component={Doc_details} options={{headerShown:true}} />
      <Stack.Screen name='Dropdown' component={Dropdown}  />
      <Stack.Screen name='Trending' component={Trending}  />
      <Stack.Screen name='Cart' component={Cart} options={{headerShown:true}} />
      <Stack.Screen name='Bournvita' component={Bournvita}  />
      <Stack.Screen name='Cipla' component={Cipla}  />
      <Stack.Screen name='Dabur' component={Dabur}  />
      <Stack.Screen name='Drreaddy' component={Drreaddy}  />
      <Stack.Screen name='Himalaya' component={Himalaya}  />
      <Stack.Screen name='Vaseline' component={Vaseline}  />
      <Stack.Screen name='Trending_details' component={Trending_details}  />
      <Stack.Screen name='Search' component={Search}  />
      <Stack.Screen name='Slider' component={Slider}  />
      <Stack.Screen name='Payment' component={Payment} options={{headerShown:true}}  />
      <Stack.Screen name='Empty_cart' component={Empty_cart}  />
     











      
      
    </Stack.Navigator>
  );
};

export default Nav_Stack;

const styles = StyleSheet.create({});
