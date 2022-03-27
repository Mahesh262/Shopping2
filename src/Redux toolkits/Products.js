import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products, setProducts]= useState([])
    const [isLoading, setISLoading] = useState(true);
   useEffect(()=>{
       const fetchProducts = async()=>{
           try{
               const {data} = await axios.get('https://fakestoreapi.com/products');
               setProducts(data);
               setISLoading(false);
           
           } catch (err){
              console.log(err.message)
           }
       }
       fetchProducts();
    
   },[])
    if(isLoading){
        return console.log("helllo")
    }
  return (
    <>
    
    
    
    
    </>
  )
}

export default Products