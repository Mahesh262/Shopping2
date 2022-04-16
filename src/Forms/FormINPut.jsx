import React, { useState } from 'react'
import './Forminput.css'
const FormINPut = (props) => {
    const [focused, setFocused] = useState(false);
    const {label,errorMessage, onChange, id, ...inputProps}= props

     const handlefocus = (e)=>{
         setFocused(true);
     }
  return (
    <>
    <div className='formInput'>
        <label>{label}</label>
        <input
           {...inputProps}
           onChange={onChange}
           onBlur={handlefocus}
           onFocus={()=> 
               inputProps.name === "confirmPassword" && setFocused(true)
           }
            focused = {focused.toString()}

        
        />
        <span>{errorMessage}</span>
    </div>
    
    
    
    </>
  )
}

export default FormINPut