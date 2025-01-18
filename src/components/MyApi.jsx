import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
const ApiData = createContext();

const MyApi = ({children}) => {
    let [shopdata, setShopData] = useState([])
    let getShopData = ()=>{
        axios.get('https://dummyjson.com/products').then((response)=>{
          setShopData(response.data.products);
          
        })
    }
    useEffect(()=>{
        getShopData()
    },[])
  return (
    <ApiData.Provider value={shopdata}>{children}</ApiData.Provider>
  )
}

export {MyApi, ApiData}