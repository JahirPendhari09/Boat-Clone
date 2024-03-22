import React from 'react'
import { Link } from 'react-router-dom'

const ViewProduct = ({products}) => {


  return (
    <div className="flex justify-between m-auto align-center mt-2.5 mb-2.5" style={{width:"95%"}}>
        <h1 className='text-2xl text-blue-700 cursor-pointer'> Best Sellers</h1>
        <Link to={`/products/${products[0]?.name}`} ><p> View All ➡️</p></Link>
    </div>
  )
}

export default ViewProduct
