import React, {useReducer} from 'react'
import LazyLoading from './LazyLoading';

const emptyData = {
    name :  '',
    password :  '',
    email : '',
    city : ''
}

const reducer = (data,action) => {
  return {...data,[action.type]:action.val}
}



export default function App() {

  

  const [state,dispatch] = useReducer(reducer,emptyData);
  console.log(state);
  

  return (
   <>

   <LazyLoading />
      <div>
        <input type='text' onChange={(e)=>dispatch({val:e.target.value,type:'name'})} placeholder='Enter Name' />
        <input type='text' onChange={(e)=>dispatch({val:e.target.value,type:'password'})}  placeholder='Enter Password' />
        <input type='text' onChange={(e)=>dispatch({val:e.target.value,type:'email'})}  placeholder='Enter Email' />
        <input type='text' onChange={(e)=>dispatch({val:e.target.value,type:'city'})}  placeholder='Enter City' />
      </div>

      <ul>
        <li>Name : {state.name}</li>
        <li>Password : {state.password}</li>
        <li>Email : {state.email}</li>
        <li>City : {state.city}</li>
      </ul>
   </>
  )
}
