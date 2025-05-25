import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

export default function Parent() {
    const [user, setUser] = React.useState("");
  return (
    <>
        <Child1 setUser={setUser}/>
        <Child2 user={user}/>
    </>
  )
}
