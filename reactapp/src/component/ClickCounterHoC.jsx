import React,{useState} from 'react'
import CliWithCounter from './CliWithCounter'

const ClickCounterHoC = ({count,increase}) => {
  return (
    <div>
        <button onMouseOver={increase}>{count}</button>
    </div>
  )
}

export default CliWithCounter(ClickCounterHoC)