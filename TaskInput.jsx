import React, {useEffect} from 'react'
import {v4 as uuidv4} from "uuid" ; 
const TaskInput = ({input, setInput, todos, setTodos, editTodos, setEditTodo }) => {

    const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => 
        todo.id === id ? {title, id, completed} : todo
    );
    setTodos(newTodo); 
    setEditTodo("");
    }

useEffect(() => {
    if(editTodos){
        setInput(editTodos.title);
    }else{
        setInput(""); 
    }
}, [setInput, editTodos])

    const onInputChange = (e) => {
        setInput(e.target.value); 
    }; 
    const onTakeInputSubmit = (e) =>{
        e.preventDefault(); 
        if(!editTodos){
            setTodos([...todos, {id: uuidv4(), title: input,completed: false }]); 
            setInput(""); 
        }else{ 
            updateTodo(input, editTodos.id, editTodos.completed)
        }
        
    }   

  return (
    <form onSubmit = {onTakeInputSubmit}>
        <input type = "text" placeholder = "Enter a Todo..." 
        className = "task-input" 
        value = {input} required
        onChange = {onInputChange}
        />
        <button className = "button-add" type = "submit">
           {editTodos ? "OK" : "Add"}
        </button>
    </form>
  )
}

export default TaskInput