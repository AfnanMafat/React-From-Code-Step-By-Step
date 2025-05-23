import React from 'react'
import {useState} from "react"

export default function ControlledComponent() {

    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
  return (
    <>
        <form action="" method='post'>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Name'/>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password'/>
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email'/>
            <button onClick={()=>{setName("");setEmail("");setPassword("")}}>Clear</button>
            <button>Submit</button>
        </form>

        <h1>Here : </h1>
        <h1>Name : {name}</h1>
        <h1>Password : {password}</h1>
        <h1>Email : {email}</h1>
    </>
  )
}
