import React from 'react'

export default function JSXProps({children,color="green"}) {
  return (
    <>  
        <div style={{color:color,border:"2px solid black",marginTop:"5px"}}>
            {children}
        </div>
    </>
  )
}
