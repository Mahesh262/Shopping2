import React from 'react'
import { Nav } from 'react-bootstrap'

const Productsbar = () => {
  return (
    <>
     <Nav className="justify-content-around" activeKey="/home">
    <Nav.Item style = {{fontSize:'17px',color:"white"}}>
      <Nav.Link style = {{color:'white'}} to="/Shoping">A Products</Nav.Link>
    </Nav.Item>
    <Nav.Item style = {{fontSize:'17px'}}>
      <Nav.Link style = {{color:'white'}} eventKey="link-1">Top sales</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link  style = {{color:'white'}}  eventKey="link-2">Discounts</Nav.Link>
    </Nav.Item>
  </Nav>
    </>
  )
}

export default Productsbar