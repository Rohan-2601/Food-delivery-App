import React, { createContext, useState } from 'react'
import { food_items } from './Food';

export const datacontext= createContext();
function UserContext({children}) {
  let [input, setInput]= useState("");
  let [cate, setCate] = useState(food_items);
  let [showCart, setShowCart]= useState(false);
  let data={
    input,
    setInput,
    cate,
    setCate,
    showCart,
    setShowCart
    
  }

  return (
    <div>
      <datacontext.Provider value={data}>
      {children}
      </datacontext.Provider>
    </div>
  )
}

export default UserContext
