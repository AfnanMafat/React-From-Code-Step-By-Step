import React from "react";
import User from "./User";

export default function MapFunc() {
  const userNames = ["Afnan", "Alfaiz", "Hasnaink"];

  const userData = [
    {
      name: "Afnan",
      age: 20,
      salary: 250000,
    },
    {
      name: "Arman",
      age: 23,
      salary: 270000,
    },
    {
      name: "Alfaiz",
      age: 19,
      salary: 290000,
    },
  ];

  return (
    <>
    <h1>Objects Map</h1>
      <table border={1}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
          </tr>
        </thead>

        <tbody>
          {
          userData.map((value) => (
            <tr key={value.name}>
              <td>{value.name}</td>
              <td>{value.age}</td>
              <td>{value.salary}</td>
            </tr>
          ))
        }
        </tbody>
      </table>

      <h1>Arrays Map</h1>
      <ul>
        {
            userNames.map((value)=>(
                <li>{value}</li>
            ))
        }
      </ul>

      {
        userData.map((user)=>(
            <User data={user}/>
        ))
      }
    </>
  );
}
