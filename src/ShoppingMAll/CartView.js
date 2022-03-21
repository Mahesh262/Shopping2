import React from 'react'
import { TiArrowBack } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, } from 'react-redux';
import { Row,Card, Container } from 'react-bootstrap';
import { Button } from '@mui/material';
const CartView = () => {
  const cart = useSelector(state=>state)
  console.log(cart)
  let dispatch= useDispatch();
  const addition =(acc, currentvalue)=>acc + currentvalue.price * currentvalue.id;
  
  
  const total = cart.reduce(addition,0);
  console.log(total)
            
  return (
    <>
     <Row>
     <Link to ="/"><TiArrowBack style={{fontSize:"50px"}}/></Link>
     </Row>
    <Container>
      {cart.map((item)=>{
        return <Card key={item.id}>
          <Card.Body>
            <img src= {item.image} alt =".." width="100rem"/>

            <h4> ${item.price}</h4>
            <p> quantity {item.id}</p>
            <p>Total: ${item.price * item.id}</p>
            <Button variant='contained' color="success"
                  onClick={() => dispatch({ type: "REMOVE", payload: item })}
                >
                  Remove
                </Button>
                <Row>
                <Button variant='outlined' color="info"
                  onClick={()=>dispatch({type:"INCREASE",payload:item})}
                >
                  +
                </Button>

                <Button variant='outlined' color="success"
                  onClick={()=>{
                     if(item.quantity >1){
                       dispatch({type:'DECREASE',payload:item})
                     }
                     else{
                       dispatch({type:"REMOVE",payload:item})
                     }
                  }
                }
                >
                  -
                </Button>
                </Row>
                

            </Card.Body>
        </Card>
      })}
      {total > 0 && <h2>Total :{total}</h2>}
    </Container>
    
    
    </>
  )
}

export default CartView