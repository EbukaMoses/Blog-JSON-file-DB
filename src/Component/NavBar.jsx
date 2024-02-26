import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const NavBar = () => {
  return (
    <div className="Navabr">
      <h1>Blog Post</h1>
      <div className="links">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/create">Add Post</Link>
        </span>
      </div>
    </div>
  );
}

export default NavBar