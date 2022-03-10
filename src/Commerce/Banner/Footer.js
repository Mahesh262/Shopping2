import React from 'react'
import './Footer.css'
import { Navbar,Container,Nav,NavbarBrand} from 'react-bootstrap'
import {AiFillFacebook, AiFillInstagram} from  'react-icons/ai'
const Footer = () => {
  return (
    <>
     <div classsName="footer d-flex">
     <Navbar bg="dark" variant="dark">
    <Container className="justify-content-between">
      <Nav.Link href="#home">Social Media</Nav.Link>
      <Nav.Link href="#features">Like</Nav.Link>
      <Nav.Link href="#pricing">Follow Us</Nav.Link>
    </Container>
  </Navbar> 
  <Navbar>
   <NavbarBrand><AiFillFacebook style={{color:'white',fontSize:"30px"}}/></NavbarBrand>
   <NavbarBrand><AiFillInstagram style={{color:'white',fontSize: '30px' }}/></NavbarBrand>
  </Navbar>

       </div>
    </>
  )
}

export default Footer