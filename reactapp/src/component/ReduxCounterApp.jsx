import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxCounterApp = () => {
    const count=useSelector((state)=>state.count)//for geting the valu and diaplay
    const dispatch=useDispatch();
  return (
    <div>ReduxCounterApp
        <h1>count : {count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default ReduxCounterApp