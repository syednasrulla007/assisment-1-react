import React from "react";
import './Functional.css'
const Functional=()=>{
    return(
       <div id="card1" className="card1">
         <h1>This is created using functional component</h1>
         <p>This is done using external CSS</p>
         <p style={{color:"blue"}}>This is done using inline CSS</p>
       </div>
    )
}
export default Functional;
