import React, { useContext } from 'react'
import UserContext from '../context/UserContext.jsx'

const Profile = () => {
  let {user,setUser}=useContext(UserContext)
  function handleLogout() {
    setUser(null);
  }
  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <div>
          <h2>Name: {user.name}</h2>
          <h2>Email: {user.email}</h2>
          <button onClick={handleLogout}>Logout</button> 
        </div>
      ) :(
        <h2>Please login</h2>
      )}
    </div>
  )
}

export default Profile;