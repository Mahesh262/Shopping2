import { Button } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from "./TodoActions";

function TodoItem({ todo }) {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch();
    
      console.log(editable)
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <>#{todo.id.length > 1 ? todo.id[2] : todo.id}</>
                <div className="col">
                    {editable ?
                        <input type="text" className="form-control"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}

                        />
                        :
                        <h4> {todo.name}</h4>}
                </div>
                <Button  variant="contained" color="info" className="btn m-2"
                    onClick={() => {
                        dispatch(updateTodo({
                            ...todo,
                            name: name
                        }))
                        if(editable) {
                         setName(todo.name);   
                        }
                        setEditable(!editable);
                      

                    }}
                >{editable?"Update":"Edit"}</Button>
                <Button variant='contained' color='info' className="btn btn-danger m-2"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                >Delete</Button>
            </div>
        </div>
    )
}

export default TodoItem