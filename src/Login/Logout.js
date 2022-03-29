import { Button } from '@mui/material'
import React from 'react'
import {logout, selectUser} from './UserSlice'
import { useDispatch, useSelector, } from 'react-redux'

const Logout = () => {
    const dispatch = useDispatch();
     const datas = useSelector(selectUser)
       console.log(datas.email)
    const handlessubmit =(e)=>{
        e.preventDefault();
         dispatch(
             logout()
         )
     
    }
  return (
    <>
    <div>
    <h1>
    Welcome <span>Home</span>
    <Button className='user_btn' onClick={e=>handlessubmit(e)}>Logout</Button>
    </h1>
    <h2>{datas.email}</h2>
    <h2>{datas.name}</h2>
    </div>
    </>
  )
}

export default Logout