import React from 'react'

import {useRef,useState} from 'react'
import UncontrolledComponents from './UncontrolledComponents';
import PassFuncAsProp from './PassFuncAsProp';
import UserInput from './UserInput';
import UseFormStatusHook from './UseFormStatusHook';
import UseTransitionHook from './UseTransitionHook';

export default function App() {

  const [color,setColor] = useState("blue")

  const InputRef = useRef(null);
  const ButtonRef = useRef(null);

  const InputHandler = () =>{
    console.log(InputRef);
    InputRef.current.focus()
    InputRef.current.style.color = "red"
    InputRef.current.placeholder = "Change"
    InputRef.current.value = 'Afnan'
    
  }

  const handleTheme = () => {

    if(color == "blue"){
      setColor("green")
    }else{
      setColor("blue")
    }
    ButtonRef.current.style.backgroundColor = color
  }

  const Display = (name) => {
        alert("Hello World My Name Is " + name)
  }

  const IRef = useRef(null)

  const updateInput = () => {
    
    IRef.current.focus();
    IRef.current.value = 1000
    IRef.current.style.color = "whitesmoke"
    IRef.current.style.backgroundColor = "black"
  }

  return (
    <>
      <input ref={InputRef} type='"text' placeholder='Enter name'/>
      <button onClick={InputHandler}>Focus</button>

      <button ref={ButtonRef} onClick={handleTheme}>Theme</button>

      <UncontrolledComponents />

      <PassFuncAsProp Display={Display} name = "Afnan"/>
      <PassFuncAsProp Display={Display} name = "Alfaiz"/>

      {/* Old Way */}
      <UserInput ref={IRef}/>
      <button onClick={updateInput}>Update</button>

      <UseFormStatusHook />

      <UseTransitionHook />
    </>
  )
}
