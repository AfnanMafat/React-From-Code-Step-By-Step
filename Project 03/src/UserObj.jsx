import React from 'react'
/*
export default function UserObj({name,age,salary}) {
  return (
    <>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{salary}</h1>
    </>
  )
}
*/


export default function UserObj({obj}) {
  return (
    <>
        <h1>{obj.Uname}</h1>
        <h1>{obj.Uage}</h1>
        <h1>{obj.Usalary}</h1>
    </>
  )
}
