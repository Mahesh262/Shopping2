import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './UserSlice'

const Signup = () => {
    const [name, setName] = useState('')

    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const handlesubmit =(e)=>{
        e.preventDefault();
        dispatch(
            login({
                name:name,
                email:email,
                password:password,
                loggedIn:true
            })
        )
        
    }
  return (
    <>
    <div>
        <form className='login' onSubmit={e=>handlesubmit(e)}>
            <h1>Login-form</h1>

            <input className='from-control' type='text'placeholder="name" value ={name ?? ''} onChange={e=>setName(e.target.value)}/>
            <input className='from-control' type='email'placeholder="Email" value ={email ?? ""} onChange={e=>setEmail(e.target.value)}/>
            <input className='from-control' type='password'placeholder="Password" value ={password ?? ""} onChange={e=>setPassword(e.target.value)}/>
              <Button variant="outlined" color='info' type='submit'>submit</Button>
              
        </form>
    </div>
    
    
    
    </>
  )
}

export default Signup