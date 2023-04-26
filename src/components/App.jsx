import React , {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import todo from "./info.js"
import InsertCard from "./InsertCard";





function App(){

    const [notes,setNotes] = useState([...todo])

    function addNote(newNote)
    {
        setNotes(prev => {
            return [...prev,newNote];
        })
    }

    function deleteNote(id)
    {
        setNotes(prev => {
            return prev.filter((noteItem,index) =>
            {return index !== id})
        })
    }


    return(
    <div>
        <Header />
        <div className = "d-flex p-1 align-items-stretch justify-content-start flex-wrap">
        <InsertCard onAdd = {addNote} />

        {/* {todo.map((todo) => <Card key = {todo.id}
        title = {todo.title}
        content = {todo.content}/>)} */}


        {notes.map((noteItem,index) => {return(
            <Card 
            className = "m-4"
            key = {index}
            id = {index}
            title = {noteItem.title}
            content = {noteItem.content}
            onDelete = {deleteNote}
            />
            )
            })}

        </div>
        <Footer />       
    </div> 
    ) 
}

export default App


