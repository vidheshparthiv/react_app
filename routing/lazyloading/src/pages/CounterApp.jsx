import React from 'react'

const CounterApp = () => {
    let [count,setCount]=setCount(process.env.REACT_APP_Count_value);
  return (
    <div>
        <h1>
            count:{count}
        </h1>
        <button onClick={()=>setCount(count+1)}>inc</button>
    </div>
  )
}

export default CounterApp