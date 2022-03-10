import React from 'react'
import { useFormik } from 'formik';
const Login = () => {
  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:''
    },
    onSubmit:(values) =>{
      console.log('form submit', values)
    },
    validate:(values) =>{
      let errors = {};
      if(!values.name){
        errors.name = "Name Rquired"
      }
      if(!values.email){
        errors.email = "Email Rquired"
      }
      if(!values.password){
        errors.password = "Password Rquired"
      }
      return errors;
    }
   
  })
  
  return (
    <>
     <div style={{width:'100%',paddingTop:"50px",display:"flex",alignItems:'center', justifyContent:"center", flexGrow:'inherit'}}>
    <form autoComplete="off" onSubmit={formik.handleSubmit} className="bg-secondary">
        <label>Name</label>
        <input type="text" name="name" id="name"
        value={formik.values.name} className="form-control" onChange={formik.handleChange}/>
        {formik.errors.name?<div className="errors">{formik.errors.name}</div>:null}

        <label>E-mail</label>
        <input type="email" name="email" id="email"
        value={formik.values.email} className="form-control" onChange={formik.handleChange}/>
        {formik.errors.email?<div className="errors">{formik.errors.email}</div>:null}

        <label>Password</label>
        <input type="password" name="password" id="password" className="form-control"
        value={formik.values.password} onChange={formik.handleChange}/>
        {formik.errors.password?<div className="errors">{formik.errors.password}</div>:null}

        <button type="submit" className="form-control btn-success">Register</button>

      </form>
      </div>

    </>
  )
}

export default Login