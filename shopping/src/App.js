import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import GridPRoducts from './Components/GridPRoducts'
import Shppng from './Components/Shppng'
const App = () => {
  return (
    <>
     <BrowserRouter>
     <GridPRoducts/>
   <Routes>
      <Route path ="/shpping" element={<Shppng/>}/>
    </Routes> 


    </BrowserRouter> 
    </>
  )
}

export default App
