import React from 'react'

export default function UseIdHook() {

    const name = React.useId()
    const age = React.useId()
    const password = React.useId()

    // or 
    const user = React.useId()

    function FormFill(){
        return(
            <form>
            <label htmlFor={user + "name"}>Enter Name</label>
            <input type='text' name={name} id={user + "name"}/>
        </form>
        )
    }
  return (
    <>
        <FormFill />
        <hr />
        <FormFill />

    </>
  )
}
