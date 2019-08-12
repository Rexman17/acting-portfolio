import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

const Nav = () => {

  const style = {textDecoration: 'none', color: 'white' }

  return (
    <div id="navBarDiv">
      <div className="nav-link">
        <Link to="/" style={style}>
          Home
        </Link>
      </div>
        <div className="nav-link">
          <Link to="/about" style={style}>
            About
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/resume" style={style}>
            Resume
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/reels" style={style}>
            Reels
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/photos" style={style}>
            Photos
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/contact" style={style}>
            Contact
          </Link>
        </div>
      </div>
  )
}

export default Nav
