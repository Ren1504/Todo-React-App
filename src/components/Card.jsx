import React from "react";
import './Card.css'

function Card(todo)
{    
    function handleDelete()
    {
        todo.onDelete(todo.id);
    }


    return(
        <div>
            <div className="card" style = {{width:"25rem"}}>
                <div className = "card-body">
                    <h5 className = "card-title">{todo.title}</h5>
                    <p className = "card-text">{todo.content}</p>
                    <button onClick = {handleDelete} className = "delete-button btn btn-outline-danger btn-lg">Delete</button>
                </div>
                
            </div>
        </div>
    )
}

export default Card