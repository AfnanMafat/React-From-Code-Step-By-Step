import React from 'react'

export default function UpdatingArrayInState() {

    const [Data,setData] = React.useState([
        "Afnan",
        "Alfaiz",
        'Hasnain'
    ])

    const [DataDetailed,setDataDetailed] = React.useState([
        {
            name : 'Afnan',
            age : 20
        },
        {
            name : 'Alfaiz',
            age : 18
        },
        {
            name : 'Hasnain',
            age : 21
        }
    ])

    const handleUser = (e) => {

        Data[Data.length - 1] = e.target.value;
        setData([...Data])
    }

    const handleUserAge = (age) => {

        DataDetailed[DataDetailed.length-1].age = age;
        setDataDetailed([...DataDetailed])
    }
  return (

    <>
        <hr/>
        <input onChange={(e)=>{handleUser(e)}} type='text' placeholder='Enter User Name'/>
        {
            Data.map((value,index)=>(
                <h3 key={index}>{value}</h3>
            ))
        }

        <hr />

        <input onChange={(e)=>{handleUserAge(e.target.value)}} type='text' placeholder='Last User Age'/>
        {
            DataDetailed.map((value,index)=>(
                <h3 key={index}>{value.name},{value.age}</h3>
            ))
        }
    </>
  )
}
