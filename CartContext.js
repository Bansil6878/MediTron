import React, {createContext, useState} from 'react';
import { getMedicine } from './assets/medicine/medicine_data';
import {getBrand_data} from './assets/brand_data/brand_data'

export const CartContext = createContext();
export function CartProvider(props) {
  const [items, setItems] = useState([]);
  
  
  function removeItemToCart(id)
  {
     setItems((prevItems) => {
       return prevItems.filter((item) => (item.id !== id));
     });
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
      value={{items,setItems, getItemsCount, addItemToCart, getTotalPrice, removeItemToCart, increaseItemQuantity,decreaseItemQuantity,addItemToCart1,}}>
      {props.children}
    </CartContext.Provider>
  );
}