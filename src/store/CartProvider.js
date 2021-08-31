import React, { useReducer } from "react";
import CartContext from "./cart-context";

const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD: {
      const existingCartIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingItems = state.items[existingCartIndex];

      let updatedItems;
      if (existingItems) {
        const updatedItem = {
          ...existingItems,
          amount: existingItems.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    
    }
    case ACTIONS.REMOVE: {
      const existingCartIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingCartIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartIndex] = updatedItem;
      }
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
    default:
      return state;
  }
};

export default function CartProvider(props) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItemHandler = (item) => {
    dispatch({ type: ACTIONS.ADD, item: item });
  };
  const removeItemHandler = (id) => {
    dispatch({ type: ACTIONS.REMOVE, id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
