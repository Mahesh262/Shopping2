import React, { useEffect, useMemo, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
 import {IoArrowUndoOutline} from 'react-icons/io5'
import axios from 'axios';
import "./Products.css"
import { useDispatch, useSelector } from 'react-redux';
const Productdetails = () => {
  const [currentData, setCurrentData] = useState([])
    //  this id get specific product details using useparams hook
    let {id} = useParams();
     useEffect(()=>{
        axios.get(`http://fakestoreapi.com/products/${id}`)
        .then(response=> setCurrentData(response.data)).catch(error=>console.log(error))
     },[id])
     let cartList = useSelector(state=>state) 
       console.log(cartList)
      let dispatch = useDispatch()
     
  //  It shows the total value
      const addition =(acc, currentvalue)=>acc + currentvalue.price * currentvalue.id;
      const total = cartList.reduce(addition,0);
      console.log(total)



  return (
    <>
      <Link to = '/' className="backside"><IoArrowUndoOutline/></Link>
     <Row className='pt-5 d-flex  align-items-center justify-content-center'>
       <Col>
     <img src={currentData.image} alt={currentData.title} style ={{width:'18rem'}}/>
      <Row> <Col> <button className='addcart' onClick= {()=>dispatch({type:"Add", payload:currentData})}> Add Cart</button> 
      
       </Col>
       


      </Row> 
       </Col>
        <Col>
           <p>{currentData.title}</p>
       <h4> Price $ {currentData.price}</h4>
        <p> Description: <b>{currentData.description} </b></p> 
          
        </Col>
     </Row>
{/* cart details  */}
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

export default Productdetails