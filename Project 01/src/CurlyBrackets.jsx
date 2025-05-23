import React from 'react'

export default function CurlyBrackets() {
  
  // Variable
  const Name = "Afnan";
  
  // Sum
  const x = 10;
  const y = 20;

  // Function
  function fruit(){
    return (["Apple" + " " + "banana"])
  }

  function Sum(a,b){
    return a+b
  }

  // Conditional
  const User = "Afnan"

  // Object
  const UserObj = {
    name : User,
    gender : "Male"
  }

  // Array
  const NameArr = ["Afnan",'Alfaiz']

  // Image
  const path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s";
  return (
    <>
        <h1>Name : {Name}</h1>
        <h1>Sum : {x+y}</h1>
        <h1>Fruits : {fruit()}</h1>
        <h1>Sum : {Sum(5,7)}</h1>
        <h1>{User ? User : "Not Found"}</h1>
        <h1>{UserObj.name}</h1>
        <h1>{NameArr[0]}</h1>
        <img src={path}/>
    </>
  )
}
