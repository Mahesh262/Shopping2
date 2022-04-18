import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card,Row,Col} from 'react-bootstrap'
import {Link} from "react-router-dom"
import "./Movies.css"
const Movies = () => {
    const [movie, setData] = useState([])

        useEffect(()=>{
        axios.get('https://imdb-api.com/en/API/MostPopularMovies/k_sudl4l70')
          .then(response => setData(response.data)).catch(error=>console.log(error))
        },[])
       console.log(movie)

   

  return (
    <>
   
     
     <Row>
    <h3>Genere 1</h3> 
      {movie.items.map((data)=>{
       return  <Col sm={4} xl={3} className="d-flex justify-content-center" key={data.id}>
       <Card style ={{width:"18rem", height:"20rem"}} >
      <Link to={"/Details/"+data.id}> <img src= {data.image} alt={data.title} style ={{width:"100%",}}/></Link>
       </Card>
       </Col> 
     })} 
      <Row className="pt-5">
     <h4>Gnenre 2 </h4>
     {movie.map((data)=>{
       return  <Col sm={4} xl={3} className="d-flex justify-content-center" key={data.id}>
       <Card  className="product-card">
      <Link to={"/Details/"+data.id}> <img src= {data.image} alt={data.title} style ={{width:"100%",}}/></Link>
       </Card>
       </Col> 
     })} 
     </Row>
  </Row> 
    </>
  )
}


export default Movies