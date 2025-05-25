import React from 'react'

export default function UseActionStateHook() {
  const handleSubmit = async(previousData,formData) => {
    let name = formData.get('name')
    let password = formData.get('password')
    await new Promise(res => setTimeout(res,2000))

    console.log(name , password);

    if(name && password){
      return {
        message : "Submitted",name,password
      }
    }else{
      return {
        error : 'Failed to Submit',name,password
      }
    }
    

  }
  const [Data,action,pending] = React.useActionState(handleSubmit,undefined);
  

  return (
    <>
      <form action={action}>
        <input defaultValue={Data?.name} type='text' name='name' placeholder='Enter Name'/>
        <br />

        <input defaultValue={Data?.password} type='password'name='password' placeholder='Enter Password'/>
        <br />
        <button disabled={pending}>Submit</button>
      </form>

        {
          Data?.error && <span style={{color:"red"}}>{Data?.error}</span>
        }

        {
          Data?.message && <span style={{color:'green'}}>{Data?.message}</span>
        }
        {
          console.log(Data)
          
        }
      
        <h3>Name : {Data?.name}</h3>
        <h3>Password : {Data?.password}</h3>
      
    </>
  )
}
