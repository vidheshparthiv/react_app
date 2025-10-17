import React, { useContext } from 'react'
import UserContext from '../context/UserContext.jsx'

const Login = () => {
  let {setUser}=useContext(UserContext);
  function handleChange(){
    setUser({name:"John Doe",email:"johndoe@gmail.com"})
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleChange}>Login</button>
    </div>
  )
}

export default Login