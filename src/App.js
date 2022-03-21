import React from 'react'
import { Route, Routes } from 'react-router'

import './App.css'
import CartProduct from './ShoppingMAll/CartProduct'
import CartView from './ShoppingMAll/CartView'
const App = () => {
  return (
    <>
    Hello
 
    <Routes>
    <Route path='/' element = {<CartProduct/>}/>
      <Route path='/Cart' element = {<CartView/>}/>
    </Routes>
   
    </>
  )
}

export default App