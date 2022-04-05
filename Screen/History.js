import { StyleSheet, Text, View ,ImageBackground,TouchableOpacity,ScrollView,FlatList} from 'react-native'
import React,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';


const History = () => {
  
const navigation = useNavigation();

const [data, setData] = useState({});

useEffect(() => {
  get();
},[]);

const get = async () => {
    var list = [];
    
    const snapShot = await firestore().collection('AddToCart').get();
    
    
    snapShot.forEach(doc => {
        const { ProductName,Price,Ratings} = doc.data();
        list.push({
            
            ProductName: ProductName,
            Price:Price,
            Ratings:Ratings,
        });
    });
    setData(list);
};


return (
  <>
    <View style={styles.container}>
    
  {console.log(data)}

  
    <Text>ProductName: {data.ProductName}</Text>
    {/* <Text>Price: {data}</Text> */}
    {/* <Text>Ratings: {data}</Text> */}

              
    </View>
    
    </>
    
  );
};
export default History

const styles = StyleSheet.create({
    textStyle: {
        borderWidth: 0.8,
        borderColor: '#84cfc5',
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 10,
        width: 310,
        padding: 9,
        color: 'black',
        marginTop:20
      },
      poster: {
        width: 340,
        borderWidth: 2,
        borderColor: '#84cfc5',
        alignItems: 'flex-start',
        marginHorizontal: 8,
        marginTop: '60%',
        height: 300,
      },
      imgStyle: {
        height: 700,
        width: 360,
      },
      btnStyle: {
        borderWidth: 0.8,
        borderRadius: 5,
        borderColor: '#84cfc5',
        width: 100,
        textAlign: 'center',
        marginTop:20,
        marginLeft:110
      },
})