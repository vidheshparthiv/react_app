import React from 'react'
import Teacher from './Teacher'

const Principal = ({message}) => {
  return (
    <div>Principal
        <Teacher message={message}/>
    </div>
  )
}

export default Principal