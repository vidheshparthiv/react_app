import React, { useState } from 'react'

const CliWithCounter = (wrapperComponent) => {
  return (props)=>{
    let [count,setcount]=useState(0);
    function increase(){
        setcount(prev=>prev+1);
    }
  return(
    <wrapperComponent count={count} increase={increase}{...props}/>
  )
 }
}

export default CliWithCounter