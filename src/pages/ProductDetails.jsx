import React, { useContext, useEffect, useState } from 'react'
import { ApiData, MyApi } from '../components/MyApi'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const ProductDetails = () => {
    let targetID = useParams();
    let [singleID, setSingleID] = useState({})
    let getData = ()=>{
      axios.get(`https://dummyjson.com/products/${targetID.id}`).then((response)=>{
        setSingleID(response.data)
      });
    };
    useEffect(()=>{
      getData()
    },[])
  return (
    <div className="details">
      <h2>{singleID.title}</h2>
      <img src={singleID.thumbnail} alt="" />
      
    </div>
  )
}

export default ProductDetails