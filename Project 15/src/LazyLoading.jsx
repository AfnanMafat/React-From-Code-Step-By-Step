import React,{Suspense} from 'react'

const User = React.lazy(()=>import('./User'))

export default function LazyLoading() {

    const [load,setLoad] = React.useState(false)
  return (
    <>
        <h1>Lazy Loading</h1>
        {
            load? <Suspense fallback={<h3>Loading...</h3>}> <User /> </Suspense>:null
        }

        <button onClick={()=>setLoad(true)}>Load User</button>
    </>
  )
}
