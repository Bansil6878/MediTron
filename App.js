import { StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer  } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Nav_Stack from './Navigation/Nav_Stack';
import { CartProvider } from './CartContext';



const App = () => {
  return (
    <CartProvider>
   <NavigationContainer>
     <Nav_Stack/>
   </NavigationContainer>
   </CartProvider>
    )
}

export default App

const styles = StyleSheet.create({})