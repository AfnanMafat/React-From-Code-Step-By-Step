import React from 'react'

export default function User({data}) {
  return (
    <>
        <div style={{
            color:"red",
            border:"2px solid black",
            margin:"auto",
            width:"250px",
            marginTop:"2px",
            background:"aqua",
            textAlign:'center'
        }}>

            <h3>Name : {data.name}</h3>
            <h3>Age : {data.age}</h3>
            <h3>Salary : {data.salary}</h3>

        </div>
    </>
  )
}
