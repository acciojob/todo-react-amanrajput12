import React, { useState } from "react";
import './../styles/App.css';
import Todo from "./Todo.js";

const App = () => {
  const [inputData, setInputData] = useState("");
  const [todos, setTodos] = useState([]); 

  function AddTodo() {
    console.log("input value", inputData);
    setTodos(prev => [
      ...prev, 
                 
      { id:Date.now(),  text: inputData }    
    ]);
    setInputData("");
  }

  console.log("todos", todos);
  
  function deleteTodo(id){
    console.log("delete todo ",id)
    setTodos(prev=>prev.filter(todo=>todo.id!=id))
  }

  return (
    <div  >
      {/* Do not remove the main div */}
       <div className="App">
      <h3>To-Do-List</h3>
      <section>
        <input
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          type="text"
        />
        <button onClick={AddTodo}>Add Todo</button>
      </section>
      </div>
        {todos.map((todo) =><Todo key={todo.id} todos={todo} deleteTodo={deleteTodo} />)}
    </div>
  );
};

export default App;
