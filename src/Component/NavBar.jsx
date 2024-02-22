import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <div className='Navabr'>
          <h1>Blog Post</h1>
          <div className="links">
              <Link to="/">Home</Link>
              <Link to="/create">Add Post</Link>
          </div>
    </div>
  )
}

export default NavBar