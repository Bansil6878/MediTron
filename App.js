import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Nav_Stack from './Navigation/Nav_Stack'
import { NavigationContainer  } from '@react-navigation/native';

const App = () => {
  return (
   <NavigationContainer>
     <Nav_Stack/>
   </NavigationContainer>
     
    )
}

export default App

const styles = StyleSheet.create({})