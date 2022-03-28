import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer  } from '@react-navigation/native';
import Nav_Stack from '../Meditron/Navigation/Nav_Stack';
import 'react-native-gesture-handler';


const App = () => {
  return (
   <NavigationContainer>
     <Nav_Stack />
   </NavigationContainer>
     
    )
}

export default App

const styles = StyleSheet.create({})