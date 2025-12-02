import React from 'react'
import { useNavigate } from 'react-router-dom'
//by using usenavigate
const Details = () => {
  const navigate=useNavigate();
    function handle(){
      navigate('/home')
    }
  return (
    <div>
      <h1>Details of the colege</h1>
      <button onClick={handle}>go to home</button>
    </div>
  )
}

export default Details