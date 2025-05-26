import React, { useEffect, useState } from 'react'

export default function App() {

  const [usersData,setUsersData] = useState([])

  useEffect(()=>{
    getUserData()
  },[])

  async function getUserData(){
    const url = "https://dummyjson.com/users";
    let response = await fetch(url)

    response = await response.json() 

    setUsersData(response.users);
    
    
  }
  return (
    <>
      <h1>UsersData</h1>
      <ul>
      {
        
        usersData && usersData.map((value,index)=>(
          <div key={index}>
              <li>{value.id} {value.firstName} {value.lastName}</li>
          </div>
        ))
      }
       </ul>
    </>
  )
}
