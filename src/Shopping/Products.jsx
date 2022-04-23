import React, {useEffect, useMemo,useState } from 'react'
import axios from 'axios'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './Products.css'
const Products = () => {
    const [product,setProduct] = useState([])
    let cartList = useSelector(state=>state) 
    console.log(cartList)
    let dispatch = useDispatch()
    // It will call products details it will re render the page
    useEffect(()=>{
       axios.get("http://fakestoreapi.com/products")
       .then(response=> setProduct(response.data)).catch(error=>console.log(error))
    },[])
    console.log(product)
    
  return (
    <>

      <Row className='pt-5'>
       {product.map((products)=>{
           return <Col key ={products.id} >
                <Card style ={{width:"18rem"}}>
                <Link to ={"/Productdetails/"+ products.id}><img src={products.image} alt="..." className=" card-img-top" onClick={()=>{ dispatch({type:"Add",payload:products})}}/> </Link>
                     <Card.Header><h5>{products.title}</h5>
                      <button className='addcart' onClick={()=>{ dispatch({type:"Add",payload:products})}}>Add cart</button> 
                     </Card.Header>
                </Card>
           </Col>
       })}
    </Row> 
     
    </>
  )
}

export default Products