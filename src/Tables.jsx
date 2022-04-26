import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const Tables = () => {
     const [users, setUsers] = useState()
      useEffect(()=>{
          axios.get("https://jsonplaceholder.typicode.com/users").then(response=>setUsers(response.data)).catch(error=>console.log(error))
      },[])
       console.log(users)
  return (
    <>
    
     <Table>
         <thead>
             <tr>
                 <th>ID</th>
                 <th>Name</th>
                 <th>UserName</th>
                 <th>Email</th>
                 <th>City</th>
                 <th>Suite</th>
                 <th>ZipCode</th>


             </tr>
         </thead>
     </Table>
 {users.map((items,index)=>{
      return (
        <Table striped bordered hover key={items.id}>
  <tbody>
      <tr>

      <td>{items.id}</td>
      <td>{items.name}</td>
      
    <td>{items.username}</td>
      <td>{items.email}</td>
      <td>{items.address.city}</td>
      <td>{items.address.suite}</td>
      <td>{items.address.zipcode}</td>
      </tr>

  </tbody>

    </Table>
      )
  })}
   
   
    
    </>
  )
}

export default Tables