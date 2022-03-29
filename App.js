import { StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer  } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Nav_Stack from './Navigation/Nav_Stack';


const App = () => {
  return (
   <NavigationContainer>
     <Nav_Stack/>
   </NavigationContainer>
     
    )
}

export default App

const styles = StyleSheet.create({})