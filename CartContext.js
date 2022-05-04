import React, {createContext, useEffect, useState} from 'react';
import { getMedicine } from './assets/medicine/medicine_data';
import {getBrand_data} from './assets/brand_data/brand_data'
import { getLab_data } from './assets/lab_data/lab_data';
import { getDevice_data } from './assets/product_data/device_data';
import { getTrending_data } from './assets/trending_data/trending_data';
import auth from '@react-native-firebase/auth';

export const CartContext = createContext();
export function CartProvider(props) {
  const [items, setItems] = useState([]);
  
  const [user,setUser] =useState()
  
  useEffect(async() =>{
    setUser(auth().currentUser)
  },[])
  

  
  function removeItemToCart(id)
  {
     setItems((prevItems) => {
       return prevItems.filter((item) => (item.id !== id));
     });
   }

   function removeAll(id)
{
  setItems([]); 
}


    function addItemToCart(id) {
    const product = getMedicine(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
        return [...prevItems, {
              id: product.id,
              Quantity: 1,
              product,
              totalPrice: product.rupees,
              date: new Date().toLocaleDateString()
            }];
          }
          else { 
            return prevItems.map((item) => {
              if(item.id == id) {
                item.Quantity++;
                item.totalPrice += product.rupees;
              }
              return item;
            });
          }
        });
      }

      function addItemToCart1(id) {
        const product = getBrand_data(id);
        setItems((prevItems) => {
          const item = prevItems.find((item) => (item.id == id));
          if(!item) {
            return [...prevItems, {
                  id: product.id,
                  Quantity: 1,
                  product,
                  totalPrice: product.rupees,
                  date: new Date().toLocaleDateString()
                }];
              }
              else { 
                return prevItems.map((item) => {
                  if(item.id == id) {
                    item.Quantity++;
                    item.totalPrice += product.rupees;
                  }
                  return item;
                });
              }
            });
          }


          function addItemToCart2(id) {
            const product = getLab_data(id);
            setItems((prevItems) => {
              const item = prevItems.find((item) => (item.id == id));
              if(!item) {
                return [...prevItems, {
                      id: product.id,
                      Quantity: 1,
                      product,
                      totalPrice: product.rupees,
                      date: new Date().toLocaleDateString()
                    }];
                  }
                  else { 
                    return prevItems.map((item) => {
                      if(item.id == id) {
                        item.Quantity++;
                        item.totalPrice += product.rupees;
                      }
                      return item;
                    });
                  }
                });
              }

              function addItemToCart3(id) {
                const product = getDevice_data(id);
                setItems((prevItems) => {
                  const item = prevItems.find((item) => (item.id == id));
                  if(!item) {
                    return [...prevItems, {
                          id: product.id,
                          Quantity: 1,
                          product,
                          totalPrice: product.rupees,
                          date: new Date().toLocaleDateString()
                        }];
                      }
                      else { 
                        return prevItems.map((item) => {
                          if(item.id == id) {
                            item.Quantity++;
                            item.totalPrice += product.rupees;
                          }
                          return item;
                        });
                      }
                    });
                  }

                  function addItemToCart4(id) {
                    const product = getTrending_data(id);
                    setItems((prevItems) => {
                      const item = prevItems.find((item) => (item.id == id));
                      if(!item) {
                        return [...prevItems, {
                              id: product.id,
                              Quantity: 1,
                              product,
                              totalPrice: product.rupees,
                              date: new Date().toLocaleDateString()
                            }];
                          }
                          else { 
                            return prevItems.map((item) => {
                              if(item.id == id) {
                                item.Quantity++;
                                item.totalPrice += product.rupees;
                              }
                              return item;
                            });
                          }
                        });
                      }

                  



      function increaseItemQuantity(id)
      {
         setItems((prevItems) => {
           return prevItems.map((item) => {
             if(item.id === id) {
               item.Quantity++;
               item.totalPrice += item.product.rupees;
             }
             return item;
           });
     
         });
       }

         function decreaseItemQuantity(id)
         {
            setItems((prevItems) => {
              return prevItems.map((item) => {
                if(item.id === id) {
                  item.Quantity--;
                  item.totalPrice -= item.product.rupees;
                }
                return item;
              });
        
            });
          }


      
      function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.Quantity), 0);
  }

  function getTotalPrice() {
      return items.reduce((sum, item) => (sum + item.totalPrice), 0);
  }  

  return (
    <CartContext.Provider 
      value={{user,items,setItems, getItemsCount, addItemToCart, getTotalPrice, removeItemToCart, removeAll,increaseItemQuantity,decreaseItemQuantity,addItemToCart1, addItemToCart2,addItemToCart3,addItemToCart4}}>
      {props.children}
    </CartContext.Provider>
  );
}