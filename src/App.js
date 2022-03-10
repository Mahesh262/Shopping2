import React from 'react'
import { Container } from 'react-bootstrap'
import Banner from './Commerce/Banner/Banner'
import Productsbar from './Commerce/Banner/Productsbar'
import TopBar from './Commerce/Banner/TopBar'
import { CartProvider } from 'react-use-cart'
import Login from './Commerce/Banner/Login'
import Footer from './Commerce/Banner/Footer'
import Shoping from './Commerce/Banner/Shoping'
const App = () => {
  return (
    <>
    <CartProvider>
     <Container style = {{alignItems:"center",background:'#627680'}}> 
    <TopBar/>
    <Banner/>
    <Productsbar/>
    <Shoping/>
    <Login/>
    <Footer/>
     </Container>
    </CartProvider>
   
    
    </>
  )
}

export default App
