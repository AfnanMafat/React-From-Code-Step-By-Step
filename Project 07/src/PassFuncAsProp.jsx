import React from 'react'

export default function PassFuncAsProp({Display,name}) {
  return (
    <>
        <button onClick={()=>{Display(name)}}>Click Me</button>
    </>
  )
}
