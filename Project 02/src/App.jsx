import React from 'react'
import {useState} from 'react'

export default function App() {

  let fruit = "Apple";

  const [value,setValue] = useState("Hello");

  const [count,setCount] = useState(0)

  const [Toggle,setToggle] = useState("Show")

  const [disp,setDisp] = useState(0)

  const handleFruit = () => {
    fruit = "Banana"
    alert("Called")
  }

  return (
    <>
      {fruit}
      <button onClick={handleFruit}>Change</button>

      {value}
      <button onClick={()=>{setValue("World")}}>Change Value</button>

      {count}
      <button onClick={()=>{setCount(count + 1)}}>Increase</button>

      <button onClick={()=>{Toggle == "Hide" ? setToggle("Show"): setToggle("Hide")}}>{Toggle}</button>

      {disp ? <h1>Hello World</h1> : <h1>Hello People</h1>}
      <button onClick={() => setDisp(!disp)}>Toggle</button>
    </>
  )
}
