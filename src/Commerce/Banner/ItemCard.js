import React from 'react'
import  {Card,Button, Col} from 'react-bootstrap'
import './Card.css'
import { useCart } from 'react-use-cart'
const Home = (props) => {
  const {addItem} = useCart();
  return (
    <>
    <Col>
   
    <Card style={{ width: '20rem',color:'black',background:'#91e9ea'}}>
  <Card.Img variant="top" src={props.image} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text >
       {props.desc}
    </Card.Text>
  </Card.Body>
  <Card.Footer>
       <h5>${props.price}</h5>
      <Button onClick={()=>{addItem(props.products)}}>AddCart</Button>
  </Card.Footer>

</Card>
</Col>
    
    </>
  )
}

export default Home