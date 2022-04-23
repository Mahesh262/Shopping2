import React from 'react'
import { Navbar, NavLink } from 'react-bootstrap'
import { Routes,Route,  } from 'react-router-dom'
import Productdetails from './Productdetails'
import Products from './Products'
import Carts from   "./Carts"
import {Offcanvas,Badge } from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import './Products.css'
const Home = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  


  return (
    <>
<Navbar className='justify-content-between'>
     <NavLink  className='products'>Home</NavLink>   
     <NavLink className='products'>Products</NavLink>   
     <NavLink className='products' onClick={handleShow}> <Badge> <FaShoppingCart/>  </Badge> 
     </NavLink>   
    </Navbar> 
      <Routes>
          <Route path="/" element={<Products/>} />
            <Route path='/Productdetails/:id' element={<Productdetails/>}/>
      </Routes>
   {/*  it show the  carts products  */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Carts/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Home