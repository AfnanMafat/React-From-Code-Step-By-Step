import React from 'react'
import User from './User'
import UserObj from './UserObj';
import UserArr from './UserArr';
import DefaultProps from './DefaultProps';
import JSXProps from './JSXProps';
import Input from './Input';

export default function App() {
  let Name = "Afnan Mafat";
  let age = 20;

  const UserObject = {
    Uname : "Afnan",
    Uage : 20,
    Usalary : 350000
  }

  const UserArray = [1,2,3,4,5]

  return (
    <>
      <User alpha={Name} age={age}/>
      {/* 1st Way */}
      {/* <UserObj name={UserObject.Uname} age={UserObject.Uage} salary={UserObject.USalary}/> */}

      {/* 2nd Way */}
      <UserObj obj={UserObject}/>

      <UserArr nums={UserArray}/>

      <DefaultProps name="Afnan"/>

      <DefaultProps name="Alfaiz"/>

      <DefaultProps/>

      <JSXProps color='red'>
        <h1>Hello Everyone</h1>
      </JSXProps>

      <JSXProps>
        <h1>Hello People</h1>
      </JSXProps>

      <Input />
    </>
  )
}
