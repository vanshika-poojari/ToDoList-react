import React from 'react'

const TaskList = ({todos, setTodos}) => {
  return (
    <div>

        {todos.map((todo) => {
        
        <li className = "list-item" key = {todo.id}>
            <input type= "text" 
            value = {todo.title} 
            className = "list" 
            onChange = {(e) => e.preventDefault()} 
            />
            <div>
                <button className = "button-complete task-button">
                    <i className = "fa fa-check-circle"></i>
                </button>

                <button className = "button-edit task-button">
                    <i className = "fa fa-check-edit"></i>
                </button>

                 <button className = "button-delete task-button">
                    <i className = "fa fa-check-trash"></i>
                </button>
            </div>
                </li>
                })}
           
    </div>
  )
}

export default TaskList