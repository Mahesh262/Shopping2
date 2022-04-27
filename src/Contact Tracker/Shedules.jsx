import { ArrowDropDown, ArrowDropUp, Delete, Edit, Label, Search} from '@mui/icons-material'
import { Button,} from '@mui/material'
import React, { useState } from 'react'
import {Row,Col, Modal} from 'react-bootstrap'
import { weeksdata } from './Sidebardata'
import Dates from './Dates'
import './Weeknds.css'
const Shedules = () => {
   const [weeks, setWeeks] = useState(3)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
   <Row>
       <Col xs={8}> <Button variant="contained" color="primary" onClick={handleShow}> Add New Schedule</Button></Col>
       <Col xs= {4}  className="inputs"> <span><Search style={{ fontweight:"100"}}/></span><input type = "text" className='search' placeholder='search your schedule'/></Col>
   </Row>
     <Row className='pt-4'>
        <Col xs= {9}> <h6>Winter Training schedule</h6>
                <span className="captions"><small>4 weeks</small> | <small>12 sessions</small></span>
        </Col>
         <Col xs= {3} className="threeicons"> 
            <span className='edits'><Edit/></span>
            <span className='dels'><Delete/></span>
            <span className="upArrw"><ArrowDropUp style={{ fontWeight:"100"}}/></span>
         </Col>
        <Col>
        </Col>
     </Row>

     {/* weeek details */}
     <Row className="pt-4">
      <Col xs={10} className="weeks"> <div>  <span style ={{opacity:"0.5"}}>Start Date</span> 
      <span><h3>25 january 2020</h3></span> </div> <div> <span style ={{opacity:"0.5"}}>End Date</span> <span><h3>19 February 2020</h3></span>  </div></Col>
       <Col xs={2}>  <Button variant="contained" color="success">Update</Button></Col>

          {/*  weeks  */}
       <Row className='pt-5'>
        {weeksdata.map((item,index)=>{
          return(
            <Col key={index} 
            className={weeks === index ? 'weekends seconds' :"weekends"}
               onClick={()=>setWeeks(index)}
               >
                 <span className={ weeks===index ? 'dots dotsacts': "dotacts"}
                  onClick= {()=>setWeeks(index)}
                 ></span>
              <span>{item.day}  </span> 
            </Col>
          )
        })}
      </Row>
     </Row>

<Row className="pt-5">
  <Row className="pt-3">
     <Col xs={10}>
     <span><h3>Winter Taining schedule</h3></span> 
     <span style={{opacity:"0.5"}}><span>4 weeks</span>|<span>12 Sessions</span></span>
     </Col>
     <Col xs ={2}>
      <span><ArrowDropDown style={{color:"green"}}/></span>
     </Col>
  </Row>
  <Row className="pt-3">
     <Col xs={10}>
     <span><h3>Winter Taining schedule</h3></span> 
     <span style={{opacity:"0.5"}} ><span>4 weeks</span>|<span>12 Sessions</span></span>
     </Col>
     <Col xs ={2}>
      <span><ArrowDropDown style={{color:"green"}}/></span>
     </Col>
  </Row>
  <Row className="pt-3">
     <Col xs={10}>
     <span><h3>Winter Taining schedule</h3></span> 
     <span style={{opacity:"0.5"}}><span>4 weeks</span>|<span>12 Sessions</span></span>
     </Col>
     <Col xs ={2}>
      <span><ArrowDropDown style={{color:"green"}}/></span>
     </Col>
  </Row>
  
  </Row> 
{/* week scheduler */}
  <Modal size = "xxl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
            <label> <b> Schedule Name  </b></label>
            <input type = "text"  classNAme="form-control"placeholder='name'/>
<Col style ={{display:'flex',flexDirection:"row"}}>

<Dates/>
</Col>
             
            </Row>
          
          </Modal.Body>
        <Modal.Footer className='justify-content-center'>
          <Button variant="contained" color="inherit" className="w-50" onClick={handleClose}>
            Close
          </Button>
          <Button variant="contained" className="w-50"  color="success" onClick={handleClose}>
             Create
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Shedules