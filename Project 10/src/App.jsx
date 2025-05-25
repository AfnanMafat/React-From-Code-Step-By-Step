import React from 'react'
import useToggle from '../useToggle'

export default function App() {

  const [value,setValue] = useToggle(true);

  return (
    <>

    <button onClick={setValue}>Toggle Heading</button>
    <button onClick={()=>{setValue(false)}}>Hide Heading</button>
    <button onClick={()=>{setValue(true)}}>Show Heading</button>

    {
      value? <h1>Hello World</h1>:null
    }

    </>
  )
}
