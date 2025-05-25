import React from 'react'
import CollegeComponent from './Components/CollegeComponent'
import { SubjectContext } from './Components/ContextData'

export default function App() {

  const [sub,setSub] = React.useState("Maths");
  const a = "Hello"
  return (
    <>
    <SubjectContext.Provider value={[sub,a]}>
      <select onChange={(e)=>{setSub(e.target.value)}}>
        <option value={"Maths"}>Maths</option>
        <option value={"English"}>English</option>
        <option value={"CS"}>CS</option>
        <option value={"DSA"}>DSA</option>
      </select>
       <CollegeComponent />
    </SubjectContext.Provider>
     
    </>
  )
}
