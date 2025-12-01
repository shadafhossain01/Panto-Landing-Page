import React, { useState } from "react";
import { createContext } from "react";

export const Carts=createContext()

const CartContext = ({children}) => {
    const [cartItem,setCartItem]=useState([])
  return <Carts.Provider value={{ cartItem, setCartItem }}>{children}</Carts.Provider>;
};

export default CartContext;
