import React from 'react'
import { Link } from 'react-router-dom'
//give same that is given in pages or called in app
const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to='/home'>Home  </Link>
            <Link to='/about'>About  </Link>
            <Link to='/contact'>Contact  </Link>
            <Link to='/college'>College</Link>
        </nav>
    </div>
  )
}

export default Navbar