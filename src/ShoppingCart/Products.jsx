
import React from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Row,Card,Col, Navbar,Nav } from 'react-bootstrap'
import data from './Data'
import { Link } from 'react-router-dom'
import './Products.css'

const Products = () => {
     const [shops, setShops]= React.useState(data)
    const carts = useSelector(state=>state)
    const dispatch = useDispatch()
    console.log(carts)


   const filtered = (cartItems)=>{
       let result = shops.filter((items)=>{
           return items.type === cartItems
       })
       setShops(result)
   }  
  return (
    <>

    <Row>
 <Row>
     <Navbar bg="dark">
         <Nav.Link  className="text-light" onClick={()=>filtered('Men')}> Men's</Nav.Link>
         <Nav.Link className="text-light" onClick={()=>filtered('Women')}> WOMENS</Nav.Link>
         <Nav.Link className="text-light" onClick={()=>filtered('Kids')}>KIDS</Nav.Link>
     </Navbar>
 </Row>
 <Row>
     <Col className ="banners">
         <h2  style ={{color:'#0cbaba'}}> If You Bought It on Sale, <small  style ={{color:"#eec0c6"}}>  You Can save Your Money </small> </h2>
     </Col>
      
 </Row>
   <Row>

   
    {shops.map((items)=>{
        return(
   <Col xs={6} sm={4} key={items.id}>
<Card >
    <h3>  <Link to ={"/CartView/"+items.id}><img src={items.img} alt ="..." width="300px" onClick={()=>dispatch({type:"ADD",payload:items})}/>  </Link></h3>
    <h5>{items.Brand}</h5>
    <h6> <Button onClick={()=>dispatch({type:"ADD", payload:items})}> AddCart </Button></h6>
    
</Card>
</Col>

        )
    })}
    </Row>

    <Row>
        <Row >About</Row>

        
    </Row>
 </Row>
    </>
  )
}

export default Products