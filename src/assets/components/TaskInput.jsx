import React from 'react'
import {v4 as uuidv4} from "uuid" ; 
const TaskInput = ({input, setInput, todos, setTodos }) => {

    const onInputChange = (e) => {
        setInput(e.target.value); 
    }; 
    const onTakeInputSubmit = (e) =>{
        e.preventDefault(); 
        setTodos([...todos, {id: uuidv4(), title: input,completed: false }]); 
        setInput(""); 
    }   

  return (
    <form onSubmit = {onTakeInputSubmit}>
        <input type = "text" placeholder = "Enter a Todo..." 
        className = "task-input" 
        value = {input} required
        onChange = {onInputChange}
        />
        <button className = "button-add" type = "submit">
            Add
        </button>
    </form>
  )
}

export default TaskInput