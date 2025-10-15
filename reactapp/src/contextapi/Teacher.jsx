import React from 'react'
import Monitor from './Monitor'

const Teacher = ({message}) => {
  return (
    <div>Teacher
         <Monitor message={message}/>
    </div>
  )
}

export default Teacher