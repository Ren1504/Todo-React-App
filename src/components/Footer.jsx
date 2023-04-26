import React from "react";
import "./Footer.css";

const date = new Date();
const year = date.getFullYear();

function Footer(){
    return(<footer className = "text-center text-lg-start">
                <div className = "text-center p-3">Copyright © {year}</div>
            </footer>)
}

export default Footer