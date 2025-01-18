import React, { useContext } from 'react'
import { ApiData, MyApi } from '../components/MyApi'

const Products = () => {
  let data = useContext(ApiData)
  console.log(data);
  return (
    <div>Products</div>
  )
}

export default Products