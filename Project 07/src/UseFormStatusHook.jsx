import React from 'react'
import {useFormStatus} from "react-dom"

export default function UseFormStatusHook() {

    const handleSubmit = async () => {
        await new Promise(res=>setTimeout(res,2000));
        console.log("2 Seconds Delay");
        
    }

    function FormInputs(){
        const {pending} = useFormStatus();
        return(
            <div>
                <input type='text' placeholder='Enter name'/>  
            <input type='password' placeholder='Enter password'/>  
            <button disabled={pending}>{pending ? "Submitting...":"Submit"}</button>
            </div>
        )
    }

  return (
    <>
        <form action={handleSubmit} >
            <FormInputs />
        </form>
    </>
  )
}
