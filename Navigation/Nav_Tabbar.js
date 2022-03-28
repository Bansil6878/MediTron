import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

import Drawer_main from './Drawer_main';
import Home from '../Screen/Home';
import Doc from '../Screen/Doc';
import Search from '../Screen/Search';


const Tab = createBottomTabNavigator();

const Nav_Tabbar = () => {
  return (
    <Tab.Navigator  screenOptions={{headerShown:!true}}> 
        <Tab.Screen name="Home" component={Home}  options={{tabBarIcon: ({color}) => <AntDesign name="home" size={24} color={color} /> }}/>
        <Tab.Screen name="Profile" component={Drawer_main}  options={{tabBarIcon: ({color}) => <AntDesign name="user" size={24} color={color} /> }}/>
        <Tab.Screen name="Serch" component={Search}  options={{tabBarIcon: ({color}) => <AntDesign name="search1" size={24} color={color} /> }}/>
        <Tab.Screen name="Setting" component={Doc}  options={{tabBarIcon: ({color}) => <AntDesign name="setting" size={24} color={color} /> }}/>
        </Tab.Navigator>
  )
}

export default Nav_Tabbar

const styles = StyleSheet.create({})