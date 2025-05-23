import React from 'react'
import {useState} from "react"
import Clock from './Clock'

export default function Color() {
    const [color,setColor] = useState("yellow")
  return (

    <>
        <select onChange={(e)=>{setColor(e.target.value)}}>
            <option value={"yellow"}>Yellow</option>
            <option value={"green"}>Green</option>
            <option value={"red"}>Red</option>
        </select>

       <Clock color={color}/>
    </>
  )
}
