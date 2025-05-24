import {useState,useEffect} from "react"
import PropsSideEffect from "./PropsSideEffect";

export default function App() {

  const [counter,setCounter] = useState("")
  const [data,setData] = useState("")

  function CallOnce(){
    console.log("Called");
  }

  function CounterCalled(){
    console.log("Counter Clicked");
    
  }

  useEffect(()=>{
    CallOnce();
  },[])

  useEffect(()=>{
    CounterCalled();
  },[counter])

  return (
    <>
      <button onClick={()=>{setCounter(counter+1)}}>Counter</button>
      <button onClick={()=>{setData(data+1)}}>Data</button>

      <PropsSideEffect counter={counter} data={data}/>
    </>
  )
}
