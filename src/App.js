import { Container,Box,Paper, Typography, Button} from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,
  decrement,
  incrementBy,
  decrementBy,
 } from './Redux toolkits/ShpReducers';
const App = () => {
  const dispatch =useDispatch();
  const counter = useSelector((state)=>state.counter.counter)
  console.log(counter)
  return (
    <>
    <Container component={Box} py={5} px={4}>
      <Paper component={Box} p={3} align="center">
       <Typography align='center' variant="h1">{counter}</Typography>
       <Button variant='contained' onClick={()=>dispatch(increment())}>increment</Button>
       <Button onClick={()=>dispatch(decrement())}>Decrease</Button>
       <Button onClick={()=>dispatch(incrementBy(10))}>incrementBy 10</Button>
       <Button onClick={()=>dispatch(decrementBy(5))}>decrementBy 5</Button>
      </Paper>
    </Container>
    
    </>
  )
}

export default App