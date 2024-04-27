import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='nav'>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/login"><li>Log In</li></Link>
        <Link to="/signup"><li>Sign Up</li></Link>
      </ul>
    </div>
  )
}

export default navbar
