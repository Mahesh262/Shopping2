import { Button} from '@mui/material'
import React from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from './ActionProdutcs'

const Shppng = () => {
  var cartList=useSelector(state=>state.cart)
     console.log(cartList.map((cartList)=> cartList.img))
   var dispatch = useDispatch()

  return (
    <>
    <div>
    <Button variant='fullfilled' color='secondary' > {cartList.length}</Button>
    {cartList.map((cartList,index)=>{
      return <Card key={index}>
      <Card.Header> {cartList.id}</Card.Header>
      <Card.Body> hello</Card.Body>
      <Card.Footer>
      <Button variant='contained' color="warning" onClick={()=>dispatch(removeCart())}>Delete </Button>
      
      </Card.Footer>
    </Card>
    })}
    

    </div>
    
    </>
  )
}

export default Shppng