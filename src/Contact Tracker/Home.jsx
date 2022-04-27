import React from 'react'
import TopNav from './TopNav'
import { Row,Col,} from 'react-bootstrap'
 import './Dashboard.css'
import { Avatar } from '@mui/material'
import {IoIosArrowDown} from 'react-icons/io'
import Shedules from './Shedules'
import benparker from './Images/benparket.png'
const Home = () => {
  return (
    <>
     <Row>
      <Col xs= {4} xl={2}>  <TopNav/>   </Col>
      <Col>
      <div  className='headings'>
          <div className='teams teamsact'>
          <span>Teams</span>
          <span>U<small>23</small></span>
          <span>U<small>19</small></span>
          </div>

          <div  className="profieinfo">
        <Avatar  alt = "benparker"src={benparker}></Avatar>
         <span>Marcus</span>
         <span><IoIosArrowDown/></span>
        </div>
        </div>
        
      <Row>
      <Shedules/>
      </Row>
      </Col>
       
     </Row>
    
    
    
    </>
  )
}

export default Home




