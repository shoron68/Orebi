import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
let ApiData = createContext()

const ContextApi = ({children}) => {
    let [product,setProduct] =useState([])
    let getData = ()=>{
        axios.get ("https://dummyjson.com/products").then ((response)=>{
            setProduct(response.data.products);
        })
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
    <ApiData.Provider value={product}>
        {children}
    </ApiData.Provider>

    </>
  )
}

export  {ContextApi,ApiData}