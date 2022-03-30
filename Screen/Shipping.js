import { StyleSheet, Text, View, Image, FlatList} from 'react-native'
import React,{useState,useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';


const Shipping = () => {
 
// const navigation = useNavigation();


const [data, setData] = useState(null);

const[newData,setNewData]=useState();

useEffect(() => {
  get();
}, []);

const get = async () => {
    // var list = [];
    {console.log(data)}

    const snapShot = await firestore().collection('AllProducts').get()
   .then(snapshot => {
      snapshot.forEach(doc => {
        const data = doc.data();
        console.log(doc.id, data);
        setData(doc.id);
        setNewData(data);
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  };

const Package = () => {
 
  setInterval(() => {
  Package();
  }, 1000);

  
}
return (
  <>
    <View>
    
   
    <View>
        <Text>Your Order {data} has been successfully Recevied</Text>
        </View> 

      
    
    </View>
</>
);
};

export default Shipping;

const styles = StyleSheet.create({

});
