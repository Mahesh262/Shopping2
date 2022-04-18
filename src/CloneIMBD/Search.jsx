import React, { useState } from 'react'
import {BsSearch} from "react-icons/bs"
import {Navbar, Row,Col,Button } from 'react-bootstrap'
import axios from 'axios'

const Search = () => {
 const [search, setSearch]= useState([])
   const handlesubmit = (e)=>{
	   e.preventDefault()
	   axios.get(`https://imdb-api.com/en/API/MostPopularMovies/?s=${search}&apikey=k_sudl4l70`).then((response)=> setSearch(response.data)).catch ((error)=>console.log(error))

   }
  return (
    <> 
	 <Navbar id="top-head">
    </Navbar>
	<Row className="d-flex align-items-start">
       <Col><h1>WOOKIE <p> MOVIES </p> </h1></Col>
	  <Col className="d-flex justify-content-center">
		   <form onSubmit={handlesubmit}>
          <input type ="text" className="form-control" name={search ?? ""} onChange={(e)=>setSearch(e.target.value)} placeholder='searchmovies'/>
          <Button className='search-button'type ="submit"> < BsSearch id="search"/></Button>
		  </form>
		  </Col>
		  </Row>

    </>
  )
}

export default Search