import React from 'react'
import { Row } from 'react-bootstrap'
import ItemCard  from './ItemCard'
import Data from './Data'
const Shoping = () => {
    console.log(Data.productData)
  return (
    <>
    <h1>shopping Cards</h1>
     <Row>
        {Data.productData.map((items,index)=>{
      return <ItemCard  key = {index} title = {items.title} image = {items.image} desc= {items.desc} products={items} price = {items.price} />

        })}
     </Row>
    
    </>
  )
}

export default Shoping