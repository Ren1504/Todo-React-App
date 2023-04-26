import React, {useState} from "react";
import './Card.css'

function InsertCard(props)
{    
    const [note, setNote] = useState({title:"",content:""});

    function handleChange(e)
    {
        const{name,value} = e.target;

        setNote(prev => {
            return{
                ...prev,
                [name]: value
            };
        })

    };

    function submitNote()
    {
        props.onAdd(note);
        setNote({
            title:"",content:""
        })
    }
    return(
        <div className = "d-flex">
            <div className="card" style = {{width:"25rem", height:"10rem"}}>
                <div className = "card-body">
                    <input onChange = {handleChange} value = {note.title} name = "title" placeholder = "Enter Title" className = "card-title"/>
                    <input onChange = {handleChange} value = {note.content} name = "content" placeholder = "Enter Content..." className = "card-text"/>
                    <button onClick = {submitNote} className = "add-button btn btn-warning btn-lg">ADD</button>
                </div>
            </div>
        </div>
    )
}

export default InsertCard