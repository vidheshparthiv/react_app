import React from 'react'
import Student from './Student'

const Monitor = ({message}) => {
  return (
    <div>Monitor
         <Student message={message}/>
    </div>
  )
}

export default Monitor