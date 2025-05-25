import React from 'react'

export default function DerivedState() {
  const [users,setUsers] = React.useState([])
  const [user,setUser] = React.useState("")

  const handleUsers = () => {
    setUsers([...users,user])
  }

  const Totol = users.length;
  const Last = users[users.length-1]
  const Unique = [...new Set(users)].length;

  return (
    <>

      <h1>Totol Users : {Totol}</h1>
      <h1>Last User : {Last}</h1>
      <h1>Unique Users : {Unique}</h1>

      <input onChange={(e)=>{setUser(e.target.value)}} type='text' placeholder='Add User'/>
      <button onClick={handleUsers}>Add User</button>

      {
        users.map((value,index)=>(
          <h4 key={index}>{value}</h4>
        ))
      }
    </>
  )
}
