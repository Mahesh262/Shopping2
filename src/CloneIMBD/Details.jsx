import React,{useState}from 'react'
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import {Row,Col,} from 'react-bootstrap'
import axios from 'axios'

const Details = () => {
   let {id } = useParams();
    const [currentdata, setCurrentData]= useState([])

     React.useEffect(()=>{
        axios.get(`https://imdb-api.com/en/API/MostPopularMovies/k_sudl4l70${id}`)
        .then(response => setCurrentData(response.data)).catch((error)=>console.log(error))
     },[id])
       console.log(currentdata + "hello")
       
  return (
    <>
     <Link to="/"><BiArrowBack/> </Link>
     
         <Row className=" pt-5 d-flex align-items-center justify-content-center">
           <Col sm={6} xl={6}>
           <img src= {currentdata.image} alt={currentdata.title}  style ={{width:"200px"}}/>
           </Col>
           <Col>
           <h5> Tite(rating)</h5>
           <p> {currentdata.category}</p> 
           <h4> Description:
               <p>
           {currentdata.description}
               </p>
                 </h4>
           </Col>
         </Row>
    
    </>
  )
}

export default Details