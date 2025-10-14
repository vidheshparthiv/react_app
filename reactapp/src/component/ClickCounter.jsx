import React,{useState} from 'react'

const ClickCounter = () => {
    const [count,setCount]=useState(0)
    function increase(){
        setCount(count+1)
    }
  return (
    <div>
        <h1>ClickCounter</h1>
        <button onClick={increase}>{count}</button>

    </div>
  )
}

export default ClickCounter;