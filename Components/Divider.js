import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Divider = () => {
  return (
    <View style={styles.divider}>
    </View>
  )
}

export default Divider

const styles = StyleSheet.create({
    divider:{
        borderWidth:0.5,
        borderBottomColor:"#e3e1e1",
        width:300,
        marginLeft:-70
    }
})