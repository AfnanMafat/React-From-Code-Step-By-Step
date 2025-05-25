import React from 'react'
import { SubjectContext } from './ContextData';

export default function SubjectComponent() {

    const [subject,a] = React.useContext(SubjectContext);
    console.log(subject);
    console.log(a);
    
    

  return (
    <>
        <div>
            <h1>Subject Component</h1>
            <h1>Subject Is : {subject}</h1>
        </div>
    </>
  )
}
