import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function College() {
  return (
    <div>
        <h1>college info page</h1>
        <nav>
            <NavLink  to='/college/student' style={({isActive})=>({
                color:isActive?"Red":"black"
            })}>
                Student
            </NavLink>
            <NavLink  to='details' style={({isActive})=>({
                color:isActive?"Red":"black"
            })}>
                details
            </NavLink>
            <NavLink  to='department' style={({isActive})=>({
                color: isActive?"Red":"black"
            })}>
                department
            </NavLink>
        </nav>
        <br/>
        <Outlet/>{/* //make you to access clildren */}
    </div> 
  )
}

export default College