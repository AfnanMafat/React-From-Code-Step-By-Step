import React from 'react'
import {useState} from 'react'

export default function Radio_Dropdown() {

    const [gender,setGender] = useState("")
    const [city,setCity] = useState("Anand");
  return (
    <>
        <input onChange={(e)=>{setGender(e.target.value)}} type='radio' name='gender' value={"Male"} id='male'/>
        <label htmlFor='male'>Male</label>

        <input onChange={(e)=>{setGender(e.target.value)}} type='radio' name='gender' value={"Female"} id='female' />
        <label htmlFor='female'>Female</label>

        <h2>Selected Gender : {gender}</h2>

        <h1>Select City</h1>
        <select onChange={(e)=>{setCity(e.target.value)}}>
            <option disabled>--Select City--</option>
            <option selected value={"Anand"}>Anand</option>
            <option value={"Godhra"}>Godhra</option>
            <option value={"Surat"}>Surat</option>
            <option value={"Mumbai"}>Mumbai</option>
        </select>

        <h2>Selected City : {city}</h2>
    </>
  )
}
