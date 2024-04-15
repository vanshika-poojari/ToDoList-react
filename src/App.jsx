import React, {useState} from "react"; 
import './App.css'
import Header from "./assets/components/Header"; 
import TaskInput from "./assets/components/TaskInput";
import TaskList from "./assets/components/TaskList"; 

function App() {
 
  const[input, setInput] = useState(""); 
  const [todos, setTodos] = useState([]); 
        return(
          <div className="container">
            <div className="app-wrapper">
          <div>
          <Header /> 
          </div>
          <div>
            <TaskInput 
            input = {input}
            setInput = {setInput}
            todos = {todos}
            setTodos = {setTodos}
            />
          </div>
          <div>
            <TaskList todos = {todos} setTodos = {setTodos} />
          </div>
          </div>
          </div>
        )
}

export default App; 
