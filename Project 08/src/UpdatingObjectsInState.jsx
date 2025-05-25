import React from 'react'

export default function UpdatingObjectsInState() {

    const [User,setUser] = React.useState({
        name : "Afnan",
        age : "20",
        salary : "257000",
        address : {
            city : "Godhra",
            country : 'India'
        }
    })

    const getName = (e) => {
        User.name = e.target.value; 
        setUser({...User}) 

        // or

        let Temp = User;
        Temp.name = e.target.value

        setUser({...Temp})
    }

    const getCity = (city) => {
        User.address.city = city;        

        setUser({...User,address:{...User.address,city}})
    }

  return (
   <>
        <h1>User Information</h1>
        <h1>Name : {User.name}</h1>
        <h1>Age : {User.age}</h1>
        <h1>Salary : {User.salary}</h1>

        <h1>Address : <br />
            City : {User.address.city}
            Country : {User.address.country}
        </h1>

        <input type='text' onChange={(e)=>{getName(e)}} placeholder='Change Name'/>
        <input type='text' onChange={(e)=>{getCity(e.target.value)}} placeholder='Change City'/>
   </>
  )
}
