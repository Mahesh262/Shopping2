import React, { useState } from 'react'
import { ArrowDropUp} from '@mui/icons-material'
import { Button } from '@mui/material'
import { SidebarData } from './Sidebardata'
import './Dashboard.css'
const TopNav = () => {
   const [selected, setSelected] = useState(3)
     
  return (
    <>
     <div className='sidebar'>
    <div className = "Logo">
       <span> <h1>Logo</h1></span>
    </div>

    {/* Sidebar menu */}
  <div className='menu'>
      {SidebarData.map((item,index)=>{
        return (
       <div className={selected === index ? 'menuitem active' : 'menuitem'} 
       
       onClick={()=>setSelected(index)}
       key={index}>
   <div className='icons'><item.icon/></div> 
   <span>{item.header}</span>

  </div>
        )
      })}
  </div>
     <div className="sidefooter">
       <span>Select Your Team</span> 
       <div className='herobutton'><Button varaint= "contained" color="success"endIcon={<ArrowDropUp  style ={{fontSize:"25px"}} color='primary' />}> Team Name </Button></div>
     </div>
     </div>
    </>
  )
}

export default TopNav