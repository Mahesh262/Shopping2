import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Card, Col, Navbar, } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
//  import { Data } from './CartData';
import { GiShoppingBag } from "react-icons/gi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from 'react-router-dom'
import './Cart.css'
import axios from 'axios';
const CartProduct = () => {
    const [products,setProducts] = useState([])
    let cartList = useSelector(state=>state)
        console.log(cartList)
       let dispatch =useDispatch()
        useEffect (()=>{
                axios.get('https://fakestoreapi.com/products').then((response)=> setProducts(response.data)).catch(Error=>console.log("somethin" + Error))
        },[])
          console.log(products.map((esa)=> { return esa.id}))
  return (
    <>
    <Navbar>
        <Col xs={10} >
        <HiOutlineMenuAlt4 /> 
        </Col>
        <Col xs={2}>
        <Link to= "/Cart">
        <GiShoppingBag style={{fontSize:"20px",color:"yellowgreen"}}/>
        </Link>
        </Col>
        
    </Navbar>
    <div className='container-fluid' id="prod">

   
    {products.map((cart)=>{
        return <Card key={cart.id} id= "prods">

             
                <div style={{width:"22rem"}}>
                <img src= {cart.image} alt = ".." style ={{width:"18rem"}} className="img-top"/>
                   <Card.Header>  
                     <h4>{cart.title}</h4>
                       </Card.Header> 
<Card.Body>
 
  <h5><strong>
  ${cart.price}
  </strong>
       </h5>
       <p> 
       {cart.description}
           </p> 

</Card.Body>
                    
<Card.Footer>   <Button variant="contained" color='success' onClick={()=>dispatch({type:"ADD",payload:cart})}>Add To Cart</Button> </Card.Footer>
                
            </div>
        </Card>
       
    })}
      </div>
    </>
  )
}

export default CartProduct