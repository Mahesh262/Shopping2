import React from 'react'
import { Nav, Navbar,Container, Button,Offcanvas, Badge} from 'react-bootstrap'
import { useCart } from 'react-use-cart'

import "./Banner.css"
import {GiShoppingCart} from 'react-icons/gi'
import CartCalc from './CartCalc'
import Shoping from './Shoping'
const TopBar = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    
    totalItems,
  

}= useCart();


  return (
    <>
    <Navbar  className="bg-warning w-100 justify-content-center" >
    <Navbar.Brand>Site</Navbar.Brand>
        <Container className='container justify-content-around'>
        <Nav.Link id="Topbar">Home</Nav.Link>
        <Nav.Link id="Topbar" onClick= {handleShow}>products </Nav.Link>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Shoping/>
        </Offcanvas.Body>
      </Offcanvas>
       
        <Nav.Link id="Topbar">Store</Nav.Link>
        <Nav.Link id="Topbar">About</Nav.Link>
        <Nav.Link id="Topbar"  onClick={handleShow} > <Badge className='bg-secondary'> <GiShoppingCart 
       
         /> {totalItems}</Badge> </Nav.Link>
        

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Products</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <CartCalc/>
        </Offcanvas.Body>
      </Offcanvas>
        </Container>
        <Navbar>
            <Nav.Link>
                <input type="text"
                className='form-control'/>
            </Nav.Link>
            <Nav.Link>
            <Button>Search</Button>
                 </Nav.Link>
        </Navbar>
    </Navbar>
    </>
  )
}

export default TopBar