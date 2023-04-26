import React from "react";
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Header()
{
    return(
    <div>
        <nav className="nav navbar">
            <h1 className=" header mb-3 h1">Notes</h1>
            <h3 className = "quote">Out of clutter, find simplicity.</h3>
        </nav>
    </div>
)
    
}

export default Header