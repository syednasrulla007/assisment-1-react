import React, { useState } from "react"
import './App.css'
import Functional from "./component/Functional"
import ClassComponent from "./component/ClassComponent"

const App=()=>{
  const [show,setshow]=useState(false)
  const [show2,setshow2]=useState(false)

  const btn1click=()=>{
    setshow(!show)
  }
  const btn2click=()=>{
    setshow2(!show2)
  }
  return(
    <div className="container">
      <div className="box1"><h1>Styling Using Functional and Class Component</h1></div>
      <div className="box2">
      <button onClick={btn1click} id="btn1">To see styling in functional component</button>
      <button onClick={btn2click} id="btn2">To see styling in class component</button>
      </div>
      <div className="box3">
        {show ? <Functional/>:<div className="fc"></div>}
        {show2 ? <ClassComponent/>:<div className="fc"></div>}
      </div>


    </div>
  )
}
export default App;
