import React, { createContext, useState } from 'react'

export const datacontext= createContext();
function UserContext({children}) {
  let [input, setInput]= useState("");
  let data={
    
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
