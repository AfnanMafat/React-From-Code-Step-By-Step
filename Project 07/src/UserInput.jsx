import React from 'react'
/*
function UserInput(props,ref) {
  return (
    <>
        <input type='text'  ref={ref}/>
    </>
  )
}

export default React.forwardRef(UserInput);
*/


export default function UserInput(props) {
  return (
    <>
        <input type='text'  ref={props.ref}/>
    </>
  )
}
