import React from 'react'
import { useSelector } from 'react-redux'
import Logout from './Login/Logout'
import Signup from './Login/Signup'
import { selectUser } from './Login/UserSlice'

const App = () => {
  let user = useSelector(selectUser)
  return (
    <div>
      
     {
       user ?  <Logout/>:<Signup/>
     }


    </div>
  )
}
export default App