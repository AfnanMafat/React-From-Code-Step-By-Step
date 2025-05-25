import React from 'react'
import {Link} from 'react-router'

export default function UserList() {
    const UserData = [
        {
            id : 1,
            name : 'Afnan'
        },
        {
            id : 2,
            name : 'Alfaiz'
        },
        {
            id : 3,
            name : 'Hasnain'
        }
    ]
  return (
    <>

    
        <h1>User List</h1>
        {
            UserData.map((value)=>(
                <div>
                    <ul>
                      <li> <Link to={"/Users/" + value.id}>{value.name}</Link> </li>
                    </ul>
                </div>
            ))
        }

        <hr></hr>

        <h1>User List</h1>
        {
            UserData.map((value)=>(
                <div>
                    <ul>
                      <li> <Link to={"/Users/" + value.id +"/" + value.name}>{value.name}</Link> </li>
                    </ul>
                </div>
            ))
        }
    </>
  )
}
