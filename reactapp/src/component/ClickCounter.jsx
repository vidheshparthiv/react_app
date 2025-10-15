import React,{useState} from 'react'
import CliWithCounter from './CliWithCounter';

const ClickCounter = ({count,increase}) => {//from higher order component via props  
  return (
    <div>
        <h1>ClickCounter</h1>
        <button onClick={increase}>{count}</button>

    </div>
  )
}

export default CliWithCounter(ClickCounter);