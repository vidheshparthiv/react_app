import React, { useState } from 'react';
function PropsDemo({data}){//when using class we dontt need to use props
  return(
    <div>
       {data.map((emp, index) => (
        <div key={index}>
          <h3>{emp.name}</h3>
          <p>Role: {emp.role}</p>
          <p>Salary: ₹{emp.salary}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}
export default PropsDemo;    

