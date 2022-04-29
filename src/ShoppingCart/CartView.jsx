import { Button } from '@mui/material'
import React from 'react'
import {Card,Row,Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const CartView = () => {
    let cart =useSelector(state=>state)
    let dispatch= useDispatch()
     
  return (
    <>
    <Row>

      <Col xs={4} sm={4} xxl ={4}> 
     {cart.map((items)=>{
         items.count= 1;
         return(
             <Card key={items.id}  className="pt-5" width="18rem">
                 <img src={items.img} alt ="...." width="300px"/>
                <Card.Body>
                 <h2>{items.Brand}</h2>
                 <p> Quantity: <b>{items.Quantity}</b></p>

                 <Button size="large"  variant= "outlined"color="success" onClick={()=>dispatch({type:"INCS", payload:items})}>+</Button>
                 <Button  size="large"   variant= "outlined"color="error"onClick={()=>dispatch({type:"RMV", payload:items})}>-</Button>
                 <p> price: $<em>{items.price}</em></p>
                 <p>  Total price: <b> {items.Quantity*items.price}   </b></p>
                 <Button variant="contained" size="large"color="success">Checkout</Button>
                 </Card.Body>
             </Card>
         )
     })}
     </Col>
     </Row>
    
    </>
  )
}

export default CartView