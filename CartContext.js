import React, {createContext, useState} from 'react';
import { getMedicine } from './assets/medicine/medicine_data';

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
      function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.Quantity), 0);
  }

  function getTotalPrice() {
      return items.reduce((sum, item) => (sum + item.totalPrice), 0);
  }  

  return (
    <CartContext.Provider 
      value={{items,setItems, getItemsCount, addItemToCart, getTotalPrice, removeItemToCart}}>
      {props.children}
    </CartContext.Provider>
  );
}