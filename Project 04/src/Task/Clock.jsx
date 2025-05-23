import React from 'react'

export default function Clock({color}) {

    

  return (
    <div style={{
        background:"black",
        width:"100px",
        textAlign:"center",
        borderRadius:"5px",
        color:color
    }}>
        {new Date().toLocaleTimeString()}
    </div>
  )
}
