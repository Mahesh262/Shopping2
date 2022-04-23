import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
 import {Col,Row,Card} from 'react-bootstrap'
const Carts = () => {
    let cartList = useSelector(state=>state) 
    console.log(cartList.map(xs=>xs.quantity))
   let dispatch = useDispatch()
  
//  It shows the total value
   const addition =(acc, currentvalue)=>acc + currentvalue.price * currentvalue.id;
   const total = cartList.reduce(addition,0);
   console.log(total)
  return (
    <>
     <Row  className="pt-5">
         <h4> <b>  Added Cart Details </b></h4>
       { cartList.length > 0 ? cartList.map((cartList)=>{
               cartList.quantity= 1;
          return <Card  className="justify-content-center" style ={{width:"20rem"}} key ={cartList.id}>
               <img src= {cartList.image} alt ={cartList.title}  style={{width:"100%"}}/>
            <Card.Body>
                <button className='addcart'  onClick={()=>dispatch({type:'Increase', payload:cartList})}>+</button>
               <button className='removecart'onClick={()=>dispatch({type:"Decrease", payload:cartList})}>-</button> 
             </Card.Body> 
                <h2>{cartList.title}</h2>
             <Col> <p> {cartList.id}</p></Col>  
              <p>{ cartList.id* cartList.price}</p> 
              <Card.Footer>
               <button className='removecart'onClick={()=>dispatch({type:"Remove", payload:cartList})}>Remove</button> 

                </Card.Footer>  
          </Card>
          
         }): null} 
           {total > 0 && <h2>Total :{total}</h2>}
          </Row>
    </>
  )
}

export default Carts