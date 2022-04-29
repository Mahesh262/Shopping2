import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Row,Col } from 'react-bootstrap'
import data from './Data'
import './Space.css'
const Space = () => {
     const [ space , setSpace] = useState([])
       let urls ="https://api.spacexdata.com/v3/launches?limit=100&launch_success=true"
      useEffect(()=>{
          axios.get(urls).then(response=>setSpace(response.data)).catch(error=>console.log("Error"+ error))
      },[urls])
       console.log(space)
      
    //    filters list 
        const a = space.filter(e=>e.launch_year=== "2014")
         
         const showa = ()=>{
             setSpace(a)
         }
          
       
  return (
    <>
   
    <Row>
        {/* sidebarcolumn  */}
    <Col xs={12} sm={3} xxl={2} className="pt-5">
      <Row>
          <Row>
          <span><h6 style={{fontSize:"20px"}}>SpaceX Launch</h6><p> <b>Programs </b></p></span>
        <span><b>Filters</b></span>
    <Button  variant="contained"color="inherit">Launch</Button>
          </Row>

          {/* years */}
           <Row>
           {data.map((items,index)=>
           {
             return(
                 <Col  xs={6}  sm={6} className="yearsList" key={index}>
                    <Button id="checks" onClick={showa} variant="contained">{items.year}  </Button>  
                 </Col>
             )   
           }
           
           )}
           
           </Row>

           <Row  className='pt-3'> 
          <Button  size="small" variant="contained"color="inherit"> Successful Launch</Button>
           <span className="trus">
            <Button variant="contained" id="checks">True</Button> 
           <Button variant="contained" id="checks">False</Button>
            </span> 
           </Row>
           <Row className="pt-3"> 
         <Button  size="small" variant="contained"color="inherit"> Successful Landing</Button>
          <span className="trus">  
               <Button variant="contained" id="checks">True</Button>
          <Button variant="contained" id="checks">False</Button>
             </span>   
           </Row>

          </Row> 
           

 
  </Col>


     <Col sm={9} xxl={9} >


  
     <Col sm={12}  className="spaces">
 


{/* space crafts launchs  */}
     
  {space.map((items,index)=>{
      return(
          
    <Card   key={index}sm={6} xxl={4} style={{ paddingTop:"10px",width:"18rem",border:"none"}} >
              <img src={items.links.mission_patch} alt ="..."   className="card-img-top"width="50px" />
         <Card.Body>

          <p style ={{color:"blue", fontSize:"20px",textTransform:"uppercase", textAlign:"center"}}> <em><b> #{items.rocket.rocket_name}</b>   </em></p>
          <p> <b> Mission Name:</b>{items.mission_name}</p>
               <p> <b>Mission Launch year :  </b><b> {items.launch_year}</b> </p>
                   <p> <b>Successful Launch: </b> {items.launch_success ? "true":"false"}</p>
                    <span> <b> Successfull Landing  </b>: {items.launch_success ? "true":"false"}</span>
         </Card.Body>
              
      </Card>
      
      )
  })} 
  </Col>

  </Col>
  
    </Row>

    </>
  )
}

export default Space