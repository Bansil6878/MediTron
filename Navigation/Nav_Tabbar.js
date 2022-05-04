import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Contact_details from '../Screen/Login/Contact_details';
import Home from '../Screen/Home';
import Search from '../Screen/Search';
import { MyCart } from '../Screen/Cart/MyCart';
const Tab = createBottomTabNavigator();

const Nav_Tabbar = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: !true}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Contact_details}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
        <Tab.Screen
          name="Cart"
          component={MyCart}
          options={{
            tabBarIcon: ({color}) => (
              <AntDesign name="shoppingcart" size={24} color={color} />
            ),
          }}
        />
      <Tab.Screen
        name="Serch"
        component={Search}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Nav_Tabbar;

const styles = StyleSheet.create({});
