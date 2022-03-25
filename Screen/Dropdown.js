import { View, Text,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = () => {


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState();
    const [items, setItems] = useState([
      {label: 'Ahmedabad', value: 'Ahmedabad'},
      {label: 'Surat', value: 'Surat'},
      {label: 'Rajkot', value: 'Rajkot'},
      {label: 'Vadodra', value: 'Vadodra'},
      {label: 'Bhavnagar', value: 'Bhavnagar'},
      {label: 'Jamnagar', value: 'Jamnagar'},
      {label: 'Surendrnagar', value: 'Surendrnagar'},
      {label: 'Gndhinagar', value: 'Gndhinagar'},
      {label: 'valsad', value: 'valsad'},
      {label: 'Kutch', value: 'Kutch'},
      
    ]);


  return (
    <View>
      <DropDownPicker
placeholder="Select City"
dropDownDirection='down'
autoScroll={true}
style={styles.dropdown}
    open={open}
    value={value}
    items={items}
    setOpen={setOpen}
    setValue={setValue}
    setItems={setItems}
    />
    </View>
  )
}

export default Dropdown

const styles = StyleSheet.create({
    dropdown:{
      marginTop:38,
      width:150,
      height:35,
      marginLeft:10
    }
    
    })