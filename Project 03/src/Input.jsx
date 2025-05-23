import React from 'react'
import {useState} from "react"

export default function Input() {

    const [value,setValue] = useState("");

  return (
    <>
        <h1>Get Input Field</h1>
        <input type='text'value={value} onChange={(e)=>{setValue(e.target.value) }} placeholder='Enter Name'></input>
        <h1>{value}</h1>
        <button onClick={()=>{setValue("")}}>Clear</button>
    </>
  )
}
