
import './App.css'
import React from 'react'

export default function App() {

  const CollegeData = [
    {
      name : "GCET",
      city : "Anand",
      students : [
        {
          name : "Afnan",
          age : 20,
          salary : 250000
        },
        {
          name : "Hasnain",
          age : 22,
          salary : 255000
        },
        {
          name : "Alfaiz",
          age : 12,
          salary : 275000
        }
      ]
    },
    {
      name : "BVM",
      city : "Anand",
      students : [
        {
          name : "Afnan",
          age : 20,
          salary : 250000
        },
        {
          name : "Hasnain",
          age : 22,
          salary : 255000
        },
        {
          name : "Alfaiz",
          age : 12,
          salary : 275000
        }
      ]
    },
    {
      name : "DAIICT",
      city : "Gandhinagar",
      students : [
        {
          name : "Afnan",
          age : 20,
          salary : 250000
        },
        {
          name : "Hasnain",
          age : 22,
          salary : 255000
        },
        {
          name : "Alfaiz",
          age : 12,
          salary : 275000
        }
      ]
    }
  ]
  return (
    <>
      {
        CollegeData.map((college,index)=>(
          <div key={index}>
              <h1>Name : {college.name}</h1>
              <ul>
                <li>
                  <h3>City : {college.city}</h3>
                </li>

                <li>
                  {
                    college.students.map((student)=>(
                      <div>
                        <ol>
                          <li>{student.name}</li>
                        <li>{student.age}</li>
                        <li>{student.salary}</li>
                        </ol>
                      </div>
                    ))
                  }
                </li>
              </ul>
          </div>
        ))
      }
    </>
  )
}
