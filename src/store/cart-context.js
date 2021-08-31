import React from 'react';

const CartContext= React.createContext({
  //we usually write this for auto fill and create step 1 //just a blue print please check provider
    items : [],
    totalAmount: 0,
    addItem : (item)=>{},
    removeItem: (id) => {}

});

export default CartContext;