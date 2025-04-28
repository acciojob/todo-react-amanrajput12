import React from "react";

function Todo({todos,deleteTodo}){
    console.log("in todo comp ",todos)
    return(
        <div className="todo">
            <h5>{todos.text}</h5>
        <button className="btn" onClick={()=>deleteTodo(todos.id)}>Delete</button>
        </div>
    )
}

export default Todo