import React from 'react'
import { Button, Col, Container,Row } from 'react-bootstrap';
import { useCart } from 'react-use-cart'
const CartCalc = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
        cartTotal


    }= useCart();
    if(isEmpty){
        return <h1 style= {{color:'black'}}>your cart is Empty</h1>
    }
  return (
    <>
     <Container>
         <h1 style= {{color:'black'}}>cart {totalUniqueItems},totalItems{totalItems}</h1>
         <Row>
          {items.map((item, index)=>{
              return <Row key={index} >
                   <Col>{<img src={item.image} alt ='..' width="200px"/>} {item.title}</Col>
                   <Col style = {{color:"black"}}>{item.title}</Col>
                      <Col style={{color:'black'}}>${item.price}</Col>
                   <Col style = {{color:"black"}}>Quantity({item.quantity})</Col>
                     <Col><Button onClick={()=>{ updateItemQuantity(item.id,item.quantity-1)}} className="btn btn-warning">-</Button></Col>
                     <Col><Button onClick={()=>{updateItemQuantity(item.id,item.quantity+1)}} className='btn btn-success'>+</Button></Col>
                     <Col><Button onClick= {()=>{removeItem(item.id)}} className='btn btn-danger'>removeItem</Button></Col>

                          <Col>
                              <h2 style={{color:'black'}}> <b>Total price </b> ${ cartTotal}</h2>
                          </Col>
                          <Col>
                              <h2 style= {{color:"white"}}  className= "btn btn-danger" onClick={()=>emptyCart(item.id)}>Clear</h2>
                          </Col>
                  </Row>

          })}
         </Row>
     </Container>

    </>
  )
}

export default CartCalc