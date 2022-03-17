import { Button } from '@mui/material'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart, removeCart } from './ActionProdutcs'

const ProductCard = ({product}) => {
  console.log(product)
  var  dispatch= useDispatch()
  return (
    <>
    <Row>
     <Col>
     <Card style={{width:"18rem"}}>
     <Card.Header> <img src={product.img}
      alt="muntains"style={{width:"18rem"}} className='image-top'/>
        </Card.Header>
         <Card.Body>

             <h4> price ${product.price}</h4>
             <p>{product.category}</p>
         </Card.Body>
         <Card.Footer>
           <Button variant='fullfilled' color="secondary" onClick={()=>dispatch(addToCart(product))}>Add to Cart</Button>
      <Button variant='contained' color="warning" onClick={()=>dispatch(removeCart())}>Delete </Button>
         
         </Card.Footer>

     </Card>
     
     </Col>
    </Row>
    
    </>
  )
}

export default ProductCard