import { StyleSheet, Text, View,  ScrollView, } from 'react-native'
import React,{ useState } from 'react'
import Divider from '../Components/Divider'
import DropDownPicker from 'react-native-dropdown-picker';


const Doc_details = () => {

    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();
    const [items, setItems] = useState([
      {label: 'Covid', value: 'Covid', }, 
      {label: 'Headache', value: 'Headache'},
      {label: 'Cough', value: 'Cough'},
      {label: 'Fever', value: 'Fever'},
      {label: 'Stomach Pain', value: 'Stomach Pain'},
      {label: 'Loose Motions', value: 'Loose Motions'},
      {label: 'Mental Health', value: 'Mental Health'},
      {label: 'Hairfall', value: 'Hairfall'},
      {label: 'Dark Patches on Skin', value: 'Dark Patches on Skin'},
      {label: 'Acne/Pimples', value: 'Acne/Pimples'},
      {label: 'Missed Period', value: 'Missed Period'},
    

    ]);

  return (
< ScrollView>
<View>
<DropDownPicker
placeholder="Select Symptoms"
dropDownDirection='down'
style={styles.dropdown}
    open={open}
    value={value}
    items={items}
    setOpen={setOpen}
    setValue={setValue}
    setItems={setItems}
    />
    <View style={{marginTop:10,backgroundColor:'white',width:360,height:100}}> 
      <Text style={{marginLeft:10,marginTop:10}}>One of our qualifiled doctor will consult you within 30 min</Text>
    </View>


<View style={{marginLeft:10,marginTop:20}}>
  <Text>In consultation Meditron what gave you ?</Text>
</View>


    <View style={{marginTop:310,backgroundColor:'white'}}> 
        <Text style={{marginLeft:10,marginTop:10,fontSize:16}}>Bill summary</Text>
        <Text style={{marginLeft:10,marginTop:10}}>Consultation fee</Text>
        <Text style={{marginLeft:300,marginTop:-20}}>₹: 350</Text>
        <Divider/>
        <Text style={{marginLeft:10,fontSize:17}}>To be paid</Text>
        <Text style={{marginLeft:290,marginTop:-20,fontSize:17}}>₹: 350</Text>

    </View>

    <Text style={{marginLeft:10,marginTop:10}}>Terms& conditions </Text>

</View>
</ScrollView>
  )
}

export default Doc_details

const styles = StyleSheet.create({
  dropdown: {
  marginTop:20,
  width:350,
  marginHorizontal:5,
 borderColor:'white',

  },
})