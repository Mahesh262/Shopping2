import React from 'react'
import { Row,Col, Card} from 'react-bootstrap'
import {BsFillHeartFill,BsShareFill} from  'react-icons/bs'
const Projects = () => {
  return (
    <>
    <Row className=" d-flex justify-content-center">
     <Col className=" d-flex align-items-center justify-content-center"><h3> <b> Projects  </b> </h3></Col>
    </Row>
    
      <Row>

        <Col>
        <Card className="project1" width="18rem">
          <img src="https://media.gettyimages.com/photos/luxury-clothing-store-for-men-picture-id831656828?s=2048x2048" alt ="..." width="100%"/>
          <Card.Body>
            Parallex
            <p>Static website  </p>
        </Card.Body>
        <Card.Footer style={{display:"flex",gap:"20px", color:"green", fontSize:"25px" ,border:"none"}}>
          <p> <BsFillHeartFill/></p>
          <p>< BsShareFill/></p>
        </Card.Footer>
        </Card>
        
        </Col>
        <Col>
        <Card width="18rem">
          <img src="https://media.gettyimages.com/photos/luxury-clothing-store-for-men-picture-id831656828?s=2048x2048" alt ="..." width="100%"/>
          <Card.Body>
            Parallex
            <p>Static website</p>
        </Card.Body>
        
        <Card.Footer style={{display:"flex",gap:"20px", color:"green", fontSize:"25px" ,border:"none"}}>
          <p> <BsFillHeartFill/></p>
          <p>< BsShareFill/></p>
        </Card.Footer>
        </Card>
        </Col>
      </Row>
    
    </>
  )
}

export default Projects