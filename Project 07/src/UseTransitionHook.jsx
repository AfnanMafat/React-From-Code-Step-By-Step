import {useTransition} from 'react'

export default function UseTransitionHook() {
    const [pending,startTransition] = useTransition();


    const handleSubmit = () => {
        
        startTransition(async () => {
            await new Promise((res)=>setTimeout(res,2000))
        })

    }
  return (
    <>
        {
            pending ?<img width={"100px"} src='https://loading.io/assets/mod/spinner/spinner/lg.gif' alt='image'/> : null
        }
        <button disabled={pending} onClick={handleSubmit}>Click</button>
    </>
  )
}
