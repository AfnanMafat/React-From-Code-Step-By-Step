import React from 'react'
import {useEffect} from 'react'

export default function PropsSideEffect({counter,data}) {

    function OneTime(){
        console.log("OneTime");
    }

    useEffect(()=>{
        OneTime();
    },[])

    useEffect(()=>{
        OneTime();
    },[counter])

    useEffect(()=>{
        return()=>{
            console.log("Unmount"); 
        }
    },[])
    
  return (
        <>
            {counter}
            {data}
        </>
  )
}
