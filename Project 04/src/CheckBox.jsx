import React from 'react'
import {useState} from 'react'

export default function CheckBox() {

    const [skills,setSkills] = useState([])
    
    const handleSkills = (e) => {
        if(e.target.checked == true){
            setSkills([...skills ,e.target.value])
        }else{
            setSkills([...skills.filter((item)=>item!=e.target.value)])
        }
    }

  return (
    <>
        <h3>Select Your Skills</h3>
        <input onChange={handleSkills} type='checkbox' id='java' value={"Java"} name='java'/>
        <label htmlFor='java'>Java</label>

        <input onChange={handleSkills} type='checkbox' id='c#' value={"C#"} name='c#'/>
        <label htmlFor='c#'>C#</label>

        <input onChange={handleSkills} type='checkbox' id='c' value={"C"} name='c'/>
        <label htmlFor='c'>C</label>

        <h1>{skills.toString()}</h1>
    </>
  )
}
