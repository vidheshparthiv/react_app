import React,{useState} from 'react'

const ClickCounterHoC = () => {
    const [count,setCount]=useState(0)
    function increase(){
        setCount(count+1)
    }
  return (
    <div>
        <button onMouseOver={increase}>{count}</button>
    </div>
  )
}

export default ClickCounterHoC