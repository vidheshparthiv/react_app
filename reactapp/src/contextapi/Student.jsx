import React, { useContext } from 'react'

const Student = () => {
  useContext(messageContext)
  return (
    <div>Student
        <h1>{useContext.message}</h1>
    </div>
  )
}

export default Student