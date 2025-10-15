import React, { useState } from 'react'

const CliWithCounter = (WrapperComponent) => {
  return (props)=>{
    let [count,setcount]=useState(0);
    function increase(){
        setcount((prev)=>prev+1);
    }
  return(
    <WrapperComponent count={count} increase={increase}{...props}/>
  )
 }
} 

export default CliWithCounter