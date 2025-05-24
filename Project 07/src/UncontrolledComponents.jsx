import React from 'react'

export default function UncontrolledComponents() {

    const handleForm = (e) => {
        e.preventDefault();

        const user = document.querySelector("#user").value;

        const password = passRef.current.value;

        console.log(user, password);
        
    }

    const passRef = React.useRef(null)

  return (
    <>
    
        <form action={""} method='post'>
            <input type='text' id='user' placeholder='Enter Your Name'/>
            <input ref={passRef} type='password' id='password' placeholder='Enter Password'/>
            <button onClick={handleForm}>Submit</button>
        </form>
    </>
  )
}

