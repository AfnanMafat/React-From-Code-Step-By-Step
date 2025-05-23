import React from 'react'

export default function ClickEvent_FunctionCall() {

    const Alert = () => {
        alert("Welcome")
    }

    function Alert2(){
        alert("Hello")
    }

    const ParaFunc = (Fruit) => {
        alert(Fruit)
    }
  return (
    <>
        <button onClick={Alert}>Arrow Function</button>
        <button onClick={Alert2}>Normal Function</button>
        <button onClick={()=>ParaFunc("Banana")}>Para Func</button>
    </>
  )
}
