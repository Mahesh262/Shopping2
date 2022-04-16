import React, { useState } from 'react'
import FormINPut from './FormINPut'
import axios from "axios";
import "../App.css"
const Newform = () => {


    const [values,setValues]=  useState({
        username:"",
        email:"",
        birthday:"",
        confirmPassword:""
    }) 

     const  inputs = [
         {
            id:1,
            name:"username",
            type :"text",
            placeholder:"Username",
            errorMessage:
            " Username should be 3-16 characters and shouldn't include any special character! ",
            label:"username",
            pattern:"^[A-Za-z0-9]{3,16}$",
            required:true,

         },
         {
            id:2,
            name:"email",
            type :"email",
            placeholder:"Email",
            errorMessage:
            " Enter valid character! ",
            label:"Email",
             pattern:"^[A-Za-z0-9]{3,16}$",
            required:true,

         },
         {
            id:3,
            name:"birthday",
            type :"date",
            placeholder:"Brithday",
            label:"Birthday",
         },
         {
            id:4,
            name:"password",
            type :"password",
            placeholder:"Password",
            errorMessage:
            " Enter valid password! ",
            label:"Password",
             pattern:` ^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$ `,
            required:true,
         },
         {
            id:5,
            name:"confirmPassword",
            type :"password",
            placeholder:"Password",
            errorMessage:
            " Enter valid Matched ",
            label:" Confirm Password",
            pattern:values.password,
            required:true,
         },

     ]
      const onChange = (e)=>{
          setValues({...values,[e.target.name]:[e.target.value]})
      };
      const handleSubmit = (e)=>{
          e.preventDefault()
          axios
      .post("https://reqres.in/api/login.json", {
        values,
      })
      .then((response) => {
        if (values !== "") {
          console.log("data", response.data);
          alert(`Successfully`);
        } else {
          console.log("data", response.data);
          alert("Enter Details");
        }
        console.log("status", response.status);
      })
      .catch((error) => console.log(error));

      }
     
  return (
    <>
     <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormINPut
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    
    </>
  )
}

export default Newform