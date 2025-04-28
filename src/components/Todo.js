import React from "react";

function Todo({todos,deleteTodo}){
    console.log("in todo comp ",todos)
    return(
        <div className="todo">
            <h3>{todos.text}</h3>
        <button className="btn" onClick={()=>deleteTodo(todos.id)}>Delete</button>
        </div>
    )
}

export default Todo