import { StyleSheet, Text, View,statusbar } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Drawer_main from './Drawer_main';
import Nav_Stack from './Nav_Stack';


const Drawer=createDrawerNavigator();

const Nav_Drawer = () => {
  return (
        <Drawer.Navigator screenOptions={{headerShown:!true}} drawerContent={props => <Drawer_main {...props} />}  >
            <Drawer.Screen name="Nav_Stack" component={Nav_Stack}/>
            
        </Drawer.Navigator>    
  )
}

export default Nav_Drawer;


const styles = StyleSheet.create({})