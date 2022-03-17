import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
// import Shppng from './Shppng'

const GridPRoducts = () => {
   
   const productsLIST = useSelector(state=>state.product)
  return (
    <>
    <Link to ="/shpping">Hello</Link>
{productsLIST.map((product)=>{
return <ProductCard key={product.id} product={product}/>
})}
   


    
    </>
  )
}

export default GridPRoducts